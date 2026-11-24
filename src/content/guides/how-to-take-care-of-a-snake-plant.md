---
title: "How to Take Care of a Snake Plant"
description: "Learn how to take care of a snake plant with the right light, watering, soil, and pot. A complete beginner-friendly guide to keeping Sansevieria healthy."
keyword: "how to take care of a snake plant"
category: "plant-care"
hero: "/images/how-to-take-care-of-a-snake-plant.webp"
heroAlt: "A healthy snake plant with tall upright green and yellow leaves in a terracotta pot beside a bright window"
date: "2026-11-24"
updated: "2026-11-24"
related: ["how-to-water-snake-plants", "snake-plant-light-needs", "snake-plant-low-light", "snake-plant-for-beginners"]
---

A snake plant is one of the easiest houseplants you can own, and it is also one of the most forgiving. With tall, upright leaves that store water, it can go weeks without attention and still look good. That said, "hard to kill" is not "impossible to kill" — the plants that do die usually die from too much water.

The short version is this: give your snake plant bright, indirect light, water it only when the soil has dried out completely, plant it in fast-draining soil in a pot with a drainage hole, and leave it alone the rest of the time. The rest of this guide explains how to get each of those details right, what to do when something looks wrong, and the mistakes that catch out even experienced plant owners.

## At a glance

| Need | What a snake plant wants |
|---|---|
| Light | Bright, indirect light is best; tolerates low light and some direct sun |
| Water | Only when soil is fully dry, every 2–6 weeks depending on conditions |
| Soil | Very free-draining cactus or succulent mix |
| Pot | A pot with drainage holes, only slightly larger than the root ball |
| Temperature | 15–29°C (59–85°F); keep away from frost and cold draughts |
| Humidity | Average indoor humidity is fine |
| Feeding | Light feeding in spring and summer only |
| Difficulty | Easy — a good first houseplant |

## Light: where to put it

Snake plants are famous for tolerating low light, but tolerating is not the same as thriving. In bright, indirect light — a few feet from a sunny window, or beside an east-facing window — a snake plant grows faster, keeps its leaf colour strong, and produces new leaves regularly. In a dim corner it will survive, but growth slows to almost nothing and variegated types can gradually lose their yellow edges and turn plain green.

A little gentle morning sun is fine. Harsh midday sun through a south-facing window can scorch the leaves, leaving pale, dry patches. If you move a plant from a dark spot into strong sun, do it gradually over a week or two so the leaves can adjust.

Rotate the pot every few weeks so the leaves grow straight.

## Watering: less is more

This is the one area where snake plants punish mistakes. Their thick leaves hold a reserve of water, so the plant is built to cope with drought — but it has almost no defence against sitting in wet soil. Waterlogged roots rot quickly, and root rot is the most common reason snake plants die.

The rule is simple: water thoroughly, then wait until the soil is completely dry before watering again. "Thoroughly" means watering until it runs out of the drainage holes, then emptying the saucer so the pot is never left standing in water. How long the soil takes to dry depends on pot size, light, season, and the soil mix — which is why a fixed weekly schedule is a bad idea. Use the estimator below to find a starting interval for your plant, then always check the soil before you water.

In winter, growth slows and the soil dries even more slowly, so watering may drop to once a month or less. If in doubt, wait another few days. A thirsty snake plant will show wrinkled, slightly soft leaves; an overwatered one will show mushy, yellow leaves at the base, and that is much harder to reverse.

<div class="widget" id="how-to-take-care-of-a-snake-plant-widget">
  <h3>Snake plant watering estimator</h3>
  <p>Answer three questions and get a suggested watering interval for your plant. Always check the soil is dry before watering — this is a starting point, not a rule.</p>
  <label for="how-to-take-care-of-a-snake-plant-pot">Pot size</label>
  <select id="how-to-take-care-of-a-snake-plant-pot">
    <option value="small">Small — under 15 cm (6 in) wide</option>
    <option value="medium" selected>Medium — 15–25 cm (6–10 in) wide</option>
    <option value="large">Large — over 25 cm (10 in) wide</option>
  </select>
  <label for="how-to-take-care-of-a-snake-plant-light">Light level</label>
  <select id="how-to-take-care-of-a-snake-plant-light">
    <option value="low">Low light — far from a window</option>
    <option value="medium" selected>Medium — bright, indirect light</option>
    <option value="bright">Bright — near a sunny window</option>
  </select>
  <label for="how-to-take-care-of-a-snake-plant-season">Season</label>
  <select id="how-to-take-care-of-a-snake-plant-season">
    <option value="summer" selected>Spring / summer (growing season)</option>
    <option value="winter">Autumn / winter (resting season)</option>
  </select>
  <button type="button" id="how-to-take-care-of-a-snake-plant-btn">Estimate my watering interval</button>
  <p id="how-to-take-care-of-a-snake-plant-result" aria-live="polite"></p>
</div>
<script>
(function () {
  var btn = document.getElementById('how-to-take-care-of-a-snake-plant-btn');
  var out = document.getElementById('how-to-take-care-of-a-snake-plant-result');
  if (!btn || !out) return;
  btn.addEventListener('click', function () {
    var pot = document.getElementById('how-to-take-care-of-a-snake-plant-pot');
    var light = document.getElementById('how-to-take-care-of-a-snake-plant-light');
    var season = document.getElementById('how-to-take-care-of-a-snake-plant-season');
    if (!pot || !light || !season) return;
    var days = 21;
    if (pot.value === 'small') days -= 7;
    if (pot.value === 'large') days += 7;
    if (light.value === 'low') days += 7;
    if (light.value === 'bright') days -= 7;
    if (season.value === 'winter') days += 14;
    days = Math.max(10, Math.min(56, days));
    var note = 'Water thoroughly, let it drain fully, and always check the soil is dry all the way through before watering again.';
    if (season.value === 'winter') note += ' In the resting season the plant uses very little water, so err on the side of waiting.';
    if (light.value === 'low') note += ' In low light the soil dries slowly — the finger test matters more than the calendar.';
    out.textContent = 'Suggested interval: roughly every ' + days + ' days. ' + note;
  });
})();
</script>

## Soil and potting

Snake plants need soil that drains fast. A cactus or succulent mix works well, and you can improve ordinary potting soil by mixing in roughly one part perlite or coarse sand to two parts soil. Heavy, moisture-holding soil stays wet around the roots and invites rot.

The pot matters as much as the soil. Always use a pot with drainage holes, and never let the plant sit in a saucer of water. Snake plants actually like being slightly snug — a pot only a couple of centimetres wider than the root ball is ideal. A pot that is far too large holds a lot of wet soil the roots cannot reach, which stays damp for too long.

Repot only when the plant is clearly outgrowing its pot — roots from the drainage holes, or a bulging pot — usually every two to three years in spring. Go up just one pot size, use fresh dry mix, and wait a few days before watering so damaged roots can heal.

## Feeding and cleaning

Snake plants are light feeders. A half-strength balanced liquid houseplant fertiliser once a month in spring and summer is plenty. Do not feed in autumn or winter, and do not feed a plant that is stressed, newly repotted, or sitting in wet soil — fertiliser will not fix those problems and can make them worse.

Wipe the leaves with a damp cloth every few weeks to remove dust.

## Propagation

The easiest way to make new plants is division: when repotting, gently separate a cluster of leaves with its own roots and pot it up on its own. Leaf cuttings also work — cut a healthy leaf into sections, let the cut ends dry for a day or two, then push them a few centimetres into dry soil. Cuttings are slower, and variegated varieties grown from them usually come back plain green.

## Common mistakes

- **Watering on a schedule.** Watering every Saturday regardless of soil moisture is the fastest way to rot a snake plant. Check the soil, not the calendar.
- **No drainage hole.** A decorative pot without holes traps water at the bottom. Either drill a hole or use a nursery pot inside the decorative one and empty it after watering.
- **A pot far too big.** Extra soil stays wet. Keep the pot snug.
- **Feeding in winter.** The plant is barely growing and cannot use the fertiliser; salts can build up and burn roots.
- **Putting it right against a freezing window.** Snake plants dislike cold. Keep them away from frosty glass and cold draughts.

## Troubleshooting

### Leaves turning yellow and soft at the base

This is usually overwatering. Stop watering, let the soil dry out fully, and check the roots if the plant feels loose — black, mushy roots need to be cut away with clean scissors, and the plant repotted into dry mix. Remove any leaves that are soft and translucent.

### Leaves wrinkled or curling inwards

This usually means the plant is genuinely thirsty, or the roots have been damaged and cannot take up water. If the soil is bone dry, give it a thorough watering. If the soil is wet but the leaves still look thirsty, check the roots for rot.

### Brown, dry tips

Brown tips can come from inconsistent watering, a build-up of salts from tap water or fertiliser, or very dry air. Trim the brown tip following the natural leaf shape, water more evenly, and try watering with rainwater or water left out overnight.

### Leaves flopping over

Tall leaves that flop usually mean the plant is not getting enough light, or the roots are weak from overwatering. Move it to a brighter spot and check that the soil is drying out between waterings. A stake can support a flopping leaf while it recovers, but the underlying cause still needs fixing.

## Frequently asked questions

### How often should I water a snake plant?

Only when the soil is completely dry, which is typically every two to six weeks. Pot size, light, and season all change the timing, so check the soil with your finger or a wooden skewer rather than following a fixed schedule. When in doubt, wait — a snake plant copes with drought far better than with wet roots.

### Can a snake plant live in a room with no windows?

Not well. It may survive for a while in a windowless room with bright artificial light, but it will not grow and will slowly weaken. A snake plant needs at least some light to stay healthy long term. If the room has no natural light, a grow light on for 10–12 hours a day is a practical alternative.

### Why are my snake plant leaves turning yellow?

Yellow, soft leaves at the base almost always point to overwatering or soil that stays wet. Let the soil dry out completely, make sure the pot drains, and check the roots if the problem spreads. Yellow leaves caused by rot will not recover — remove them so the plant can put energy into healthy growth.

### How big will a snake plant get?

It depends on the variety. Common types grow to around 60–120 cm (2–4 ft) tall indoors, while dwarf varieties stay under 30 cm (12 in). Growth is slow in low light and faster in bright, indirect light, so the same plant can take years to reach full size in a dim room.

## Conclusion

Taking care of a snake plant comes down to restraint: bright, indirect light, fast-draining soil, a pot with holes, and water only when the soil is fully dry. Get those four things right and the plant largely looks after itself. If something goes wrong, the cause is almost always water — and the fix is to water less, improve drainage, and give it more light.

## Related guides

- [How to Water Snake Plants](/guides/how-to-water-snake-plants/)
- [Snake Plant Light Needs](/guides/snake-plant-light-needs/)
- [Snake Plant Low Light: Will It Thrive?](/guides/snake-plant-low-light/)
- [Snake Plant for Beginners](/guides/snake-plant-for-beginners/)

## Sources and further reading

- Royal Horticultural Society plant guides
- Missouri Botanical Garden Plant Finder
- University extension horticulture publications
