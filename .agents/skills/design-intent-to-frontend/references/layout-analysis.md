# Layout Analysis

Use layout analysis to convert a visual reference into frontend constraints that survive responsive implementation.

## Analysis Areas

- Canvas strategy: determine whether the reference is a full webpage canvas, a framed poster inside a page, a card, a split layout, or a local component. Do not carry over screenshot borders or presentation margins unless they are part of the intended webpage design.
- Visual anchors: identify the 3-8 relationships that decide the page's feel and must be verified after rendering.
- Main grid and secondary grid: identify columns, gutters, edge margins, and nested alignment systems.
- Viewport anchors: locate what is tied to top, bottom, left, right, center, or a proportional region of the viewport.
- Container boundaries: identify whether elements align to full viewport, page shell, content column, or component container.
- Alignment lines: mark shared left edges, right edges, baselines, centerlines, and image edges.
- Asymmetric layout: preserve imbalance when it creates the design's visual tension or direction.
- Visual center: identify where the eye lands first and how secondary elements support it.
- Image and text area relationship: compare occupied area, weight, and distance rather than only dimensions.
- Positive and negative space: preserve the feeling of density or openness.
- Vertical rhythm: inspect section height, heading-to-body distance, block spacing, and scroll pacing.
- Overlap and hierarchy: identify layers, stacking order, shadows, masks, and click targets.
- Fixed versus natural flow: choose fixed positioning only when an element truly needs viewport anchoring; prefer natural layout flow for content that should respond to content size.

## Visual Anchor Examples

- Title visual region and alignment.
- Primary subject bounding area and center.
- Negative space region.
- Text block max width and line-count rhythm.
- Safe collision area where supporting text must not enter.
- First visual landing point.
- Main canvas width, height, and edge relationship.
- Relationship between navigation, title, and visual subject.

## Implementation Notes

- Convert visual observations into constraints such as `max-width`, grid tracks, alignment rules, aspect ratio, and spacing tokens.
- Use fixed heights cautiously. Fixed height can preserve a poster-like composition but often causes overflow or vertical drift.
- Preserve the source of asymmetry. If a heading is intentionally high-left or low-right, do not center it for convenience.
- Check whether a layout is anchored by text, image, whitespace, or navigation before coding.
- Before coding, state the intended canvas relationship: full-bleed, bounded, framed, inset, or component-local.
- If the reference screenshot includes black bars, app chrome, mockup padding, or social-media margins, decide whether those are content or presentation artifacts.
- Treat wrong canvas scale, wrong outer margins, and unintended framed layouts as high-priority visual differences.
- Put visual anchors into the Visual Alignment Contract when they are important enough to verify.
