---
title: "How to Care for Calathea"
description: "Brown edges on calathea almost always trace back to two things: hard tap water and dry air. Fix those levers first and the new leaves open clean."
keyword: "how to care for calathea"
category: "plant-care"
hero: "/images/how-to-care-for-calathea.webp"
heroAlt: "A lush calathea plant with large patterned green leaves with pink stripes in a ceramic pot"
date: "2026-11-24"
updated: "2026-11-24"
related: ["how-do-you-care-for-an-anthurium-plant", "how-do-you-care-for-ferns"]
---

Fifty percent. That's the humidity line for calathea — above it, the leaves usually stay clean; below 40%, the edges crisp. Most heated homes in winter sit well below 40%. So before you blame yourself, check the air. The plant isn't being difficult. It's a tropical forest-floor plant living in a centrally heated living room, and it's telling you exactly what it thinks of the conditions.

The good news: brown edges have a short list of causes, and two of them explain most cases. Water quality and humidity. Fix those two levers and the rest of the routine is straightforward. Ignore them and no amount of careful watering with the wrong water will save the edges.

The leaves are worth the fuss, by the way. Large, patterned in greens, silver, and pink, folding up at night and opening again in the morning — a movement called nyctinasty, which is normal and a sign of a healthy plant, not a problem. New leaves should open clean and unmarked. When they don't, one of the two levers needs adjusting.

## Lever one: what's in the water

Calathea is unusually sensitive to what's dissolved in its water. Hard tap water — the kind that leaves limescale in a kettle — carries salts and minerals that build up in the leaves and show up as brown edges. Chlorine and fluoride don't help either. Most houseplants shrug this off. Calathea doesn't.

So what do you water with? Rainwater is ideal, if you can collect it. Distilled water is the reliable shop-bought equivalent. Filtered water is a good middle ground — it removes much of the chlorine and salts that cause the damage. Soft tap water is usually fine; hard tap water is the problem, and if your kettle furs up quickly, your tap water is hard.

Leaving hard tap water standing overnight helps a little — some chlorine escapes — but it doesn't remove the dissolved minerals that do most of the damage. It's a partial fix, not a solution. If the edges keep browning despite good humidity, switch the water first and watch the next few leaves. That's the test that settles it.

There's a second water habit that matters just as much: flushing. Salts build up in the soil over months, from water and from fertiliser, and the build-up shows as — yes — brown edges again. Every few weeks, water thoroughly with soft water and let plenty run out of the drainage hole, washing the excess salts through. It's a small habit with an outsized effect.

And how much water, how often? Keep the soil lightly moist at all times. Check the top 2 cm: water when the surface just starts to feel dry, before the deeper soil dries out. Water evenly until it runs out of the drainage hole, empty the saucer after fifteen minutes — it hates wet feet as much as dry roots — and expect roughly weekly watering in summer, less often in winter. But don't let it dry out completely in any season. A calathea that dries out fully crisps fast, and the damage to those leaves is permanent. They won't heal. New leaves will, though, which is why the fix is always judged on new growth, not old damage.

## Lever two: how damp is the air

Humidity is the other half of the brown-edges problem, and it's the one most homes fail. Calathea comes from tropical forest floors, where the air is warm and damp. Most homes, especially in winter with central heating, are far drier — often below 40% relative humidity — and the leaf edges crisp in response.

How do you actually raise it? Grouping plants together helps: several plants in one spot raise the local humidity around each other. A pebble tray — pot standing on pebbles with water in the tray, base above the water, never in it — helps more. A bright bathroom is often the easiest win in the house, since showers raise the humidity naturally, as long as there's enough light for the plant to grow. A humidifier is the most reliable option, especially if you keep a collection of humidity-loving plants; it's the only method that holds a steady level all day rather than spiking and falling.

Misting? It raises humidity for minutes, not hours. It's a supplement, not a solution — pleasant for the plant, useless as a strategy. Don't lean on it.

A cheap hygrometer, the kind that costs a few pounds and sits on a shelf, settles the argument about whether your room is actually dry. Guesswork is how people end up misting a plant in a room that's already at 55%. Measure it. Above 50% is the target; below 40% is where the damage starts; 40–50% is the grey zone where a pebble tray or grouping plants together usually tips the balance.

<div class="widget" id="how-to-care-for-calathea-humidity-widget">
<h3>Humidity and water-type helper</h3>
<p>Choose your water and your room humidity to get advice on brown leaf edges.</p>
<label for="how-to-care-for-calathea-water">What water do you use?</label>
<select id="how-to-care-for-calathea-water">
<option value="tap">Hard tap water</option>
<option value="filtered">Filtered water</option>
<option value="rain">Rainwater or distilled water</option>
</select>
<label for="how-to-care-for-calathea-humidity">Room humidity:</label>
<select id="how-to-care-for-calathea-humidity">
<option value="low">Below 40% (dry)</option>
<option value="medium">40–50% (average)</option>
<option value="high">Above 50% (humid)</option>
</select>
<div id="how-to-care-for-calathea-humidity-result" aria-live="polite"></div>
<script>
(function(){
  var water = document.getElementById('how-to-care-for-calathea-water');
  var hum = document.getElementById('how-to-care-for-calathea-humidity');
  var out = document.getElementById('how-to-care-for-calathea-humidity-result');
  if(!water || !hum || !out) return;
  function advice(){
    var w = water.value, h = hum.value, msg = '';
    if(w === 'tap') msg = 'Hard tap water is a common cause of brown calathea edges: salts and minerals build up in the leaves. Switch to rainwater, distilled or filtered water, or leave tap water standing overnight, and flush the soil with soft water every few weeks. ';
    else if(w === 'filtered') msg = 'Filtered water is a good choice — it removes much of the chlorine and salts that cause brown edges. Keep using it and flush the soil occasionally. ';
    else msg = 'Rainwater or distilled water is ideal for calathea and removes water quality as a cause of brown edges. ';
    if(h === 'low') msg += 'At below 40% humidity, brown edges are very likely. Group plants together, use a pebble tray or humidifier, and keep the plant away from radiators.';
    else if(h === 'medium') msg += 'At 40–50% humidity, most calatheas cope, but the edges may still crisp in winter. A pebble tray or grouping plants together usually tips the balance.';
    else msg += 'Above 50% humidity is what calathea prefers — brown edges from dry air are unlikely at this level. Keep watering with soft water and the leaves should stay clean.';
    out.textContent = msg;
  }
  water.addEventListener('change', advice);
  hum.addEventListener('change', advice);
  advice();
})();
</script>
</div>

Try the helper above with your actual water and your actual humidity — the combination matters. Hard water plus dry air is the worst case, and it needs both levers pulled at once. Soft water plus humid air, and brown edges from either cause are unlikely.

Keep it away from radiators, hot-air vents, and cold draughts while you're at it. It hates cold air and temperatures below about 15°C, and a draughty window in winter can undo a month of good humidity work overnight.

## The rest of the routine: light, soil, and warmth

With the two levers set, the rest is calmer. Light: bright, without direct sun. A spot a short distance from an east-facing window, or near a north-facing window, is ideal. Direct sun bleaches the intricate leaf patterns and scorches the leaves, leaving pale or brown patches. Too little light makes the plant grow slowly and the markings fade — if the colours look washed out, move it further from the window; if growth is very slow and stems stretch, move it a little closer.

Soil: rich but free-draining. Ordinary houseplant potting soil with perlite and a little bark or coir mixed in. The pot must have drainage holes. Repot in spring every one to two years, or when roots fill the pot — go up just one size, and water well after repotting.

Warmth: roughly 18–27°C, steady. Below about 15°C it suffers, and a cold draught does damage out of proportion to its duration — a night beside a draughty window can curl leaves that took a month to grow.

Feeding is where people undo their own good work. A balanced liquid fertiliser at half strength, once a month, spring and summer only. Overfeeding causes salt build-up, which shows up as brown leaf edges — the same symptom as hard water and dry air, which is why overfed plants get misdiagnosed so often. If you've fed heavily, flush the soil with soft water and hold off feeding for a while. More fertiliser does not mean more growth. It means saltier soil.

## Brown edges, curling, drooping — reading the leaves

Brown, crispy edges are the signature problem, and by now you know the order to work through: humidity below 50%, hard tap water, soil drying out, or salt build-up from overfeeding. Use the helper above to identify your combination, fix the most likely cause, and be patient. Damaged edges will not heal. New leaves should open clean — that's the scoreboard.

Leaves curling inwards usually mean thirst, air too dry, or cold. Check the soil first: dry means water thoroughly with soft water. Moist means check the temperature and humidity — a curling plant in damp soil is cold or dry-aired, not thirsty.

Drooping is more ambiguous. It can mean underwatering, cold shock, or overwatering with root damage. Feel the soil: dry soil means water; wet soil with drooping leaves means the roots may be waterlogged — let the soil dry out, check the drainage, and remove any rotted roots when you repot.

Patterns fading? Too much direct sun, or too little light over a long period. Move it to bright indirect light and give it time — new leaves should show the pattern properly.

Small flies around the soil are fungus gnats, which appear when the top of the soil stays wet. Let the top couple of centimetres dry out between waterings, clear dead leaves from the surface, and ease off the watering. They're annoying rather than dangerous, and they usually clear up once the watering is corrected.

## Asked about calathea

### Why do the leaves get brown edges?

Usually low humidity, hard tap water, or the soil drying out — often a combination. Use soft water, keep humidity above 50% if you can, and keep the soil lightly moist. Damaged edges won't heal, but new leaves should be clean.

### How often should I water it?

When the top 2 cm of soil starts to feel dry, keeping the soil lightly moist at all times. Roughly weekly in summer, less often in winter — but check the soil rather than following a calendar.

### Can I use tap water?

It depends on your tap water. Soft tap water is usually fine, but hard tap water causes brown leaf edges in many homes. If your leaves keep browning, switch to rainwater, distilled, or filtered water and see if new growth improves.

### Does it need a humidifier?

Not always, but it's the most reliable way to keep humidity above 50% in a heated home. Grouping plants, a pebble tray, or a bright bathroom can also work, especially for one plant.

### Why do the leaves move at night?

The leaves fold upwards at night and open in the morning. This is normal behaviour, called nyctinasty, and is a sign of a healthy plant responding to light.

### Is calathea safe for pets?

Calathea is generally considered non-toxic to cats and dogs, which makes it a popular choice for pet-owning households. As with any plant, discourage pets from chewing it.

## More to read

- [How Do You Care for an Anthurium Plant?](/guides/how-do-you-care-for-an-anthurium-plant/)
- [How Do You Care for Ferns Indoors?](/guides/how-do-you-care-for-ferns/)

Further reading: Royal Horticultural Society (RHS) calathea growing advice; Missouri Botanical Garden Plant Finder; your local university extension horticulture pages.
