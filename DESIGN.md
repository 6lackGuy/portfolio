---
name: Caleb Adjuya Portfolio
description: A mechanical engineer's drawing set for software, lettered on a graphite sheet.
colors:
  safety-orange: "#ff6a13"
  drafting-desk: "#121417"
  graphite-sheet: "#1b1e23"
  vellum-line: "#c9d1da"
  vellum-line-mid: "#8e98a4"
  vellum-line-faint: "#3f4650"
  lettering-white: "#ffffff"
  ink: "#14161a"
  sheet-grid: "rgba(201, 209, 218, 0.045)"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 1rem + 6.6vw, 6rem)"
    fontWeight: 860
    lineHeight: 0.86
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.1rem + 4.2vw, 4.75rem)"
    fontWeight: 820
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 1.1rem + 1.8vw, 2.6rem)"
    fontWeight: 760
    lineHeight: 1.05
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 118"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 112"
  data:
    fontFamily: "'B612 Mono', ui-monospace, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  dimension:
    fontFamily: "'B612 Mono', ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    fontFeature: "'tnum'"
rounded:
  none: "0px"
  balloon: "50%"
spacing:
  frame-inset: "10px"
  zone-strip: "18px"
  gutter: "28px"
  grid: "32px"
  nav-height: "56px"
  sheet-pad: "clamp(44px, 5vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.lettering-white}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.lettering-white}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "50px"
  button-ghost-hover:
    textColor: "{colors.safety-orange}"
  button-small:
    padding: "0 14px"
    height: "36px"
  balloon:
    backgroundColor: "{colors.graphite-sheet}"
    textColor: "{colors.safety-orange}"
    typography: "{typography.dimension}"
    rounded: "{rounded.balloon}"
    size: "26px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.safety-orange}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  title-block:
    backgroundColor: "{colors.graphite-sheet}"
    textColor: "{colors.vellum-line}"
    rounded: "{rounded.none}"
    padding: "7px 14px 8px"
  approval-block:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Caleb Adjuya Portfolio

## Overview

**Creative North Star: "The Drawing Set"**

Every page is a sheet in an engineering drawing set: a graphite sheet laid on a darker desk, framed twice, lettered along its edges with zone numbers (1 to 8) and zone letters (A to F), and closed by a title block that states the drawing name, sheet number of the set, revision, scale and projection. Content is not placed in cards; it is drawn. Work is shown as assemblies with balloons and leader lines, experience as a revision table, skills as a bill of materials, contact as an approval block.

The linework is flat and precise. Vellum-grey lines in three weights do all the structural work, white is reserved for lettering that must be read first, and safety orange marks only what a drafter would mark in red: leaders, dimensions, balloons, the current revision, and the primary action. Depth exists only as real projection (isometric views, explodes, sheets tilting away), never as decoration.

Motion is the drawing being operated: the hero assembly explodes along its stack as the visitor scrolls, app drawings rotate from isometric into a front elevation and only then gain their callouts, and each sheet leans back and recedes as it leaves, like turning to the next sheet. All of it is scroll-scrubbed with an exponential ease-out, and all of it resolves to a static, fully readable drawing under reduced motion.

**Key Characteristics:**
- Graphite sheet on a darker desk, with a 32px drafting grid at near-invisible strength.
- Double frame, zone markers and a per-sheet title block on every section.
- Square corners everywhere; circles only for balloons, leader terminators and sheet numbers.
- Expanded uppercase Archivo for all lettering; B612 Mono only for numbers, dates and table field data.
- One accent, safety orange, carrying drafting meaning rather than decoration.
- Scroll-scrubbed 3D projection that collapses to a static drawing under reduced motion.

## Colors

A graphite-and-vellum drafting palette with a single safety-orange marker.

### Primary
- **Safety Orange** (`safety-orange`): the drafter's marker. Leader lines and their dot terminators, balloon rings and numerals, the live value on a dimension line, note numerals, the current revision triangle and its tag, the "after" bar in the measured result, map pins and active states inside screen schematics, the nav scroll-progress rule, focus outlines, text selection, the primary button, and the approval block. Hover on any secondary control turns it orange.

### Neutral
- **Drafting Desk** (`drafting-desk`): the surface beneath the sheets; page background, nav bar (at 94% opacity), scrollbar track, and the 1px seam between sheets.
- **Graphite Sheet** (`graphite-sheet`): every drawing sheet, title-block fill, balloon fill and the knock-out behind callout text and dimension values so lines never cross lettering.
- **Vellum Line** (`vellum-line`): body text and primary object linework (exploded layers, table values).
- **Vellum Line, Mid** (`vellum-line-mid`): secondary text, annotation lettering, field labels, dimension extension lines, ghost button outline, hatch strokes.
- **Vellum Line, Faint** (`vellum-line-faint`): frame borders, zone dividers, table rules, nav border, scrollbar thumb. Structural only; never carries text.
- **Lettering White** (`lettering-white`): display and heading lettering, callout titles, device outlines in the elevation views, the primary button hover fill.
- **Ink** (`ink`): text on orange (primary button, approval block, selection).
- **Sheet Grid** (`sheet-grid`): the 32px drafting grid drawn on every sheet, offset to the gutter.

### Named Rules
**The Red Pencil Rule.** Safety orange marks drafting meaning (a leader, a dimension, a balloon, a revision, the current state) or the one primary action. If an orange element could be removed without losing a measurement, a reference or the CV/email action, it should not be orange.

**The White Lettering Rule.** Pure white is for lettering a visitor must read first (names, headings, callout titles, values) and for the drawn device outline. Running text stays in Vellum Line.

## Typography

**Display Font:** Archivo Variable, width axis (with Archivo, system-ui)
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** B612 Mono (with ui-monospace)

**Character:** Archivo stretched to 112-125% width in heavy uppercase reads as drafting lettering; B612 Mono, a cockpit-display face, reads as instrument values and keeps figures tabular.

### Hierarchy
- **Display** (860, `display` clamp, 0.86, width 125%, uppercase, white): the name on sheet 1 only.
- **Headline** (820, `headline` clamp, 0.92, width 125%, uppercase, white, balanced wrap): one sheet title per sheet.
- **Title** (760, `title` clamp, 1.05, width 118%, uppercase, white): app names; smaller in revision rows (clamp(1.15rem, 0.95rem + 0.8vw, 1.6rem)) and the measured-result panel (1.15rem).
- **Body** (400, 1.0625rem, 1.6, Vellum Line): running text, held to 44-72ch.
- **Label** (the shared `--annot` lettering token: 700, 0.68rem/1.4, width 112%, uppercase, 0.1-0.12em tracking, Vellum Line Mid): figure captions, readouts, units note, contact field names, colophon, scroll hint.
- **Data** (B612 Mono 400, 0.58-0.66rem, 0.12-0.14em tracking, uppercase): title-block field names, table heads, tags, approval field names, zone markers.
- **Dimension** (B612 Mono 400, 0.7-0.9rem, tabular figures): dimension values, dates, balloon numerals, note numerals, measured values.

### Named Rules
**The Mono Means Measured Rule.** B612 Mono appears only on numbers, dates, units and table or field metadata. Prose, headings, buttons and callout titles are always Archivo.

**The One Annotation Hand Rule.** Every caption-level note uses the `--annot` lettering token. A new note style is a new token, not a local font declaration.

## Layout

Each section is a full-width sheet. Sheets pad by `sheet-pad` horizontally and clamp(96px, 12vw, 160px) on top, with clamp(150px, 14vw, 190px) at the bottom so the title block never collides with content. Content sits in a 1240px column (the hero grid widens to 1520px). Sheet heads are a 1.3fr / 1fr grid, heading left and intro right, aligned to the baseline. Assemblies alternate copy and figure left/right; notes, sign-off and app rows are two columns that collapse to one at 860px.

The frame insets 10px from the sheet edge with an inner border 18px further in; the 18px strip holds the zone markers. The fixed nav is 56px tall over the desk. The hero is a 240vh scroll track pinning a 100svh sheet.

Responsive: at 1080px nav labels drop to numbered circles; at 860px the gutter tightens to 22px, the zone strip to 14px, zones show 1-4 and A-D only, the title block keeps drawing, sheet and rev, tables reflow to two-column rows, and elevation drawings scale to 0.66; at 560px the sheet nav hides behind the CV button.

## Elevation & Depth

The system is flat. Depth is never simulated with shadow or blur; it is projected. Planes separate by real 3D transform (translateZ explodes, isometric rotation, sheet tilt with a perspective of 1400-1800px), and layering is shown by section hatching (45 and -45 degree hairlines at 7-14px pitch) and dashed outlines, as on a drawing. Text over linework sits on a Graphite Sheet knock-out rather than a shadow.

### Named Rules
**The Projection, Not Shadow Rule.** If something needs to read as in front, move it in z or draw it with a heavier or brighter line. Do not add a shadow, glow or blur.

## Shapes

Square corners are the default for every UI element: buttons, tags, title blocks, panels, tables and the approval block (0px). Circles are reserved for drafting symbols: balloons (26px, 22px on small screens), leader dot terminators (6px), nav sheet numbers (20px). Revision marks are open triangles with the revision letter inside. Rounded corners appear only on drawn objects, the phone outline (32-34px) and its schematic controls, because they depict a device rather than the interface. Lines come in two weights, 1px for structure and 1.5px for object outlines, leaders and button borders; dashed lines mark the release layer and generated-code fields.

## Components

### Buttons
Lettered plates, square and heavy.
- **Shape:** square (0px), 1.5px border, 50px tall (36px small, 44px on narrow phones).
- **Primary:** Safety Orange fill with Ink lettering, 750 weight, width 115%, uppercase, 0.06em tracking, with a 16px drawn icon. Used only for Download CV, in nav, hero and sign-off.
- **Hover / Focus:** primary fills white; ghost turns its border and lettering orange; press nudges 1px down; 0.2s on the exponential ease; focus is a 2px orange outline offset 3px.
- **Ghost:** transparent with a Vellum Line Mid border and white lettering; the email variant keeps the address in sentence case.
- **Text link:** orange uppercase lettering on a 1px orange underline rule, turning white on hover.

### Chips
- **Tag:** 1px orange border, orange B612 Mono at 0.62rem uppercase, square. Marks the current state only ("Current").

### Navigation
Fixed desk-coloured bar, 1px faint bottom rule. Mark on the left in 800-weight expanded caps; sheet links as numbered circles (sheet 2 to 6) plus labels in 600-weight uppercase at width 110%; the CV button at the right. Hover turns the link and its circle orange. A 2px orange rule along the bottom scales with page scroll.

### Sheet Frame and Title Block (signature)
Every section carries the double frame, zone markers on all four edges, and a title block pinned bottom right: drawing name, sheet n / 6, revision, scale 1:1, a third-angle projection symbol, and the drafter. Field names in Data type, values in 700-weight expanded caps. Sheets lean back up to 16 degrees, scale to 0.88 and fade as they scroll out, pivoting on their bottom edge.

### Balloons, Leaders and Callouts (signature)
A callout is a 1.5px orange leader with a dot terminator, an orange-ringed balloon numeral, and a Graphite Sheet label plate with a white uppercase title and an optional mono spec line. In the hero, callouts are positioned by projecting each 3D layer to 2D every frame, so labels stay flat and legible while the assembly moves. In app elevations they appear only once the view has settled to front elevation.

### Dimension Lines
Extension lines in Vellum Line Mid with the value centred on a sheet knock-out in B612 Mono. A live dimension (hero layer spacing, the downtime measure) has its on-screen length tied to the real value, with the measured line and number in orange.

### Revision Table
Rows of revision triangle, mono date and description, separated by faint rules under a mono header. The current revision's triangle is orange. Rows swing down from -70 degrees on entry.

### Bill of Materials
A ruled table: orange balloons as item numbers, assembly names in 760-weight expanded caps, parts as body text. Reflows to a two-column grid on small screens.

### Approval Block
The one orange panel: field name and value rows in Ink with 35% Ink rules, a drawn signature that writes itself once, and a blank sign line. Closes the set.

## Do's and Don'ts

### Do:
- **Do** give every new section a sheet: frame, zone markers, and a title block with its own drawing name and sheet number.
- **Do** letter in expanded uppercase Archivo (width 110-125%) and keep numbers, dates and field names in B612 Mono with tabular figures.
- **Do** use the `--annot` token for every caption, readout and field note.
- **Do** connect any annotation to its subject with an orange leader and balloon, and knock text out on Graphite Sheet where lines pass behind it.
- **Do** express layers and materials with hatching and dashed outlines.
- **Do** drive motion from scroll with the exponential ease-out (cubic-bezier(0.16, 1, 0.3, 1)), and make every motion value resolve to its final, readable state when reduced motion is requested.

### Don't:
- **Don't** use orange for decoration, large backgrounds or secondary actions; the approval block and primary button are the only orange fills.
- **Don't** add drop shadows, glows, glass blur or smooth colour gradients; linear gradients are allowed only to draw grid lines and hatching.
- **Don't** round UI corners; reserve curves for balloons, terminators and drawn devices.
- **Don't** set prose, headings or buttons in mono.
- **Don't** put white on running text or let the faint line carry text.
- **Don't** use content cards or a bento grid; place content as drawings, tables and notes on the sheet.
