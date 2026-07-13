---
name: design-intent-to-frontend
description: Use when a user provides a reference image, design mockup, Figma page, visual demo, webpage screenshot, or existing frontend page and asks to implement, adapt, compare, or fix visual layout, typography placement, spacing, alignment, responsive behavior, visual hierarchy, or visual interaction states without necessarily copying the reference pixel-for-pixel.
---

# design-intent-to-frontend

This Skill turns visual design intent into frontend implementation constraints. It helps Codex preserve the right things, redesign the right things, and verify the result visually.

## Should Trigger

- The user provides a reference image, design mockup, Figma page, webpage screenshot, or visual demo and asks to implement a webpage.
- The user wants to reference a webpage layout or design language without fully copying it.
- The user asks to adjust an existing frontend page based on a design.
- The user asks to fix text position, line breaks, spacing, image ratio, alignment, or visual hierarchy.
- The user asks for desktop, tablet, or mobile design adaptation.
- The user asks to inspect visual differences between an implementation and a reference design.
- The user asks to implement or fix page-level visual interactions or motion.

## Should Not Trigger

- Pure copywriting or text polishing.
- Pure brand strategy discussion.
- Pure user research or market research.
- Backend API development.
- Database design.
- General code debugging unrelated to visual interface behavior.
- Deployment configuration or infrastructure tasks.
- Requests that only explain design theory and do not involve page implementation or visual QA.

## Required Flow

Follow this order:

1. Read the current repository `AGENTS.md` and relevant code.
2. Confirm the current task scope.
3. Read reference images, design files, demos, screenshots, and user notes.
4. Determine the intended use of each reference material.
5. Create a five-level design constraint matrix:
   - Strictly preserve
   - Preserve relationships
   - Reference visual language
   - Free to redesign
   - Explicitly prohibited
6. Analyze the page:
   - Grid
   - Anchors
   - Alignment relationships
   - Text position
   - Text block width
   - Semantic line breaks
   - Typography hierarchy
   - Image and text ratio
   - Spacing
   - Visual center of gravity
   - Element hierarchy
   - Interaction states
   - Responsive behavior
7. Define the minimum acceptable implementation scope.
8. Before coding, output a design implementation brief.
9. Preserve the existing technology stack and project structure.
10. Modify only files required for the current task.
11. Run applicable engineering checks.
12. Inspect the page at target viewports.
13. Classify visual differences as P0, P1, or P2.
14. Fix P0 first, then reasonably fix P1.
15. Output a visual QA report and remaining differences.

## Core Rules

- Do not start coding before reference intent analysis is complete.
- Do not start coding before the five-level constraint matrix exists.
- Do not assume the goal is pixel-perfect copying.
- Do not copy brand assets, copy, or distinctive identity elements merely because a reference was provided.
- Do not flatten an asymmetric composition into a common symmetric template without cause.
- Do not add glassmorphism, blue-purple gradients, neon effects, oversized border radius, or other trend effects unless they are part of the task intent.
- Do not break the original visual logic to make the page feel "more modern."
- Do not expand a local visual fix into a full-site redesign.
- Do not change pages outside the task scope.
- Do not hide unresolved visual differences.
- Do not describe every position only as absolute pixel coordinates.
- Prefer relationships to viewport, grid, container, and neighboring elements.
- Responsive layouts may change exact positions, but must preserve information priority and design intent.
- Do not erase all reasonable differences just to match the reference.

## Visual Difference Severity

### P0: Must Fix

- Heading is in the wrong visual region.
- A key element is missing.
- Image and text relationship is reversed.
- Primary proportions are clearly wrong.
- Important text wraps incorrectly.
- Page visual center of gravity changes.
- Content is obstructed, overflowing, or an interaction state is unreachable.

### P1: Should Fix

- Text block width is unreasonable.
- Alignment visibly drifts.
- Spacing rhythm feels unnatural.
- Image crop is weak.
- Typography hierarchy is diluted.
- Motion rhythm does not match the design character.

### P2: Acceptable Difference

- Minor line-break change caused by available fonts.
- Responsive rearrangement needed for the target viewport.
- Slight pixel difference caused by technical implementation.
- User-authorized personalization.
- Secondary details not clearly specified by the reference.

The goal is to fix P0, improve P1 where reasonable, and identify P2 without mechanically eliminating every P2 difference.

## References

- `references/reference-intent.md`
- `references/layout-analysis.md`
- `references/typography-layout.md`
- `references/responsive-design.md`
- `references/visual-qa.md`

## Templates

- `assets/design-brief-template.md`
- `assets/visual-qa-report-template.md`
- `assets/reference-usage-template.md`
