# Responsive Design

Responsive adaptation preserves design intent, not desktop coordinates.

## Preserve Across Viewports

- Information priority.
- Main visual relationship between text, media, and action.
- Typography hierarchy.
- Visual center of gravity appropriate to the device.
- Critical interaction states and reachable controls.

## What Can Change

- Exact position can change when viewport width or height makes the desktop relationship impractical.
- Multi-column layouts can become stacked layouts.
- Decorative or secondary elements can be reduced, moved, hidden, or replaced if they are not essential.
- Image crop can change if the subject and intended mood remain intact.

## Adaptation Choices

- Reflow when reading order or available width requires a new structure.
- Scale when the same composition remains legible and balanced.
- Crop when media must preserve impact inside a different aspect ratio.
- Hide secondary elements when they compete with primary content or cause overflow.
- Avoid simply shrinking the desktop page until it fits.

## Default Viewports

Use user-specified viewports first. If none are specified, reasonable defaults include:

- 1920 x 1080
- 1440 x 900
- 1024 x 768
- 390 x 844

## Verification

Check that there is no horizontal scrolling, unreadable text, broken line rhythm, clipped interactive state, or unintentional inversion of visual hierarchy.
