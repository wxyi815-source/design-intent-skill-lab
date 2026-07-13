# Testing Workflow

1. 选择单一能力。
2. 保存测试前状态。
3. 记录用户提示词。
4. 明确预期行为。
5. 显式调用 Skill。
6. 检查 Workflow Mode 和输出深度是否合适。
7. 检查 Visual Alignment Card 或 Quick 约束是否足够。
8. 检查 Visual Alignment Contract 是否可验证。
9. 检查代码修改。
10. 检查真实渲染证据和视觉 QA 报告。
11. 按 rubric 评分。
12. 将失败归类为通用 Skill、项目规则、单次输入或代码问题。

## 输入引导测试

测试输入准备度时，额外检查：

- 是否读取了当前消息、会话上下文、附件、仓库规则和已有代码中的信息。
- 是否避免重复询问已经可见的信息。
- 是否正确判断 Ready、Usable with assumptions 或 Blocked by key decisions。
- 是否只在关键决策缺失时暂停。
- 是否最多一次提出 3 个高影响问题。
- 是否用具体可选方向替代笼统问题。
- 是否把用户自然语言正确转译成设计约束。
- 是否在输入充分后停止提问并继续流程。
- 是否把非阻塞缺失项写成保守假设，而不是静默虚构。
- 是否仍然聚焦网页设计、前端实现、视觉修改或视觉 QA，而不是变成通用提示词教学。

## 设计对齐测试

测试参考图实现时，额外检查：

- 是否在编码前输出 canvas strategy、title placement、typography match level、color relationship、visual subject relationship 和 overlap policy。
- 是否区分截图外场、展示边距和真实网页画布。
- 是否把标题位置、字号、字重、行距、大小写和对齐方式转成可检查约束。
- 是否明确哪些文字叠压是允许的视觉层级，哪些是 P0 碰撞。
- 是否在实现后按视觉计划逐项 QA，而不是只说页面可以运行。
- 用户反馈后是否把问题映射回画布、标题、字体、色彩、素材关系、留白、视觉重心或响应式。
- 是否用局部修正处理偏差，而不是重写无关页面。
- 是否建立 Visual Alignment Contract，并把 P0/P1 差异追踪回合同项。
- 是否限制自动修正轮次，避免无证据微调。
- 是否在主观判断处请求用户设计判断，并给出具体选项。

## 记录建议

每次测试记录以下内容：

- 测试日期。
- Case ID。
- 输入提示词。
- 目标文件。
- 预期行为。
- 实际行为。
- P0/P1/P2 差异。
- Rubric 分数。
- Input readiness 状态。
- Pre-implementation visual plan 是否完整。
- Workflow Mode。
- Output depth。
- Contract item 数量。
- Rendered evidence 是否存在。
- Design alignment loop 中发现的 P0/P1/P2。
- 是否存在重复提问。
- 是否存在不必要的冗长表单。
- 是否需要修改 Skill。

## 归因原则

- 通用 Skill 问题：多个项目或多个案例都会复现的流程缺陷。
- 项目规则问题：只与当前仓库结构或项目约束有关。
- 单次输入问题：用户提示词缺少关键上下文。
- 代码问题：Skill 流程正确，但实现存在局部 bug。
