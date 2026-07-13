# Visual QA

Visual tasks are not complete just because the page runs. Verify whether the implementation preserves the intended visual relationships.

## Verification Integrity

- Do not claim visual QA is complete from reading code alone.
- When browser preview or screenshot tools are available, inspect the real rendered page.
- Confirm fonts, images, and layout-affecting resources are loaded before judging visuals.
- Check user-specified target viewports first; otherwise use project defaults.
- If real rendering cannot be inspected, write `Visual verification incomplete`.
- Without rendered inspection, do not claim visual consistency, layout accuracy, completed design alignment, or pixel-level matching.
- Do not install unrelated dependencies for QA; reuse existing project or environment capabilities.

## Process

1. Confirm target viewports.
2. Confirm fonts and images have loaded.
3. Check canvas strategy: full-bleed, framed, inset, or component-local.
4. Check the page's overall visual center of gravity.
5. Check text position, alignment, scale, weight, line height, and line breaks.
6. Check image and text proportions.
7. Check whitespace.
8. Check alignment.
9. Check overlap policy: intentional layering versus accidental collision.
10. Check responsive behavior.
11. Check interaction states.
12. Classify differences as P0, P1, or P2.
13. Apply local fixes.
14. Verify again.
15. Report anything that cannot be confirmed or solved.

## Difference Classification

- P0: breaks the design intent or usability and must be fixed.
- P1: weakens the design and should be fixed when reasonable.
- P2: acceptable difference caused by responsive needs, font metrics, implementation constraints, or intentionally authorized variation.

## Alignment Checks

Compare the implementation against the visual plan:

- Is the canvas scale correct, or did the implementation preserve presentation margins from the screenshot?
- Is the title in the planned visual region and alignment mode?
- Does the title occupy a similar visual mass, with comparable line count, line height, weight, and case?
- Are supporting labels, body text, and controls outside forbidden overlap zones?
- Does the visual center land where the plan predicted?
- Are differences caused by missing assets, technical constraints, or implementation drift?
- Can every failed P0/P1 be traced to a Visual Alignment Contract item?
- Has the largest visual delta been corrected and then re-rendered?

## Screenshot Delta Loop Limits

- Default to at most two automatic visual correction rounds.
- Round 1 fixes P0 issues first.
- Round 2 fixes the most significant P1 issue.
- Do not continue micro-adjusting without new evidence.
- If subjective uncertainty remains after two rounds, request Human Design Review with concrete options.

## Human Design Review

Request user judgment for:

- Two compositions that both satisfy the contract but differ in mood.
- Font emotion or visual tension choices.
- Multiple reasonable image crops.
- Whether personalization is sufficient.
- Whether the design should move farther away from the reference.
- Motion rhythm preferences.
- P2 differences the user may want to keep correcting.

## Reporting Standard

The report should include checked viewports, files changed, engineering checks, P0/P1/P2 differences, fixes applied, remaining issues, and verification limits.

## Explicit Prohibition

Do not treat "the page opens" or "the build passes" as sufficient evidence that a visual task is complete.
