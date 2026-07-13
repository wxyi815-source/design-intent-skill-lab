# Visual Alignment Contract

The Visual Alignment Contract converts design intent into a small set of traceable, verifiable implementation constraints. It is not a pixel-perfect measurement table and not a long design essay.

## Core Fields

Each high-priority visual dimension should include:

| Field | Meaning |
|---|---|
| Dimension | The visual dimension being controlled. |
| Reference intent | What the reference or user asks this dimension to preserve. |
| Priority | P0/P1/P2 or High/Medium/Low. |
| Implementation rule | The frontend constraint or strategy. |
| Allowed variation | What can differ without breaking intent. |
| Verification method | How to verify the result. |
| Evidence | Screenshot, browser inspection, computed style, or user confirmation. |
| Result | Pass / Needs correction / Needs user review. |

## Supported Dimensions

- Overall design mechanism
- Canvas strategy
- Main grid
- Title visual region
- Title alignment
- Text block width
- Semantic line breaks
- Typography hierarchy
- Image-to-text ratio
- Main subject position
- Visual center of gravity
- Negative space
- Intentional overlap
- Forbidden collision area
- Color relationship
- Responsive relationship
- Interaction state
- Motion rhythm

## Design Mechanism Hypothesis

The Design Mechanism Hypothesis is the bridge between reference analysis and implementation. It is a one-sentence explanation of the core visual cause-and-effect relationship that makes the reference work, not a style label such as "minimal", "premium", or "editorial".

For non-trivial reference tasks, at least one contract item must verify whether the rendered result preserves this mechanism. If every local contract item passes but the overall mechanism fails, visual QA is not complete.

Mechanism verification can focus on first visual landing point, visual center of gravity, image-to-text weight, asymmetric tension, negative space, hierarchy, subject-to-text relationship, or the role of motion in the page's narrative. Do not turn this into a pixel-measurement table. If the mechanism judgment is subjective, mark it `Needs user design review`.

## Visual Anchors

Visual anchors are the few relationships that determine the page's overall feel. Identify at most 3-8 anchors for non-trivial work.

Good anchors can use:

- Viewport percentage ranges
- Grid columns or rows
- Container boundaries
- Relative area ratios
- Alignment relationships
- Subject safe zones
- Visual weight relationships

Examples:

- Title visual region: desktop title occupies the upper-left visual region, approximately within 16%-30% of viewport height.
- Text block: main copy remains visually narrow and does not exceed roughly one-third of content width.
- Main subject: visual subject remains more dominant than body copy and does not become an equal-width split column.
- Collision zone: heading and body copy must not cover the subject's focal area.

These ranges guide implementation and verification; they do not require pixel-perfect copying.

## Constraint Traceability

Track the chain:

```text
Design constraint
-> Implementation strategy
-> Actual change
-> Verification evidence
-> Final status
```

For every failed P0 or P1, report the related contract item:

```text
Contract item: Title visual region
Expected: upper-left region, above the page's vertical midpoint
Observed: title is approximately one text block too low
Severity: P1
Correction: reduce container top offset and remove vertical centering
```

## Staged Rendering

Use staged rendering for complex visual tasks.

### Pass 1: Composition

Handle canvas, main grid, visual regions, title position, subject position, text-to-image ratio, major negative space, and major overlap relationships. Render target viewports and correct obvious composition drift before detail work.

### Pass 2: Typography and Material

Handle font category, size, weight, line height, tracking, case, semantic line breaks, image crop, color, layer relationship, and surface treatment. Render again.

### Pass 3: Polish, Interaction, and Responsive

Handle fine spacing, hover, click, scroll behavior, motion, responsive adaptation, and minor decorative details.

Direct Execution Mode does not require all three passes. Medium-complexity work can merge Pass 2 and Pass 3.

## Rendered Alignment Loop

1. Establish the Visual Alignment Contract.
2. Complete the smallest testable implementation.
3. Open the real page.
4. Wait for fonts, images, and layout resources.
5. Inspect, screenshot, check computed styles, review layout bounds, or test interaction states at target viewports.
6. Compare each contract item against evidence.
7. Identify the largest visual deviation.
8. Modify only related files and styles.
9. Render again.
10. Update contract status and QA report.

Default to at most two automatic correction rounds: first for P0, second for the most significant P1. If uncertainty remains, request Human Design Review.
