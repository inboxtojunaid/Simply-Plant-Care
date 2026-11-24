---
title: "How to Grow Basil in Pots"
description: "How to grow basil in pots from seed or seedlings: choosing a pot, soil, spacing, and moving plants outdoors for a summer of fresh leaves at home."
keyword: "how to grow basil in pots"
category: "growing"
hero: "/images/how-to-grow-basil-in-pots.svg"
heroAlt: "Illustration of basil plants growing in terracotta pots"
date: "2026-11-24"
updated: "2026-11-24"
related: ["how-do-you-care-for-a-basil-plant", "how-do-you-take-care-of-a-rosemary-plant", "how-do-you-take-care-of-plants"]
---

Growing basil in pots is one of the easiest ways to start a kitchen garden: sow seeds or plant seedlings in a pot with drainage holes, fill it with loose, fertile potting mix, and set it in the sunniest spot you have. Basil is a warm-weather herb that grows fast — from seed to first harvest in about six to eight weeks — and a few pots can supply fresh leaves all summer.

This guide is about getting basil started and growing in containers, from choosing the pot to moving plants outdoors. Once your plants are established and you want to know how to keep harvesting them through the season, the companion guide on caring for an established basil plant picks up where this one leaves off.

## At a glance

| Need | What potted basil wants |
| --- | --- |
| Light | 6–8 hours of direct sun a day |
| Water | Keep soil evenly moist, never soggy |
| Soil | Rich, loose, well-draining potting mix |
| Pot | At least 20 cm wide and deep, with drainage holes |
| Temperature | 18–30°C; no frost, and no nights below 10°C |
| Feeding | Light feeding every 3–4 weeks once established |
| Spacing | About 20–25 cm between plants |
| Difficulty | Easy — one of the best herbs to start with |

## When to start basil

Basil is a tender annual that cannot tolerate frost, so timing matters. Start seeds indoors six to eight weeks before your last expected frost, or wait and buy seedlings after the frosts have passed. If you are growing basil purely indoors on a sunny windowsill, you can start at any time of year, though plants grow strongest in spring and summer when the days are long.

Outdoors, do not move pots outside until night temperatures are reliably above 10°C and the days are warm. A basil plant put out too early will sulk — growth stalls, leaves can turn dark, and a single cold night can kill it.

## Choosing the pot

The pot matters more than most beginners expect. Basil grows a substantial root system and drinks a lot of water in summer, so a small pot dries out in hours and the plant wilts daily. Choose a pot at least 20 cm wide and 20 cm deep for a single plant, or wider for several plants together.

Drainage holes are essential. Basil likes moist soil, not wet soil, and water sitting at the bottom of a pot without holes will rot the roots. Terracotta pots are a good choice because they breathe and help the soil dry evenly, but they dry out faster than plastic, so check the soil more often in hot weather. Whatever the material, always use a saucer and empty it after watering.

## Soil and filling the pot

Fill the pot with a good-quality, multi-purpose potting mix — basil likes soil that is rich and loose, not heavy garden soil, which compacts in a pot and drains poorly. Mix in a handful of perlite or coarse grit if your mix feels dense, and a scoop of compost for extra fertility.

Leave about 2–3 cm of space between the soil surface and the rim of the pot so water does not run straight off when you water. Water the mix before sowing or planting so it is evenly damp, not dry or soaking.

## Starting from seed

Sow basil seeds on the surface of the damp mix and cover them with just a thin dusting of mix — about 3 mm. Basil seeds need light to germinate, so burying them deeply is the most common reason seeds fail. Mist the surface gently, cover the pot with a clear lid or cling film to hold in humidity, and keep it somewhere warm, around 20–25°C.

Seeds usually germinate in five to ten days. As soon as you see green, remove the cover and move the pot to the brightest spot you have. Seedlings grown in dim light stretch tall and weak, so light matters from day one.

## Starting from seedlings

Bought seedlings are the fastest route to a harvest. Plant them at the same depth they were growing in their nursery pot — burying the stem deeper can cause it to rot. Space plants about 20–25 cm apart, firm the soil gently around the roots, and water them in well.

If you are planting several seedlings in one large pot or trough, give each plant room to bush out. Overcrowded basil competes for light and air, grows leggy, and is more prone to disease.

## Interactive: pot-size and spacing calculator

Use the calculator below to work out how many basil plants fit in your pot.

<div class="widget" id="how-to-grow-basil-in-pots-calc" style="border:1px solid #d8e2d4;border-radius:12px;padding:20px;background:#f7f9f4;max-width:640px;">
  <h3 style="margin-top:0;">How many basil plants fit in my pot?</h3>
  <p>Enter your pot's diameter in centimetres. Basil plants need about 20–25 cm of space each.</p>
  <label for="how-to-grow-basil-in-pots-diameter" style="display:block;margin-bottom:6px;font-weight:bold;">Pot diameter (cm)</label>
  <input id="how-to-grow-basil-in-pots-diameter" type="number" min="10" max="100" value="30" style="padding:10px;border-radius:8px;border:1px solid #ccc;width:140px;font-size:16px;">
  <button type="button" id="how-to-grow-basil-in-pots-btn" style="padding:10px 16px;border-radius:8px;border:1px solid #1e4d3a;background:#1e4d3a;color:#fff;cursor:pointer;margin-left:8px;">Calculate</button>
  <div id="how-to-grow-basil-in-pots-result" style="background:#fff;border-radius:8px;padding:14px;margin-top:14px;min-height:80px;">
    <p style="margin:0;color:#555;">Enter a diameter and click Calculate.</p>
  </div>
</div>
<script>
(function () {
  var input = document.getElementById('how-to-grow-basil-in-pots-diameter');
  var btn = document.getElementById('how-to-grow-basil-in-pots-btn');
  var out = document.getElementById('how-to-grow-basil-in-pots-result');
  if (!input || !btn || !out) return;
  function calc() {
    var d = parseFloat(input.value);
    if (isNaN(d) || d < 10) { out.innerHTML = '<p style="margin:0;">Please enter a pot diameter of at least 10 cm.</p>'; return; }
    var plants = Math.max(1, Math.floor(d / 22));
    var spacing = Math.round(d / plants);
    var advice = d < 20
      ? 'A small pot like this suits one plant only, and it will need watering often in hot weather — consider a pot at least 20 cm wide for a happier plant.'
      : plants === 1
      ? 'One plant will fill this pot nicely. Pinch the growing tips regularly to keep it bushy rather than tall.'
      : 'Space the plants evenly in a ring, about ' + spacing + ' cm apart, leaving the centre clear so air can move between them.';
    out.innerHTML = '<p style="margin:0;"><strong>' + plants + ' basil plant' + (plants > 1 ? 's' : '') + '</strong> fit in a ' + d + ' cm pot.<br>' + advice + '</p>';
  }
  btn.addEventListener('click', calc);
  calc();
})();
</script>

## Moving basil outdoors

Harden seedlings off before they live outside full time. Over seven to ten days, put the pots outside in a sheltered, partly shaded spot for a few hours a day, bringing them in at night, and gradually increase the time and the sun. Plants moved straight from a windowsill into full sun and wind will wilt and scorch.

Once hardened off, set the pots in the sunniest spot you have — a south-facing patio, balcony, or windowsill that gets at least six hours of direct sun. Basil in full sun grows compact and flavoursome; in shade it grows leggy and the leaves taste milder.

## Watering potted basil

Basil in pots needs regular watering because containers dry out fast, especially in sun and wind. Check the soil daily in summer: water when the top 2–3 cm feels dry, and water thoroughly until it runs from the drainage holes.

## Feeding

Basil is a fast grower and a moderate feeder. Once plants are established, feed every three to four weeks with a balanced liquid fertiliser at half strength, or a liquid seaweed feed. Too much fertiliser produces lots of soft leafy growth with less flavour, so keep it light.

## Common mistakes

- **Sowing seeds too deep.** Basil seeds need light to germinate. A thin covering of mix is all they need.
- **Using a pot that is too small.** A tiny pot dries out in hours on a hot day and the plant wilts constantly. Go bigger than you think.
- **Putting plants outside too early.** One cold night can finish basil. Wait until nights are reliably above 10°C.
- **Skipping hardening off.** Seedlings moved straight outdoors scorch and wilt. Give them a week of gradual exposure.
- **Crowding too many plants in one pot.** Overcrowded basil grows leggy and disease-prone. Give each plant about 20–25 cm.

## Troubleshooting

**Seedlings are tall, pale, and floppy.** Not enough light. Move them to the sunniest spot available or under a grow light, and sow the next batch where the light is stronger.

**Leaves wilt every afternoon even though the soil is damp.** The pot may be too small for the plant's roots, or the plant is in a very hot, windy spot. Move up a pot size or move the pot somewhere slightly sheltered.

**Lower leaves turn yellow.** Often overwatering, or the plant sitting in a saucer of water. Let the soil dry a little between waterings and always empty the saucer.

**Black spots on the leaves.** A sign of fungal disease, encouraged by wet leaves and poor air circulation. Remove affected leaves, water at the base only, and space plants so air moves between them.

**Seeds never germinated.** The most likely causes are seeds buried too deep, cold soil, or old seed. Sow on the surface, keep the pot warm, and check the seed packet's date.

## Frequently asked questions

### How many basil plants can I grow in one pot?

About one plant per 20–25 cm of pot diameter. A 30 cm pot holds one plant comfortably; a 45 cm pot holds two. Use the calculator above for your pot size.

### How long does basil take to grow from seed?

Seeds germinate in five to ten days in warm soil. Plants are usually ready for a first light harvest about six to eight weeks after sowing, once they have several pairs of leaves.

### Can I grow basil in pots indoors all year?

Yes, on a bright, sunny windowsill. Indoor plants grow more slowly in winter when the days are short, and a grow light helps a lot in the darker months.

### What size pot does basil need?

At least 20 cm wide and 20 cm deep for a single plant, with drainage holes. Bigger pots are better in hot weather because they dry out more slowly.

### When can I move potted basil outside?

After the last frost, when night temperatures stay above 10°C. Harden plants off over seven to ten days first, and give them the sunniest spot you have.

### Why did my basil seedlings die?

The most common causes are damping off from cold, wet soil; seeds sown too deep; or seedlings moved outside before the weather was warm enough.

## Conclusion

Basil in pots is a forgiving first project: a pot with drainage, rich loose mix, seeds sown on the surface, and a sunny spot. Give it room — about 20 cm per plant — water it at the base, and don't rush it outside before the nights are warm. Within two months you will be picking fresh leaves from a plant you grew yourself.

## Related guides

- [How Do You Care for a Basil Plant?](/guides/how-do-you-care-for-a-basil-plant/)
- [How Do You Take Care of a Rosemary Plant?](/guides/how-do-you-take-care-of-a-rosemary-plant/)
- [How Do You Take Care of Plants? Beginner Guide](/guides/how-do-you-take-care-of-plants/)

## Sources and further reading

- Royal Horticultural Society plant guides
- Missouri Botanical Garden Plant Finder
- University extension horticulture publications
