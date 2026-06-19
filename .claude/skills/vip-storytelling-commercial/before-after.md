---
name: before-after
description: The transformation-render layer for VIP commercials. Use when generating the house renders (before, palette options, chosen reveal, hero, upsell) and building the gold-wipe before/after reveal. Owns the Higgsfield repaint prompt structure, render queue, and reveal mechanics. Loaded by vip-storytelling-commercial.
---

# Before / After — House Transformation Renders

This sub-skill produces **Stream 1** (house renders only — no character; the house photo is the reference image). It builds the emotional payoff of the episode: the gold wipe from tired BEFORE to stunning AFTER.

## PROVEN PROMPT STRUCTURE

Every house render follows this exact skeleton (proven on 8273 North Fontana):

```
Repaint the house on the left using the following colors:
Main Body: [SW NAME] [SW CODE] - Hex [#hex]
Fascia and Under-Eaves: [SW NAME] [SW CODE] - Hex [#hex]
Shutters: [SW NAME] [SW CODE] - Hex [#hex]
Front Door: [SW NAME] [SW CODE] - Hex [#hex]
Window Trim: [SW NAME] [SW CODE] - Hex [#hex]
Retain the existing [architectural features to preserve].
[Optional architectural additions for upsell/hero renders].
Ensure the home reflects a [STYLE LABEL] style with [mood descriptors] and high-end curb appeal.
```

The **style label drives the lighting and mood** — "Bold Modern," "Warm Rustic California," "Contemporary Modern," "Luxury Modern." Hero renders append: "Photographed during peak golden hour with dramatic cloud sky and warm sun on the facade... magazine-cover quality worthy of an HGTV Dream Home feature."

## RENDER QUEUE (Douglas & Sheri reference — swap per episode)

| ID | Render | Tool | Credit | Scenes |
|----|--------|------|--------|--------|
| A | BEFORE straight-on | Real photo | 0 | S1,S2,S3,S4,S7 |
| B | BEFORE trim close-up | iPhone photo | 0 | S3 (2-sec) |
| C | Gateway Gray + Tricorn Black ★ | Cinema S35 | 1 | S4, S6 hero, S7 |
| D | Rookwood Red + Virtual Taupe | Cinema S35 | 1 | S4, S6 alt |
| E | Gray Area + Origami White | Cinema S35 | 1 | S4, S6 alt |
| F | 6 SW swatch cards | Canva | 0 | S5 |
| G | Upsell hero + upgrades $ | Shots 4K | 1 | S6, S8, video |
| K | Final CTA hero ★ | Cinema S35 | 1 | S1, S8, all |

★ = chosen palette, most-used. $ = revenue render. **Run order: C → K → G → D → E.** Perfect C and K first — they're the booking images.

## RENDER SETTINGS

Cinema Studio Image · Studio Digital S35 · 50mm · f/4. (G = Shots model, 4K, 9-panel grid → Create Video.) Variations: C & K = 4–5, D & E = 2–3, G = 3–4. Star the most cinematic of each.

Use the installed `higgsfield-cinema` and `higgsfield-prompt` sub-skills for camera/lighting refinement and the MCSLA prompt formula. House photo always goes in as the **reference image** (per memory: house photos are references, never Soul characters).

## THE GOLD WIPE (the peak — Scene 7)

The most cinematic moment of the episode. Left = Render A (BEFORE). Right = Render C (chosen AFTER). Gold line sweeps left→right. **Hold 3 full seconds on AFTER.** Floating palette card shows the chosen colors with SW codes. On-screen: "THE CHOSEN PALETTE."

Scene 1 uses the same mechanic as a cold-open teaser (BEFORE/Render A split with FINAL/Render K). Scene 8 ends on Render K with a 5-second-minimum Ken Burns pull-back.

## CHOSEN PALETTE (Douglas & Sheri)

Gateway Gray SW 7644 #8C9098 body · Tricorn Black SW 6258 #2F2F30 fascia/shutters/door/garage · Origami White SW 7636 #E5E2DA trim. Retain: natural stone column, wood carriage garage, black lantern sconces.

## REUSE

Swap the source house photo + the SW colors/hex codes in each prompt node. The prompt skeleton, queue logic, settings, and gold-wipe mechanic stay fixed. This is the core of build-once-deploy-15x.
