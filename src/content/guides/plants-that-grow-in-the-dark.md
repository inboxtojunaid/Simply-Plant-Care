---
title: "Plants That Grow in the Dark (Low Light)"
description: "No houseplant grows in true darkness. These eight cope with very low light — ranked, with honest expectations on growth, colour and how little to water them."
keyword: "plants that grow in the dark"
category: "lighting"
hero: "/images/plants-that-grow-in-the-dark.svg"
heroAlt: "Original illustration of shade-tolerant plants — snake plant, ZZ plant and pothos — in a dim room with soft window light"
date: "2026-11-24"
updated: "2026-11-26"
related: ["snake-plant-low-light", "zz-plant-low-light", "snake-plant-light-needs"]
---

<div class="scope-box">
<p><strong>What this guide covers:</strong> A ranked comparison of eight plants that cope with very low light — what each one tolerates, and what it gives up in growth and colour. It is a comparison, not a deep care guide for one plant. For a deep dive, see <a href="/guides/zz-plant-low-light/">ZZ Plant Low Light</a> or <a href="/guides/snake-plant-low-light/">Snake Plant Low Light</a>.</p>
</div>

Hold your hand 30 cm above a sheet of white paper at midday, where the plant would sit. If you see a faint, fuzzy shadow, that's low light. A clear, sharp shadow is bright light. No shadow at all is essentially no light — and no plant will live there, however tough the label says it is.

That's the honest starting point: no plant grows in the dark. Every plant needs light to photosynthesise, and a plant in a truly dark room — a windowless cupboard, a hallway with no natural light — will weaken and die. What people usually mean is plants that tolerate very low light: a dim corner, a north-facing room, or a spot several metres from the nearest window. Those exist. They're just slower and greener than you'd expect.

## What it needs in 30 seconds

- Some natural light, every day — low light is dim, not dark. A windowless room is no light, and no plant survives there without a grow light.
- Far less water than the same plant in a bright room. In low light, soil dries slowly, so check it before watering and expect weeks between waterings for the toughest plants.
- Plain green varieties for the darkest spots. Variegated plants need more light to keep their patterns and often turn green in dim rooms.
- Patience. Growth in low light is measured in months, not weeks, and a plant that hasn't grown in a year can still be healthy.
- No fertiliser as a substitute for light. Feeding doesn't replace what the plant is actually missing.

<div class="widget" id="plants-that-grow-in-the-dark-widget">
<h3>Low-light plant comparison</h3>
<p>Filter the plants, or click a column heading to sort them.</p>
<label>Show:
<select id="plants-that-grow-in-the-dark-filter">
<option value="all">All plants</option>
<option value="very-low">Very low light only</option>
<option value="low-water">Low water only</option>
</select></label>
<table id="plants-that-grow-in-the-dark-table">
<thead><tr>
<th><button type="button" data-sort="name">Plant</button></th>
<th><button type="button" data-sort="light">Light tolerance</button></th>
<th><button type="button" data-sort="water">Water</button></th>
<th><button type="button" data-sort="size">Size</button></th>
</tr></thead>
<tbody id="plants-that-grow-in-the-dark-body"></tbody>
</table>
</div>
<script>
(function(){
var rows=[
{name:'Snake plant',light:'Very low',water:'Low',size:'30–120 cm'},
{name:'ZZ plant',light:'Very low',water:'Low',size:'45–90 cm'},
{name:'Pothos',light:'Low',water:'Moderate',size:'Trailing'},
{name:'Peace lily',light:'Low',water:'Moderate',size:'30–60 cm'},
{name:'Heartleaf philodendron',light:'Low',water:'Moderate',size:'Trailing'},
{name:'Cast iron plant',light:'Very low',water:'Moderate',size:'45–60 cm'},
{name:'Chinese evergreen',light:'Low',water:'Moderate',size:'30–60 cm'},
{name:'Lucky bamboo',light:'Low',water:'Moderate',size:'30–90 cm'}
];
var body=document.getElementById('plants-that-grow-in-the-dark-body');
var filter=document.getElementById('plants-that-grow-in-the-dark-filter');
if(!body) return;
var sortKey='name',asc=true;
function render(){
var list=rows.slice();
var f=filter?filter.value:'all';
if(f==='very-low') list=list.filter(function(r){return r.light==='Very low';});
if(f==='low-water') list=list.filter(function(r){return r.water==='Low';});
list.sort(function(a,b){var x=a[sortKey],y=b[sortKey];return asc?(x<y?-1:x>y?1:0):(x>y?-1:x<y?1:0);});
body.innerHTML='';
list.forEach(function(r){var tr=document.createElement('tr');[r.name,r.light,r.water,r.size].forEach(function(c){var td=document.createElement('td');td.textContent=c;tr.appendChild(td);});body.appendChild(tr);});
}
document.querySelectorAll('#plants-that-grow-in-the-dark-table th button').forEach(function(btn){
btn.addEventListener('click',function(){var k=btn.getAttribute('data-sort');if(k===sortKey){asc=!asc;}else{sortKey=k;asc=true;}render();});
});
if(filter) filter.addEventListener('change',render);
render();
})();
</script>

## The verdicts, ranked

Eight plants, ranked by how well they actually cope with very low light — not by how they look in the shop, and not by what the label promises. The top two are in a class of their own. The rest cope, with conditions.

## 1. Snake plant — the one that actually copes

The toughest low-light plant on this list, and it isn't close. A snake plant stores water in its thick leaves, tolerates dry air, and can sit in a dim corner for months with barely any growth and no complaints. In very low light it may lose some variegation and grow very slowly — a new leaf a year is normal — but it survives. Size: 30–120 cm tall, depending on variety.

Water only when the soil is fully dry. In low light that may mean every six to eight weeks. That's not neglect — it's the correct schedule for a plant that isn't growing fast enough to use water quickly. Weekly watering in a dim room is the fastest route to root rot.

## 2. ZZ plant — nearly as tough, better looking while it waits

Almost as tough as a snake plant, with glossy leaves that look good even when it isn't growing. It stores water in rhizomes underground, so it copes with infrequent watering — every two to four weeks — and tolerates low light and neglect without dropping leaves. Size: 45–90 cm tall.

Growth is slow in dim rooms. That's the price, and it's one worth paying if the alternative is an empty corner. The ZZ plant's real strength is that it doesn't advertise its suffering. It just sits there, glossy and green, for years.

## 3. Cast iron plant — the name is earned

The cast iron plant earns its name: it tolerates low light, neglect, draughts and irregular watering better than almost any other houseplant. It grows slowly and doesn't ask for much — a pot with drainage, occasional watering when the soil dries. Size: 45–60 cm tall.

Why isn't it ranked higher? Availability. It's less widely sold than a snake plant or ZZ plant, so you may have to seek it out — worth it for a genuinely dark corner, the spot where even a snake plant looks a bit tired.

## 4. Pothos — the trailer that adapts

Pothos tolerates low light and grows steadily, if slowly, in dim rooms. Its vines can reach 2 m or more, trailing from a shelf or hanging basket. Water when the top soil dries.

The catch is variegation. A golden pothos in a dim room will gradually turn greener, producing more chlorophyll to cope with the lack of light. New leaves may show less gold, and existing leaves won't change back. If you buy a plain green pothos for a dark spot, you sidestep the whole problem.

## 5. Heartleaf philodendron — steady, quiet, forgiving

A trailing plant that tolerates low light and grows steadily, if slowly, in dim rooms. Its heart-shaped leaves stay green, it's forgiving of irregular watering, and it roots easily from cuttings. Vines can reach 2 m or more.

There's nothing flashy about it in low light, and that's the point. It doesn't flower, it doesn't variegate, it doesn't demand. It just grows, slowly, along a shelf. Water when the top soil dries.

## 6. Peace lily — the communicator, with limits

The peace lily copes with low light and even flowers in it sometimes, though flowering is much less likely in a dim room. Flowering needs energy, and energy needs light, so a peace lily in low light may never flower — and that's not a failure, it's physics.

What it offers instead is communication. It tells you when it needs water by drooping, then perks up within hours of watering. Keep the soil lightly moist and avoid letting it dry out completely. Size: 30–60 cm tall. If you want a plant that talks to you in a dim room, this is the one — just don't expect flowers as well.

## 7. Chinese evergreen — pretty, but picky about dryness

Chinese evergreen tolerates low light and is often sold for dim rooms, and it does cope — with a condition. It likes its soil lightly moist and dislikes drying out completely, so it needs more attention than the plants above it. Water when the top soil dries, and keep it away from cold draughts. Size: 30–60 cm tall.

Its patterned leaves hold their colour reasonably well in low light, which is a genuine advantage over variegated pothos. But if your watering habit is "forget for a month", this isn't your plant.

## 8. Lucky bamboo — the desk plant that needs water, not light

Lucky bamboo tolerates low light, but it has a different need: water. It grows in a vase of water or in moist soil, and the roots need to stay wet — change the water every week or two to prevent smells. Size: 30–90 cm tall.

It ranks last here not because it dies in low light — it doesn't — but because its care is the opposite of the set-and-forget plants at the top. A snake plant forgives a forgotten month. Lucky bamboo notices a forgotten fortnight. For a dim corner nobody visits, pick something higher on the list.

## What the dimmest corner does to every plant on this list

Low light changes a plant in predictable ways. Growth slows, or stops entirely. A plant that hasn't grown in a year can still be healthy — check that the leaves are firm and green and it isn't losing leaves. If so, it's surviving. If you want growth, move it to a brighter spot gradually and give it a full growing season.

Colour changes too. Variegated varieties turn greener. Flowering becomes rare or stops. Leaves may grow smaller or further apart as the plant reaches for light. None of this means the plant is dying. It means the plant is adapting to a place with less energy.

Watering is where low light actually kills plants, not the light itself. In a dim room, a plant grows slowly and uses less water, so the soil dries more slowly. Water on a bright-light schedule — weekly, say — and the roots sit in damp soil for weeks. Yellow leaves in a dim room usually mean overwatering, not a lack of light. Stop watering and let the soil dry out.

And if you're unsure which category your room falls into, try the book test: if you can't comfortably read at the spot in natural light at midday, it's probably too dark even for the plants in this guide. A grow light or a brighter spot is the only fix.

## Where people go wrong in dark rooms

The first mistake is believing "low light" means "no light". Low light still means some natural light, every day. A windowless room is no light, and no plant survives there without artificial light.

The second is watering on a bright-light schedule: weekly watering in a dim room rots roots. Check the soil. Always.

The third is choosing a variegated plant for a dark corner and then being disappointed when it turns green. Choose plain green varieties for the darkest spots.

The fourth is feeding a plant to make it grow in low light. Fertiliser doesn't replace light. A plant in low light won't grow faster because you fed it.

## Questions people ask

### Can any plant grow in complete darkness?

No. All plants need light to photosynthesise. A plant in a truly dark, windowless room will weaken and die over weeks or months, however tough it is. The plants in this guide tolerate very low light, not no light.

### What is the best plant for a dark corner?

A snake plant or a ZZ plant is the safest choice — both tolerate very low light, need little water, and stay attractive while growing slowly. A cast iron plant is equally tough if you can find one.

### How do I know if my room is too dark for plants?

Try the shadow test at midday: if your hand casts no shadow at all where the plant would sit, or you can't read a book there without a lamp, the room is probably too dark. Only a grow light or a brighter spot will fix that.

### Will a snake plant grow in a bathroom with no window?

No, not long-term. A windowless bathroom has no light, and a snake plant will decline there. If you want a plant in a windowless bathroom, use a grow light or rotate the plant into a bright room for part of each week.

### Do low-light plants need less water?

Yes, usually. In low light a plant grows slowly and uses less water, so the soil dries more slowly. Always check the soil before watering, and expect to water far less often than the same plant in a bright room.

## Related guides

- [Snake Plant Low Light](/guides/snake-plant-low-light/)
- [ZZ Plant Low Light: What to Expect](/guides/zz-plant-low-light/)
- [Snake Plant Light Needs Explained](/guides/snake-plant-light-needs/)

*Further reading: Royal Horticultural Society plant guides; Missouri Botanical Garden Plant Finder; university extension horticulture publications.*
