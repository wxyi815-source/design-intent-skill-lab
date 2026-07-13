---
name: design-intent-to-frontend
description: Use when a user provides a reference image, design mockup, Figma page, visual demo, webpage screenshot, or existing frontend page and asks to implement, adapt, compare, or fix frontend visual layout, typography placement, spacing, alignment, responsive behavior, hierarchy, or interaction states. Also use for upcoming webpage design or visual QA tasks when user input is incomplete and needs structure around task scope, reference usage intent, preservation constraints, allowed differences, responsive requirements, or acceptance criteria; do not use for general prompt-writing advice without a webpage implementation, modification, or visual QA task.
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

1. Read the current repository `AGENTS.md` and relevant implementation.
2. Collect available input from the current message, prior conversation, attachments, reference materials, repository instructions, existing page code, design system, assets, and project constraints.
3. Run the Input Readiness Check.
4. Classify the input as Ready, Usable with assumptions, or Blocked by key decisions.
5. Provide only the minimum necessary input guidance.
6. Confirm or infer the smallest independently reviewable task scope. Do not treat confirmation as a required question when the scope is already clear.
7. Determine the intended use of each reference material.
8. Create a five-level design constraint matrix:
   - Strictly preserve
   - Preserve relationships
   - Reference visual language
   - Free to redesign
   - Explicitly prohibited
9. Analyze the page:
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
10. Before coding, output a design implementation brief.
11. Preserve the existing technology stack and project structure.
12. Modify only files required for the current task.
13. Run applicable engineering checks.
14. Inspect the page at target viewports.
15. Classify visual differences as P0, P1, or P2.
16. Fix P0 first, then reasonably fix P1.
17. Output a visual QA report and remaining differences.

## Input Readiness Check

Before reference intent analysis or coding, collect what is already knowable. Do not ask again for information that can be obtained from the repository, attachments, reference materials, or current conversation.

Check these input categories:

- Task scope: design from scratch, implement, modify, or inspect; target page, component, or region; in-scope and out-of-scope work.
- Current state: existing code, design files, main visual problem, whether this is a new page or existing project.
- Reference materials: the role of each reference, what to learn from it, what not to copy, and desired differentiation.
- Design constraint matrix: preserve strictly, preserve relationships, reference visual language, free to redesign, explicitly prohibited.
- Content and assets: fixed copy, supplied images, placeholder permission, logo, icons, fonts, content order, and information hierarchy.
- Interaction states: default, hover, click or tap, scroll, loading, expanded or collapsed, enter and exit state, animation trigger, replay behavior, reduced-motion behavior.
- Responsive targets: priority devices, target viewports, desktop/tablet/mobile scope, and relationships that must survive across devices.
- Technical constraints: stack, dependencies, reusable components, allowed refactors, protected files, and engineering checks.
- Acceptance criteria: what visual, responsive, interaction, and engineering evidence proves the work is acceptable.

Classify the input:

- Ready: information is sufficient to start. Summarize known input, create the constraint matrix and design brief, then continue without asking.
- Usable with assumptions: missing information does not materially change the result. List conservative assumptions in the design brief and continue without turning the assumptions into an approval checkpoint.
- Blocked by key decisions: missing information would materially change design direction, page structure, implementation safety, or reference interpretation. Pause coding, ask no more than three concrete high-impact questions, and provide a short fillable reply template.

Usually blocking information includes an unclear page or region, unclear reference purpose, conflicting references, unclear redesign versus repair intent, unclear permission to change content structure, missing core assets needed for implementation, strict recreation requests without enough source material, or conflict with project rules.

When blocked, use this shape:

```md
## Input readiness

Status: Blocked by key decisions

### I already know

- ...

### Missing but non-blocking

- ...

### Assumptions I can use

- ...

### Key decisions needed

1. ...
2. ...
3. ...

### Suggested reply

请直接复制并补充：

- 本次任务：
- 修改范围：
- 参考图 1 主要参考：
- 必须保持：
- 可以改变：
- 不要复制：
- 希望形成的差异：
- 禁止出现：
- 优先设备或尺寸：
- 完成标准：
```

## Core Rules

- Do not start coding before reference intent analysis is complete.
- Do not start coding before the five-level constraint matrix exists.
- Do not require the user to understand professional design terminology.
- Translate informal user language into structured design constraints.
- Do not force every user to complete a full intake template.
- Use the smallest input template appropriate to the task.
- Ask no more than three blocking questions at one time.
- Prefer concrete options over broad questions.
- When information is incomplete but usable, proceed with clearly stated conservative assumptions.
- Do not silently invent reference intent.
- Do not treat every part of a reference image as equally important.
- Do not begin coding when unresolved decisions would materially change page structure or design direction.
- Do not turn input guidance into a repeated approval checkpoint.
- Once the user has supplied enough information, stop asking questions and continue the workflow.
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
- `assets/user-input-guide.md`
