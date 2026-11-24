---
title: "How Do You Take Care of Succulents?"
description: "Succulents need bright light, very little water, and fast-draining soil. Learn the simple routine that keeps them plump, compact, and rot-free indoors."
keyword: "how do you take care of succulents"
category: "watering"
hero: "/images/how-do-you-take-care-of-succulents.webp"
heroAlt: "A collection of small succulents in terracotta and ceramic pots on a sunny windowsill"
date: "2026-11-24"
updated: "2026-11-24"
related: ["how-to-take-care-of-a-cactus-indoors", "how-to-take-care-of-a-snake-plant", "how-do-you-take-care-of-plants"]
---

So, how do you take care of succulents? The whole routine can be summed up in one sentence: give them as much light as you can, water them rarely but thoroughly, and never let their roots sit in wet soil. Succulents store water in their leaves, stems, or roots, which is why they survive drought so well — and why overwatering is the thing that kills most of them indoors.

If you have killed a succulent before, you are in good company. The usual story is a plant bought in a pretty pot with no drainage, watered a little bit every few days, and slowly turning to mush. The fix is not a secret technique. It is a change of habits: brighter light, a pot that drains, and watering only when the soil is truly dry.

## At a glance

| Need | What succulents want |
|---|---|
| Light | As much bright light as possible; several hours of direct sun for most types |
| Water | Soak fully, then wait until soil is completely dry — often 2–4 weeks indoors |
| Soil | Very gritty, fast-draining cactus or succulent mix |
| Pot | Drainage holes essential; terracotta helps soil dry faster |
| Temperature | 15–27°C (59–80°F); protect from frost |
| Humidity | Low to average indoor humidity is fine |
| Feeding | Light feeding in spring and summer only |
| Difficulty | Easy, once watering habits are right |

## Light: the ingredient most people skip

Light is where most indoor succulents quietly fail. A succulent on a bookshelf across the room from a window is not getting enough light, even if the room feels bright to you. Without enough light, succulents stretch — stems grow long and pale, leaves spread apart, and the plant loses its compact shape. This stretching is called etiolation, and stretched growth will not shrink back.

Most succulents want several hours of direct sun a day, ideally from a south- or west-facing window (or an east-facing window as a minimum). A few hours of morning sun plus bright indirect light for the rest of the day is a good target. If your only windows face north, or the plant sits more than a metre from the window, consider a small grow light.

One caution: a succulent bought from a shaded shop shelf can sunburn if it is moved straight into harsh midday sun. Give it a week or two of gradually increasing sun, and watch for pale, bleached patches on the leaves.

## Watering: soak and dry

Succulents want the opposite of what most houseplants want. Instead of small, frequent drinks, they want a deep soak followed by a long dry period — the same pattern they evolved for in dry climates.

Here is the method: water until it runs freely from the drainage holes, empty the saucer, and then do not water again until the soil is dry all the way through. Indoors that usually means every two to four weeks, but it varies with pot size, light, and season. In winter, when growth slows, many succulents need water only once a month or even less.

Never water on a fixed schedule, and never give "a little splash" every few days. Small, frequent watering keeps the top of the soil damp while the roots stay dry, or worse, keeps the roots constantly moist without ever flushing the soil. Use the decision guide below before you reach for the watering can.

<div class="widget" id="how-do-you-take-care-of-succulents-widget">
  <h3>Should I water my succulent today?</h3>
  <p>Work through the three checks below. The guide will tell you whether to water now or wait.</p>
  <p><strong>Step 1 — The finger test:</strong> push your finger about 5 cm (2 in) into the soil.</p>
  <button type="button" data-how-do-you-take-care-of-succulents-step="1" data-how-do-you-take-care-of-succulents-answer="dry">Soil feels dry</button>
  <button type="button" data-how-do-you-take-care-of-succulents-step="1" data-how-do-you-take-care-of-succulents-answer="damp">Soil feels damp or cool</button>
  <p><strong>Step 2 — Soil colour:</strong> look at the surface of the soil.</p>
  <button type="button" data-how-do-you-take-care-of-succulents-step="2" data-how-do-you-take-care-of-succulents-answer="dry">Pale and dry-looking</button>
  <button type="button" data-how-do-you-take-care-of-succulents-step="2" data-how-do-you-take-care-of-succulents-answer="damp">Dark and moist-looking</button>
  <p><strong>Step 3 — Pot weight:</strong> lift the pot and compare it with how it feels after watering.</p>
  <button type="button" data-how-do-you-take-care-of-succulents-step="3" data-how-do-you-take-care-of-succulents-answer="dry">Noticeably light</button>
  <button type="button" data-how-do-you-take-care-of-succulents-step="3" data-how-do-you-take-care-of-succulents-answer="damp">Still fairly heavy</button>
  <p id="how-do-you-take-care-of-succulents-result" aria-live="polite">Answer the three checks above to get your answer.</p>
  <button type="button" id="how-do-you-take-care-of-succulents-reset">Start again</button>
</div>
<script>
(function () {
  var widget = document.getElementById('how-do-you-take-care-of-succulents-widget');
  var out = document.getElementById('how-do-you-take-care-of-succulents-result');
  var resetBtn = document.getElementById('how-do-you-take-care-of-succulents-reset');
  if (!widget || !out) return;
  var answers = {};
  function verdict() {
    var dryCount = 0;
    ['1', '2', '3'].forEach(function (s) { if (answers[s] === 'dry') dryCount++; });
    if (dryCount === 3) {
      out.textContent = 'Water now. All three checks say dry — soak the soil until water runs from the drainage holes, then empty the saucer.';
    } else if (dryCount === 2) {
      out.textContent = 'Probably water, but check once more: if the soil is dry at the bottom of the pot too, go ahead and soak it. If you are unsure, wait 2–3 days and re-check.';
    } else {
      out.textContent = 'Wait. At least one check says the soil is still damp — watering now risks root rot. Check again in a few days.';
    }
  }
  widget.querySelectorAll('button[data-how-do-you-take-care-of-succulents-step]').forEach(function (b) {
    b.addEventListener('click', function () {
      answers[b.getAttribute('data-how-do-you-take-care-of-succulents-step')] = b.getAttribute('data-how-do-you-take-care-of-succulents-answer');
      if (answers['1'] && answers['2'] && answers['3']) verdict();
      else out.textContent = 'Answered ' + Object.keys(answers).length + ' of 3 checks — keep going.';
    });
  });
  if (resetBtn) resetBtn.addEventListener('click', function () {
    answers = {};
    out.textContent = 'Answer the three checks above to get your answer.';
  });
})();
</script>

## Soil and pots

Ordinary potting soil holds too much moisture for succulents. Use a cactus or succulent mix, or make your own by combining roughly equal parts potting soil, perlite, and coarse grit or pumice. The test is simple: when you water, it should drain through quickly rather than pooling on the surface.

Every pot needs a drainage hole. Terracotta helps soil dry faster; glazed ceramic and plastic hold moisture longer. A pot that is only slightly larger than the plant is best — a big pot full of wet soil takes far too long to dry.

Repot every one to two years in spring, or when the plant has outgrown its pot. Let the soil dry before repotting, handle the plant gently by its base, and wait a few days after repotting before watering so any small root injuries can heal.

## Temperature, humidity, and feeding

Most succulents are comfortable in normal indoor temperatures, roughly 15–27°C. What they cannot handle is frost, so keep them away from freezing windowsills in winter and never leave them outside overnight in cold weather unless the type is known to be hardy.

They prefer low to average humidity and do not need misting. Feed lightly in spring and summer with half-strength cactus fertiliser, once a month at most.

## Pruning, propagation, and leaves

Many succulents propagate easily from leaves. Gently twist a healthy leaf off the stem, let it dry for a few days until the base has calloused, then lay it on dry succulent soil. Roots and a tiny new plant usually appear within a few weeks. Do not water the leaf until roots have formed.

## Common mistakes

- **Watering little and often.** This is the most common killer. Soak thoroughly, then let the soil dry out completely.
- **A pot with no drainage.** Water has nowhere to go, and the roots sit wet. Always use drainage holes.
- **Ordinary potting soil.** It stays wet for too long. Use a gritty succulent mix.
- **Too little light.** A succulent that stretches, pales, or leans hard towards the window needs more sun, not more water.
- **Misting the leaves.** Succulents do not need it, and trapped water can cause rot.
- **Watering in winter as if it were summer.** Growth slows in the cold months, so water far less often.

## Troubleshooting

### Leaves turning yellow and mushy at the base

This is almost always overwatering and the start of root rot. Stop watering immediately, let the soil dry out, and remove any soft, translucent leaves. If the stem is mushy too, the plant may be beyond saving — but healthy leaves or a firm top can often be cut off and re-rooted.

### Leaves shrivelling and wrinkling

Wrinkled, deflated leaves usually mean the plant is genuinely thirsty — it is using up the water stored in its leaves. If the soil is completely dry, give it a deep soak. If the soil is wet and the leaves are still wrinkling, the roots may be damaged and unable to absorb water; check them and repot into dry mix if needed.

### Plant stretching tall with gaps between leaves

The plant is reaching for more light. Move it to a brighter spot gradually, and accept that the stretched growth will not shrink back. You can behead the plant and replant the top once it has adjusted to the brighter light.

### White, powdery patches or tiny white insects

White cottony patches are usually mealybugs, a common succulent pest. Dab them off with a cotton bud dipped in rubbing alcohol, repeat weekly until they are gone, and isolate the plant from your others while you treat it.

### Brown, crispy leaf edges

This can be sunburn from a sudden move into strong sun, or salt build-up from fertiliser and hard tap water. Move the plant into bright light more gradually, and flush the soil with plain water occasionally to wash out salts.

## Frequently asked questions

### How often should I water succulents indoors?

There is no fixed number of days — it depends on light, pot size, and season. A good starting point is every two to four weeks in the growing season and less in winter. The rule that matters is the soil: water only when it is completely dry all the way through, and then soak it thoroughly.

### Do succulents need direct sunlight?

Most do. Several hours of direct sun a day keeps them compact and colourful. A sunny windowsill is ideal. Some types, like haworthia, prefer bright indirect light, but the majority of common succulents stretch and weaken in dim conditions.

### Why is my succulent dying even though I barely water it?

"Barely watering" can still be too much if the pot has no drainage, the soil holds moisture, or the plant gets small sips every few days. Rot comes from roots staying wet, not from the total amount of water. Check drainage, use gritty soil, and water deeply but rarely.

### Should I use a spray bottle to water succulents?

No. Spraying wets the leaves and barely moistens the soil, which is the opposite of what succulents need. Water the soil directly, soak it through, and let it drain.

### What is the easiest succulent for a beginner?

Jade plants, echeveria, and snake plants are all forgiving choices. Jade is sturdy and slow to complain, echeveria is compact and colourful in good light, and snake plants tolerate more neglect than almost any other houseplant. Start with one, learn its rhythm, and add more once you are confident.

## Conclusion

Succulent care is simple once you stop treating them like ordinary houseplants. Give them the brightest spot you have, gritty soil in a pot that drains, and water that soaks the soil and then stops for weeks. When something goes wrong, the answer is usually more light and less water.

## Related guides

- [How to Take Care of a Cactus Indoors](/guides/how-to-take-care-of-a-cactus-indoors/)
- [How to Take Care of a Snake Plant](/guides/how-to-take-care-of-a-snake-plant/)
- [How Do You Take Care of Plants? Beginner Guide](/guides/how-do-you-take-care-of-plants/)

## Sources and further reading

- Royal Horticultural Society plant guides
- Missouri Botanical Garden Plant Finder
- University extension horticulture publications
