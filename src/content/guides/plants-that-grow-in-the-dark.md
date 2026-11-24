---
title: "Plants That Grow in the Dark (Low Light)"
description: "No plant grows in true darkness — but some tolerate very low light. Learn what low light really means, which plants cope, and what to expect from them."
keyword: "plants that grow in the dark"
category: "lighting"
hero: "/images/plants-that-grow-in-the-dark.svg"
heroAlt: "Original illustration of shade-tolerant plants — snake plant, ZZ plant and pothos — in a dim room with soft window light"
date: "2026-11-24"
updated: "2026-11-24"
related: ["snake-plant-low-light", "zz-plant-low-light", "snake-plant-light-needs"]
---

No plant grows in the dark. That is the honest answer, and it is worth saying first: every plant needs light to photosynthesise, and a plant in a truly dark room — a windowless cupboard, a hallway with no natural light — will weaken and die, however tough it is supposed to be. What people usually mean by "plants that grow in the dark" is plants that tolerate very low light: a dim corner, a north-facing room, or a spot several metres from the nearest window.

This guide explains what low light really means, which plants cope best with it, what to realistically expect from them — slower growth, less colour, more careful watering — and how to tell whether your room is low light or no light at all.

## At a glance

| Plant | Light tolerance | Water | Size |
|---|---|---|---|
| Snake plant | Very low light | Low — every 2–6 weeks | 30–120 cm tall |
| ZZ plant | Very low light | Low — every 2–4 weeks | 45–90 cm tall |
| Pothos | Low light | Moderate — when top soil dries | Trailing, 2 m+ vines |
| Peace lily | Low light | Moderate — when leaves droop | 30–60 cm tall |
| Heartleaf philodendron | Low light | Moderate — when top soil dries | Trailing, 2 m+ vines |
| Cast iron plant | Very low light | Moderate — when top soil dries | 45–60 cm tall |
| Chinese evergreen | Low light | Moderate — when top soil dries | 30–60 cm tall |
| Lucky bamboo | Low light | Moderate — keep roots wet | 30–90 cm tall |

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

## What "low light" really means

Low light is one of the most misunderstood terms in houseplant care, because human eyes are very good at adapting to dim rooms. A room that looks perfectly bright to you after a minute can be very dark to a plant.

A useful way to judge it is the shadow test. At midday, hold your hand about 30 cm above a piece of white paper where the plant would sit. If you see a faint, fuzzy shadow, that is low light. A clear, sharp shadow is bright light. No shadow at all is essentially no light — and no plant will live there.

In practical terms:

- **Low light** means a spot a few metres from a window, a north-facing room, or a room with small windows. The plant can still "see" the sky, just not much of it.
- **Very low light** means a dim corner or a hallway with borrowed light from another room. Only the toughest plants cope here, and they will grow very slowly.
- **No light** means a windowless room, or a spot where you cannot read a book without a lamp at midday. No plant grows here without artificial light.

If you are unsure which category your room falls into, try the book test: if you cannot comfortably read at the spot in natural light at midday, it is probably too dark even for the plants in this guide.

## The plants that cope best

### Snake plant

The toughest low-light plant on this list. It stores water in its leaves, tolerates dry air, and can sit in a dim corner for months with barely any growth and no complaints. In very low light it may lose some variegation and grow very slowly, but it survives. Water only when the soil is fully dry — in low light that may mean every six to eight weeks.

### ZZ plant

Almost as tough as a snake plant, with glossy leaves that look good even when the plant is not growing. It stores water in rhizomes underground, so it copes with infrequent watering, and it tolerates low light and neglect. Growth is slow in dim rooms, but the plant stays attractive.

### Peace lily

The peace lily copes with low light and even flowers in it sometimes, though flowering is less likely in dim rooms. It is a useful plant for low light because it tells you when it needs water by drooping. Keep the soil lightly moist and avoid letting it dry out completely.

### Heartleaf philodendron

A trailing plant that tolerates low light and grows steadily, if slowly, in dim rooms. Its heart-shaped leaves stay green in low light, and it is forgiving of irregular watering. Good for a low-light shelf or hanging basket.

### Cast iron plant

The cast iron plant earns its name: it tolerates low light, neglect, draughts and irregular watering better than almost any other houseplant. It grows slowly and does not ask for much — a pot with drainage, occasional watering when the soil dries, and a wipe of the leaves now and then. It is less widely available than a snake plant, but worth seeking out for a genuinely dark corner.

## Common mistakes

- **Believing "low light" means "no light."** Low light still means some natural light. A windowless room is no light, and no plant survives there without artificial light.
- **Watering on a bright-light schedule.** A plant in low light needs far less water. Weekly watering in a dim room is the fastest route to root rot.
- **Choosing a variegated plant for a dark corner.** Variegated varieties need more light to keep their patterns, and they often turn green in low light. Choose plain green varieties for the darkest spots.
- **Feeding a plant to make it grow in low light.** Fertiliser does not replace light. A plant in low light will not grow faster because you fed it.
- **Expecting flowers in a dim room.** Flowering needs energy, and energy needs light. A peace lily in low light may never flower, and that is normal.

## Troubleshooting

### My plant has not grown in a year

In low light, that can be normal. Check that the leaves are firm and green and the plant is not losing leaves — if so, it is surviving. If you want growth, move it to a brighter spot gradually and give it a full growing season.

### The leaves are turning yellow in a dim room

Yellow leaves in low light usually mean overwatering, because the soil stays wet. Stop watering, let the soil dry out, and check the pot drains. If the base feels mushy, the roots may be rotting.

### My pothos is losing its variegation

It is producing more green chlorophyll to cope with low light. Move it closer to a window and new leaves should show more variegation. Existing leaves will not change back.

## Frequently asked questions

### Can any plant grow in complete darkness?

No. All plants need light to photosynthesise. A plant in a truly dark, windowless room will weaken and die over weeks or months, however tough it is. The plants in this guide tolerate very low light, not no light.

### What is the best plant for a dark corner?

A snake plant or a ZZ plant is the safest choice — both tolerate very low light, need little water, and stay attractive while growing slowly. A cast iron plant is equally tough if you can find one.

### How do I know if my room is too dark for plants?

Try the shadow test at midday: if your hand casts no shadow at all where the plant would sit, or you cannot read a book there without a lamp, the room is probably too dark. Only a grow light or a brighter spot will fix that.

### Will a snake plant grow in a bathroom with no window?

No, not long-term. A windowless bathroom has no light, and a snake plant will decline there. If you want a plant in a windowless bathroom, use a grow light or rotate the plant into a bright room for part of each week.

### Do low-light plants need less water?

Yes, usually. In low light a plant grows slowly and uses less water, so the soil dries more slowly. Always check the soil before watering, and expect to water far less often than the same plant in a bright room.

## Conclusion

No plant grows in the dark, but several good ones grow in very low light — snake plants, ZZ plants, cast iron plants, pothos, peace lilies and their companions. The trick is to be honest about how much light your room really has, choose a plain green variety for the darkest spots, and water with restraint, because low light means slow-drying soil. Accept slow growth and less colour as the price of a plant in a dim room, and if the room is truly windowless, add a grow light or move the plant. Low light is a constraint you can work with — no light is not.

## Related guides

- [Snake Plant Low Light](/guides/snake-plant-low-light/)
- [ZZ Plant Low Light: What to Expect](/guides/zz-plant-low-light/)
- [Snake Plant Light Needs Explained](/guides/snake-plant-light-needs/)

## Sources and further reading

- Royal Horticultural Society plant guides
- Missouri Botanical Garden Plant Finder
- University extension horticulture publications
- General houseplant lighting references
