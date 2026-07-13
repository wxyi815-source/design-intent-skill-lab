# Visual QA

Visual tasks are not complete just because the page runs. Verify whether the implementation preserves the intended visual relationships.

## Process

1. Confirm target viewports.
2. Confirm fonts and images have loaded.
3. Check the page's overall visual center of gravity.
4. Check text position and line breaks.
5. Check image and text proportions.
6. Check whitespace.
7. Check alignment.
8. Check responsive behavior.
9. Check interaction states.
10. Classify differences as P0, P1, or P2.
11. Apply local fixes.
12. Verify again.
13. Report anything that cannot be confirmed or solved.

## Difference Classification

- P0: breaks the design intent or usability and must be fixed.
- P1: weakens the design and should be fixed when reasonable.
- P2: acceptable difference caused by responsive needs, font metrics, implementation constraints, or intentionally authorized variation.

## Reporting Standard

The report should include checked viewports, files changed, engineering checks, P0/P1/P2 differences, fixes applied, remaining issues, and verification limits.

## Explicit Prohibition

Do not treat "the page opens" or "the build passes" as sufficient evidence that a visual task is complete.
