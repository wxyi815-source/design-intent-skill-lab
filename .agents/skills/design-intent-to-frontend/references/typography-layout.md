# Typography Layout

Text position and line breaks often carry the design intent. Analyze text as visual mass, not only as a box with coordinates.

## What To Check

- Heading visual region: determine whether the title belongs high, low, left, right, centered, or offset.
- Heading alignment mode: determine whether the title is centered, left-aligned, right-aligned, spanning across the canvas, or anchored around a visual subject.
- Heading scale and density: compare width occupation, height occupation, line count, and line height.
- Text block max width: ensure line length supports the intended reading rhythm.
- Semantic line breaks: preserve meaningful phrase grouping when the reference depends on it.
- Typeface category and weight: compare sans versus serif, condensed versus wide, heavy versus medium, uppercase versus lowercase, and whether fallback fonts change the effect.
- Font load differences: inspect actual rendered size after fonts load or after fallback fonts are applied.
- Line height: compare density, readability, and vertical occupation.
- Letter spacing: keep it neutral unless the design clearly depends on tracking.
- Heading-to-body distance: preserve whether the relationship is tight, airy, editorial, or utilitarian.
- Text-to-image relationship: compare overlap, adjacency, separation, and directional flow.
- Flex/Grid alignment drift: watch for centering or stretching that moves text away from the intended region.
- Container height drift: fixed or viewport-height containers can push text too high or low.
- Responsive type changes: adjust size and width without destroying hierarchy.
- Operating system rendering: macOS and Windows can render fallback fonts with different metrics.

## Do Not Only Compare

- Left-top coordinate of a text box.

Also compare:

- Overall area occupied by the text block.
- Baseline relationships.
- Line-break rhythm.
- Alignment to the canvas center or visual subject.
- Font weight, case, and width relative to the reference.
- Relationship to surrounding whitespace.
- Effect on page visual center of gravity.

## Practical Frontend Controls

- Use `max-width` to control readable line length.
- Use grid placement or alignment rules to preserve visual region.
- Use explicit line breaks only when semantic grouping matters and responsive behavior is checked.
- Use `text-wrap: balance` only when it supports the intended hierarchy and does not hide a required line break.
- Test fallback fonts when the project does not load a custom font.
- If the reference uses centered poster typography, do not implement it as a conventional left-column heading.
- If text overlap is not explicitly planned, keep supporting copy and controls outside the title's visual mass.
