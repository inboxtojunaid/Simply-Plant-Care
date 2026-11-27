/* Simply Plant Care — shared searchable-dropdown (combobox) pattern.
 *
 * One shared pattern for every <select> that should look like the rest of
 * the site instead of a native dropdown. Plain JS, no dependencies.
 *
 * USAGE (in a tool page's HTML — nothing else to wire up):
 *   <select id="plant-select" data-combobox
 *           data-placeholder="Choose a plant"
 *           data-search="Search plants…">…</select>
 *   <script src="/js/combobox.js"></script>
 *
 * HOW IT WORKS
 * - The original <select> stays in the DOM, visually hidden
 *   (.combobox-hidden-select in global.css), and stays the source of truth.
 *   The combo is built around it: a button-like field + a panel with a
 *   search input on top and a scrollable option list below.
 * - Picking an option sets select.value and dispatches a bubbling 'change'
 *   event on the select, so every existing calculation listener fires
 *   unchanged. No page calculation code needs to change.
 * - The combo re-reads the select whenever the panel opens, whenever the
 *   select fires 'change', and whenever its options change (MutationObserver
 *   on childList/subtree). Pages whose options are populated by page JS
 *   (the plant selects) therefore work with no extra wiring; page scripts
 *   may also call window.SPCCombobox.refreshAll() after populating.
 * - Optgroups in the select render as group headings in the list.
 *
 * API: window.SPCCombobox = { init(select), initAll(root), refresh(select),
 *   refreshAll(), closeAll() }
 *
 * KEYBOARD / A11Y: button opens with Enter/Space/Down; panel search filters
 * live; Up/Down/Home/End move the active option; Enter picks it; Escape
 * closes; click-outside closes. Button has aria-haspopup="listbox" and
 * aria-expanded; list has role="listbox", options role="option" with
 * aria-selected; the search input uses aria-activedescendant.
 */
(function () {
  "use strict";

  var openCombo = null; // the currently open combo instance, if any

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function labelTextFor(select) {
    var label = select.id ? document.querySelector('label[for="' + select.id + '"]') : null;
    if (label && label.textContent.trim()) return label.textContent.trim();
    return select.getAttribute("aria-label") || "Choose an option";
  }

  function readOptions(select) {
    var out = [];
    for (var i = 0; i < select.options.length; i++) {
      var opt = select.options[i];
      var group = "";
      var parent = opt.parentNode;
      if (parent && parent.tagName === "OPTGROUP") group = parent.label || "";
      out.push({
        value: opt.value,
        text: opt.textContent,
        group: group,
        disabled: !!opt.disabled,
        selected: !!opt.selected,
      });
    }
    return out;
  }

  function createCombo(select) {
    if (select.dataset.comboboxReady) return null;
    select.dataset.comboboxReady = "1";

    var id = select.id || ("combo-" + Math.random().toString(36).slice(2, 8));
    var placeholder = select.getAttribute("data-placeholder") || "Choose an option";
    var searchPlaceholder = select.getAttribute("data-search") || "Search…";
    var fieldLabel = labelTextFor(select);

    var root = document.createElement("div");
    root.className = "combobox";
    if (select.id) root.setAttribute("data-combobox-for", select.id);

    select.parentNode.insertBefore(root, select);
    root.appendChild(select);
    select.classList.add("combobox-hidden-select");

    var button = document.createElement("button");
    button.type = "button";
    button.className = "combobox-btn";
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "cb-panel-" + id);
    button.setAttribute("aria-label", fieldLabel);

    var valueSpan = document.createElement("span");
    valueSpan.className = "combobox-value";
    var chevron = document.createElement("span");
    chevron.className = "combobox-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "▾";
    button.appendChild(valueSpan);
    button.appendChild(chevron);

    var panel = document.createElement("div");
    panel.className = "combobox-panel";
    panel.id = "cb-panel-" + id;
    panel.hidden = true;

    var search = document.createElement("input");
    search.type = "search";
    search.className = "combobox-search";
    search.placeholder = searchPlaceholder;
    search.setAttribute("aria-label", "Search " + fieldLabel.toLowerCase());
    search.autocomplete = "off";

    var list = document.createElement("ul");
    list.className = "combobox-list";
    list.setAttribute("role", "listbox");
    list.setAttribute("aria-label", fieldLabel);

    panel.appendChild(search);
    panel.appendChild(list);
    root.appendChild(button);
    root.appendChild(panel);

    var combo = {
      select: select,
      root: root,
      button: button,
      valueSpan: valueSpan,
      panel: panel,
      search: search,
      list: list,
      placeholder: placeholder,
      activeIndex: -1, // index into the visible option <li> elements
      options: [],
    };

    // ---- rendering -------------------------------------------------------
    function optionId(index) {
      return "cb-" + id + "-opt-" + index;
    }

    function rebuild() {
      combo.options = readOptions(select);
      list.innerHTML = "";
      var lastGroup = null;
      combo.options.forEach(function (opt, i) {
        if (opt.group && opt.group !== lastGroup) {
          var heading = document.createElement("li");
          heading.className = "combobox-group";
          heading.setAttribute("aria-hidden", "true");
          heading.textContent = opt.group;
          heading.dataset.group = opt.group;
          list.appendChild(heading);
          lastGroup = opt.group;
        }
        if (!opt.group) lastGroup = null;
        var li = document.createElement("li");
        li.className = "combobox-option";
        li.id = optionId(i);
        li.setAttribute("role", "option");
        li.setAttribute("data-value", opt.value);
        li.setAttribute("data-index", String(i));
        li.setAttribute("aria-selected", opt.selected ? "true" : "false");
        if (opt.disabled) li.setAttribute("aria-disabled", "true");
        li.textContent = opt.text;
        list.appendChild(li);
      });
      var empty = document.createElement("li");
      empty.className = "combobox-empty";
      empty.textContent = "No matches";
      empty.hidden = true;
      list.appendChild(empty);
      combo.activeIndex = -1;
      search.removeAttribute("aria-activedescendant");
      applyFilter(search.value);
      syncLabel();
    }

    function visibleOptions() {
      var items = [];
      list.querySelectorAll(".combobox-option").forEach(function (li) {
        if (li.style.display !== "none" && li.getAttribute("aria-disabled") !== "true") items.push(li);
      });
      return items;
    }

    function applyFilter(query) {
      var q = (query || "").trim().toLowerCase();
      var anyVisible = false;
      list.querySelectorAll(".combobox-option").forEach(function (li) {
        var show = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
        li.style.display = show ? "" : "none";
        if (show) anyVisible = true;
      });
      // Hide group headings that have no visible option under them.
      list.querySelectorAll(".combobox-group").forEach(function (heading) {
        var sibling = heading.nextElementSibling;
        var hasVisible = false;
        while (sibling && !sibling.classList.contains("combobox-group") && !sibling.classList.contains("combobox-empty")) {
          if (sibling.classList.contains("combobox-option") && sibling.style.display !== "none") hasVisible = true;
          sibling = sibling.nextElementSibling;
        }
        heading.style.display = hasVisible ? "" : "none";
      });
      var empty = list.querySelector(".combobox-empty");
      if (empty) empty.hidden = anyVisible;
      setActive(-1);
    }

    function syncLabel() {
      // Show the selected option's text (including a "" placeholder option
      // such as pot-size's "No specific plant…"); fall back to the
      // data-placeholder only when nothing is selected / no options yet.
      var text = placeholder;
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].selected) { text = select.options[i].textContent; break; }
      }
      valueSpan.textContent = text;
      button.title = text;
      list.querySelectorAll(".combobox-option").forEach(function (li) {
        li.setAttribute("aria-selected", li.getAttribute("data-value") === select.value ? "true" : "false");
      });
    }

    // ---- open / close ----------------------------------------------------
    function open() {
      if (openCombo && openCombo !== combo) openCombo.close();
      rebuild();
      search.value = "";
      applyFilter("");
      panel.hidden = false;
      root.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      openCombo = combo;
      search.focus();
    }

    function close(focusButton) {
      if (panel.hidden) return;
      panel.hidden = true;
      root.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      if (openCombo === combo) openCombo = null;
      if (focusButton) button.focus();
    }

    combo.open = open;
    combo.close = close;
    combo.rebuild = rebuild;
    combo.syncLabel = syncLabel;

    // ---- picking ---------------------------------------------------------
    function pick(li) {
      if (!li || li.getAttribute("aria-disabled") === "true") return;
      select.value = li.getAttribute("data-value");
      select.dispatchEvent(new Event("change", { bubbles: true }));
      syncLabel();
      close(true);
    }

    function setActive(index) {
      var items = visibleOptions();
      list.querySelectorAll(".combobox-option.is-active").forEach(function (li) {
        li.classList.remove("is-active");
      });
      combo.activeIndex = index;
      if (index >= 0 && items[index]) {
        items[index].classList.add("is-active");
        search.setAttribute("aria-activedescendant", items[index].id);
        if (typeof items[index].scrollIntoView === "function") {
          items[index].scrollIntoView({ block: "nearest" });
        }
      } else {
        search.removeAttribute("aria-activedescendant");
      }
    }

    function moveActive(delta) {
      var items = visibleOptions();
      if (!items.length) return;
      var next = combo.activeIndex + delta;
      if (next < 0) next = 0;
      if (next >= items.length) next = items.length - 1;
      setActive(next);
    }

    // ---- events ----------------------------------------------------------
    button.addEventListener("click", function () {
      if (panel.hidden) open(); else close(false);
    });
    button.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        open();
      } else if (e.key === " " && panel.hidden) {
        // Space would also fire a click on keyup; open here and swallow it.
        e.preventDefault();
        open();
      } else if (e.key === "Escape" && !panel.hidden) {
        e.preventDefault();
        close(false);
      }
    });
    search.addEventListener("input", function () {
      applyFilter(search.value);
    });
    search.addEventListener("keydown", function (e) {
      var items = visibleOptions();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        moveActive(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        moveActive(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(items.length - 1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        pick(combo.activeIndex >= 0 ? items[combo.activeIndex] : items[0]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      }
    });
    list.addEventListener("click", function (e) {
      var li = e.target.closest ? e.target.closest(".combobox-option") : null;
      if (li && list.contains(li)) pick(li);
    });
    // Keep the button label in sync when page code changes the select.
    select.addEventListener("change", syncLabel);

    // Rebuild when page JS repopulates the select's options.
    if (typeof MutationObserver !== "undefined") {
      var observer = new MutationObserver(function () {
        rebuild();
      });
      observer.observe(select, { childList: true, subtree: true });
    }

    rebuild();
    return combo;
  }

  var combos = [];

  function init(select) {
    if (!select || select.tagName !== "SELECT") return null;
    var combo = createCombo(select);
    if (combo) combos.push(combo);
    return combo;
  }

  function initAll(root) {
    (root || document).querySelectorAll("select[data-combobox]").forEach(function (select) {
      init(select);
    });
  }

  function refresh(select) {
    if (!select) return;
    var combo = combos.find(function (c) { return c.select === select; });
    if (combo) { combo.rebuild(); combo.syncLabel(); }
  }

  function refreshAll() {
    combos.forEach(function (combo) { combo.rebuild(); combo.syncLabel(); });
  }

  function closeAll() {
    if (openCombo) openCombo.close();
  }

  document.addEventListener("click", function (e) {
    if (openCombo && !openCombo.root.contains(e.target)) openCombo.close();
  });

  window.SPCCombobox = {
    init: init,
    initAll: initAll,
    refresh: refresh,
    refreshAll: refreshAll,
    closeAll: closeAll,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { initAll(); });
  } else {
    initAll();
  }
})();
