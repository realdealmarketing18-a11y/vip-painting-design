---
name: vip-storytelling-commercial
description: Use when producing a VIP Home Painting storytelling commercial — a founder-narrated home transformation episode (Fabian narrating + on-screen B-roll, real homeowners as featured clients, before→visualization→after reveal). Orchestrates the four sub-skills (brand-story, before-after, soul-character, marketing-studio-tvspot) and the installed higgsfield library. Trigger on: "commercial," "episode," "transformation video," "Douglas & Sheri," "video production agent," or any request to script/render/assemble a VIP home transformation video. NEVER use the word "AI" in any customer-facing output — always "VIP Premier's Custom Color Scheme Visualization."
---

# VIP Storytelling Commercial — Master Skill

This is the orchestrator for VIP Home Painting transformation commercials. It owns the story arc, the brand rules, and the shot architecture. It delegates the craft to four sub-skills and to the installed `higgsfield` library (OSideMedia, 19 sub-skills at `.claude/skills/higgsfield/skills/`).

## THE ARC (all three formats, one journey)

Every episode is a **founder-narrated transformation story**:

1. **Founder voice (brand-story):** Fabian, CEO of VIP, narrates throughout — the guide walking the client from frustration to confidence. See `brand-story.md`.
2. **The transformation (before-after):** the home goes from tired/dated → Custom Color Scheme Visualization → stunning reveal. The gold wipe is the emotional peak. See `before-after.md`.
3. **The featured clients (UGC layer):** real homeowners (Douglas & Sheri) are the proof — their frustration, their session, their pride. They appear as real photos/footage, never as generated characters.

The arc maps to the proven 8-scene structure: Hook (result first) → Meet + Promise → Struggle → Discovery → Step 1 (6 colors) → Step 2 + Upsell → Step 3 (chosen reveal) → Result + CTA.

## SHOT ARCHITECTURE — read this before generating anything

Higgsfield has **ONE character slot** and treats house photos as **reference images**. You therefore CANNOT combine Fabian (Soul character) + house (reference) + repaint prompt in a single Cinema Studio pass. Plan in two separate streams that merge in CapCut:

- **STREAM 1 — House renders** (A, B, C, D, E, G, K): reference image = the straight-on house photo; written repaint prompt; NO character. These are the transformation assets. See `before-after.md` + the production master render queue.
- **STREAM 2 — Fabian B-roll**: Soul character = Fabian (white polo); separate generations (gesturing at a tablet showing the visualization, on a porch, reviewing swatches, presenting to camera). NO house reference in these. See `soul-character.md`.
- **MERGE in CapCut:** layer Fabian B-roll between/over house renders. Fabian's narration is the through-line; the house renders are what he's "showing."

Douglas & Sheri = real portrait photo + any real footage. Do not attempt to generate them as Soul characters for the episode (the 3-panel static ad is the one exception where a generated couple is acceptable).

## BRAND RULES (non-negotiable, apply to every output)

- **Never say "AI."** Customer-facing term is always "Custom Color Scheme Visualization" / "VIP Premier's custom visualization service."
- **Audience:** ultra-affluent SoCal homeowners. Tone is confident, warm, premium — never bargain.
- **Money language:** dollar amounts, not percentages. "Complimentary," not "free," in polished copy (the Douglas & Sheri script uses "FREE" in spoken VO — keep spoken VO as written, use "complimentary" in on-screen text/captions).
- **Brand colors:** Navy #1a1f4e, Gold #FFB200, Orange #e8833a, Warm Gray #BAAEA1. Grade every render toward navy + gold.
- **Logo:** white pill/container when on dark backgrounds. Badges only on dark/navy.
- **Taglines:** "See It. Love It. Paint It." / "Visualize It. See It. Paint It."
- **Contact:** (909) 312-5400 · viphomepainting.com · Contact@VIPHomePainting.com

## RENDER SETTINGS (lock in every house node)

Cinema Studio Image · Studio Digital S35 · 50mm · f/4. (Render G uses the Shots model at 4K.) Hero-shot lighting trigger: "peak golden hour with dramatic cloud sky."

Render queue run order: **C → K → G → D → E.** C and K appear in the most scenes and are the images clients book off — perfect those two first. A, B, F are free (real photos + Canva). Total: 5 credits.

## PRODUCTION PIPELINE (per episode)

1. **Intake** — confirm the swap variables (see "Build-once-deploy-15x" below). If missing, ask before generating.
2. **Script** — adapt the 8-scene structure to this home. Keep Fabian's narration arc (`brand-story.md`).
3. **Stream 1 (house)** — generate renders via `before-after.md` + the OSideMedia `higgsfield-cinema` and `higgsfield-prompt` sub-skills. Run C → K → G → D → E.
4. **Stream 2 (Fabian)** — generate B-roll via `soul-character.md` + `higgsfield-soul`.
5. **Graphics** — 6 SW swatch cards (Canva), 3-panel editorial ad (GPT Image 2).
6. **Assembly** — CapCut: lay 8 scenes to script timing, gold split-reveal (S1), gold wipe before/after (S7), composite Fabian B-roll, music synced to swells.
7. **Distribute** — 4–5 min YouTube hero, 90s Reel/FB, 15s silent website loop. Optional: `marketing-studio-tvspot.md` for a one-prompt TV-spot cut.
8. **QA gate** — no "AI" anywhere customer-facing; navy/gold grade present; logo on white pill over dark; CTA + phone correct.

## BUILD-ONCE-DEPLOY-15X (reuse engine)

The Higgsfield Canvas board "VIP-EPISODE-TEMPLATE" regenerates the whole pipeline when you swap **only**:
1. Source house photo (Lane 1 master reference node)
2. The 6 SW colors + hex codes in each prompt node
3. Homeowner name + portrait
4. City/address text
5. Fabian B-roll only needs regenerating if wardrobe/setting changes — otherwise reuse.

Everything else (scene structure, narration template, render settings, grade) stays fixed. Duplicate the board per community: The Bridges → Covenant Hills → Eagle Glen, etc.

## SUB-SKILL ROUTING

- Narration / founder voice / story beats → `brand-story.md`
- House renders / transformation / gold wipe / render prompts → `before-after.md`
- Any shot with Fabian on screen → `soul-character.md`
- One-prompt social TV-spot cut → `marketing-studio-tvspot.md`
- Camera, lighting, motion, model selection, prompt formula → installed `higgsfield` library sub-skills
