# Visual Variables

Use visual variables to understand why a reference works before choosing a frontend implementation. Do not add case-specific style rules for every new reference; extract the mechanism that transfers across projects.

## Core Question

What visual mechanism carries the design intent?

Examples:

- A title acts as ordinary readable text.
- A title acts as a graphic mass or background object.
- An image is the main subject.
- An image is a layer over typography.
- Negative space is the primary mood.
- Navigation is a dominant visual band.
- Motion is part of the composition, not only decoration.

## Variables To Check

- Canvas: full-bleed, framed, inset, poster-like, card-like, or component-local.
- Title role: readable heading, graphic object, texture, mask, repeated strip, or background layer.
- Title permissions: may crop, overflow, stretch, compress, repeat, wrap, rotate, animate, or be partially hidden.
- Typography role: neutral interface text, editorial voice, poster typography, display identity, or utility label.
- Image role: subject, evidence, texture, collage layer, crop window, or placeholder.
- Overlap policy: forbidden collision, readable overlap, image-over-text, text-over-image, or masked interaction.
- Color mechanism: contrast system, accent band, inherited brand color, tonal mood, or functional state.
- Existing visual language: which colors, type scale, spacing, borders, motion, and hierarchy already define the current page.
- New visual additions: which added elements are required by the reference mechanism or user input, and which are optional decoration.
- Reference canvas artifacts: which outer backgrounds, preview frames, artificial borders, app chrome, or mockup margins belong to the reference presentation rather than the target page.
- Motion mechanism: hover feedback, continuous ambient motion, scroll-linked movement, marquee, reveal, or no motion.
- Responsive priority: preserve exact position, preserve visual weight, preserve reading order, preserve subject crop, or simplify.
- User involvement: which choices are already explicit, which are safe assumptions, and which remain high-impact decisions.

## How To Use

1. Name the mechanism in one sentence.
2. Mark implementation-changing variables as explicit, assumed, or unresolved.
3. State the assumption boundary for fuzzy input: what will be borrowed, what will not be copied, and what content or structure is being invented as neutral placeholder.
4. Ask for confirmation only for unresolved high-impact variables.
5. Convert explicit and assumed variables into the Visual Alignment Contract.
6. During QA, judge whether the mechanism survived, not whether every surface detail matches.

## Good Generalization

Do not write rules like "if the title is DEXTER, make it scroll." Write rules like:

- If a title is a graphic mass, ordinary text sizing may be insufficient.
- If a title must dominate the canvas, verify occupied area and edge relationship, not only font size.
- If a title may overflow, define safe crop behavior and mobile fallback.
- If motion is used to solve cropping or repetition, define trigger, speed, pause behavior, and accessibility impact.
- If the user asks to match an existing page, added decoration is a design risk unless it can be traced to the reference mechanism or user input.
- If the reference is shown inside an outer preview canvas, do not migrate that canvas, frame, or background unless it is part of the user's requested design relationship.

## User Guidance

When the user has design vocabulary, show a compact list of what is already decided and what remains optional. This creates participation without forcing approval when the input is already clear.

For fuzzy but usable input, expose the assumption boundary before coding. A short statement is enough:

- Borrowing:
- Not copying:
- Neutral placeholders:
- Conservative additions:
- Likely adjustment points:
