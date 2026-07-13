---
name: design-intent-to-frontend
description: Use when a user provides a reference image, design mockup, Figma page, visual demo, webpage screenshot, or existing frontend page and asks to implement, adapt, compare, or fix frontend visual layout, typography placement, spacing, alignment, responsive behavior, hierarchy, or interaction states. Also use for upcoming webpage design or visual QA tasks when user input is incomplete and needs structure around task scope, reference usage intent, preservation constraints, allowed differences, responsive requirements, or acceptance criteria; do not use for general prompt-writing advice without a webpage implementation, modification, or visual QA task.
---

# design-intent-to-frontend

Turn reference-driven design intent into frontend implementation constraints, rendered evidence, and targeted visual corrections. This Skill is a design collaborator for users who may have design vocabulary; use professional language when helpful, but keep outputs as short as the task allows.

## Should Trigger

- A reference image, design mockup, Figma page, webpage screenshot, or visual demo is used to implement, adapt, or QA a webpage.
- The user wants to borrow layout, visual language, typography, spacing, image relationships, responsive behavior, or interaction states without pixel-copying.
- The user asks to fix visual issues such as title position, line breaks, text width, canvas scale, image ratio, alignment, overlap, hierarchy, or visual center.

## Should Not Trigger

- Pure copywriting, brand strategy, user research, backend/API/database work, deployment infrastructure, or non-visual code debugging.
- General advice on writing prompts unless it is tied to an upcoming webpage implementation, modification, or visual QA task.
- Pure design theory explanation with no page implementation or visual comparison task.

## Workflow Mode Selection

After Input Readiness Check, choose the lightest mode that can safely complete the task.

**Direct Execution Mode**: use for local, low-risk fixes such as title position, text width, line breaks, simple alignment, low-risk responsive fixes, or when the user asks to proceed and the scope is clear. Output Quick depth: summarize scope, 3-6 constraints, assumptions, target viewports, then execute and give concise QA.

**Collaborative Alignment Mode**: use for new pages, homepage hero sections, brand-critical pages, complex motion, multiple references, conflicting references, or when visual direction changes many implementation choices. Output a Visual Alignment Card and identify the key anchors. Request confirmation only when unresolved high-impact design decisions remain. If those decisions are already explicit in the user's input, continue without adding another approval checkpoint, then implement through staged rendering.

Do not enter Collaborative Alignment Mode merely because a reference exists. Do not make Direct Execution skip visual reasoning.

## Adaptive Output Depth

- **Quick**: local fixes. Use 1-3 contract items, short assumptions, rendered check, concise P0/P1/P2.
- **Standard**: ordinary page work. Use `assets/visual-alignment-card-template.md` and a compact contract.
- **Detailed**: core pages, multi-reference, complex motion. Use design brief, Visual Alignment Contract, staged rendering plan, and full QA report.

Use the smallest output depth that preserves design safety.

## Condensed Required Flow

1. Read repository instructions if present, then inspect the relevant implementation.
2. Collect known input from the conversation, attachments, reference materials, code, design system, assets, and project constraints.
3. Run Input Readiness Check and classify as Ready, Usable with assumptions, or Blocked by key decisions.
4. Select Workflow Mode and output depth.
5. Determine reference roles and create the five-level constraint matrix: Strictly preserve, Preserve relationships, Reference visual language, Free to redesign, Explicitly prohibited.
6. Identify 3-8 Visual Anchors for non-trivial visual work.
7. Create a Visual Alignment Contract for the constraints that must be traceable.
8. Implement the smallest testable version; use staged rendering for complex work.
9. Inspect real rendered output at target viewports when tools are available.
10. Run the Screenshot Delta Loop, classify P0/P1/P2, apply targeted corrections, and stop automatic correction after two rounds unless new evidence appears.
11. Ask for Human Design Review when remaining choices are subjective.
12. Report files changed, evidence, contract results, remaining differences, and verification limits.

## Input Readiness

- **Ready**: enough information exists. Do not ask more; summarize and continue.
- **Usable with assumptions**: missing information will not materially change the result. State conservative assumptions and continue.
- **Blocked by key decisions**: missing information changes page structure, visual direction, implementation safety, reference roles, content structure, required assets, or conflicts with project rules. Pause coding and ask at most 3 concrete, high-impact questions.

Do not ask for information already available from attachments, code, repository rules, or the current conversation. For detailed input categories and templates, use `assets/user-input-guide.md`.

## Visual Alignment Contract

For visual-reference tasks, convert planning into verifiable contract items. Each high-priority item needs a dimension, reference intent, priority, implementation rule, allowed variation, verification method, evidence, and result. Use `references/visual-alignment-contract.md` and `assets/visual-alignment-contract-template.md`.

Track:

```text
design constraint -> implementation strategy -> actual change -> verification evidence -> final status
```

Ordinary pages usually keep 4-8 key items; local fixes can use 1-3. Do not turn the contract into a pixel table or a dump of CSS properties.

## Rendered Alignment Loop

When visual tools are available:

1. Open the real page.
2. Wait for fonts, images, and layout resources.
3. Inspect or screenshot target viewports.
4. Compare against the Visual Alignment Contract.
5. Fix the largest P0, then the most significant P1.
6. Render again and update contract status.

If real rendered inspection is unavailable, explicitly state `Visual verification incomplete`. Do not claim visual accuracy, design alignment, or completed visual QA from code inspection alone. Do not install new dependencies just for QA; reuse project or environment capabilities when present.

## Human Design Review

Codex should automatically fix clear position errors, unplanned overlap, horizontal scroll, wrong wraps, missing key elements, obvious proportion errors, and contract violations.

Ask the user when multiple solutions satisfy the contract but differ in mood, crop, tension, personalization, motion rhythm, or when two automatic correction rounds still leave subjective uncertainty. Present concrete options and design consequences, not a generic "what do you think?"

## Hard Guardrails

- Do not reproduce third-party brand assets, copy, distinctive identity elements, or unique artwork unless the user owns them, has permission to use them, or explicitly requests implementation of their own supplied design.
- Do not assume the whole reference is equally important.
- Do not preserve screenshot borders, black bars, or mockup padding unless the user wants that canvas relationship.
- Do not use trend effects or redesign beyond scope unless the reference or user requires them.
- Do not allow unintended text overlap; planned overlap must preserve readability and be verified.
- Do not expand a local visual fix into a full-site redesign.
- Do not hide unresolved visual differences or verification limits.
- Responsive layouts may reposition elements but must preserve information priority and design intent.

## References

- `references/reference-intent.md`: reference roles and intent dimensions.
- `references/layout-analysis.md`: canvas, grids, visual anchors, spacing, and subject relationships.
- `references/typography-layout.md`: title region, font matching, line breaks, line height, and collisions.
- `references/responsive-design.md`: responsive relationship preservation.
- `references/visual-alignment-contract.md`: contract fields, traceability, staged rendering, and correction loop.
- `references/visual-qa.md`: P0/P1/P2, rendered verification integrity, and QA reporting.

## Templates

- `assets/user-input-guide.md`
- `assets/design-brief-template.md`
- `assets/visual-alignment-card-template.md`
- `assets/visual-alignment-contract-template.md`
- `assets/visual-qa-report-template.md`
- `assets/reference-usage-template.md`
