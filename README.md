# design-intent-skill-lab

`design-intent-skill-lab` 是一个独立实验仓库，用于开发和测试通用 Codex Skill：`design-intent-to-frontend`。

这个 Skill 面向 AI 辅助网页设计与前端实现。它不追求像素级复制参考图，而是帮助 Codex 判断参考素材的设计意图，将构图、文字位置、比例、留白、视觉层级、响应式和交互约束转化为可执行的前端实现规则。

## 核心理念

- 先判断用户为什么提供参考图，再决定如何实现。
- 区分必须保持的内容、需要保持的视觉关系、只参考设计语言的部分和可以重新设计的部分。
- 控制 Codex 的自由发挥范围，避免过度复制或无边界改造。
- 页面完成后进行视觉 QA，诚实报告 P0、P1、P2 差异。

## 目录结构

```text
.agents/skills/design-intent-to-frontend/
  SKILL.md
  references/
  assets/
  evals/
demo-site/
docs/
AGENTS.md
CHANGELOG.md
README.md
```

## 克隆仓库

macOS 或 Windows 均可优先使用 SSH：

```sh
git clone git@github.com:wxyi815-source/design-intent-skill-lab.git
cd design-intent-skill-lab
```

如果 SSH 不可用，使用 HTTPS：

```sh
git clone https://github.com/wxyi815-source/design-intent-skill-lab.git
cd design-intent-skill-lab
```

## 在 Codex 中显式调用

在需要设计意图分析、参考图实现、视觉纠偏或视觉 QA 的任务中，可以显式写：

```text
$design-intent-to-frontend
```

也可以提供参考图、设计稿、视觉 Demo 或网页截图，并说明希望 Codex 实现或修正页面。

## How to provide input

你可以使用自然语言，也可以直接使用专业设计术语。Skill 会帮助整理成任务范围、参考用途、保留约束、允许差异、响应式要求、视觉锚点和完成标准。

根据任务复杂度，可以选择三种输入方式：

- Quick：适合局部修改，或你已经提供了参考素材。
- Standard：适合大多数页面设计、实现、适配和视觉 QA。
- Detailed：适合首页首屏、品牌核心页面、复杂动效、多张参考图或高视觉还原要求。

信息足够时，Skill 不会重复提问；信息不完整但可以合理推导时，会声明保守假设后继续；只有缺少会实质改变设计方向、页面结构或实施安全性的关键决策时，才会暂停并最多提出 3 个高影响问题。

模板位于：

```text
.agents/skills/design-intent-to-frontend/assets/user-input-guide.md
```

## Workflow modes

`design-intent-to-frontend` 会根据任务复杂度自动选择协作模式：

- Direct Execution Mode：适合单个标题位置、文字宽度、按钮间距、低风险响应式等局部修正。输出更短，直接执行，但仍需要真实渲染检查。
- Collaborative Alignment Mode：适合首页首屏、品牌核心页面、多参考图、复杂动效或会改变视觉方向的任务。先输出 Visual Alignment Card 和关键视觉锚点，再分阶段实现。

示例：

```text
只把标题上移一点，不改其他内容。
```

通常进入 Direct Execution Mode。

```text
参考这三张图做首页首屏，分别参考构图、字体和动效。
```

通常进入 Collaborative Alignment Mode。

## How visual alignment works

```text
Reference analysis
-> Visual Alignment Card
-> Visual Alignment Contract
-> Staged implementation
-> Rendered inspection
-> Targeted corrections
-> User design review when needed
```

Skill 不能保证首轮结果完全一致，也不是像素级复制工具。它通过减少信息丢失、建立视觉锚点、检查真实页面和定向修正来提高完成度。用户的设计判断仍然是最终决策的一部分。

## 打开 demo-site

无需安装依赖。直接用浏览器打开：

```text
demo-site/index.html
```

也可以在编辑器或文件管理器中双击该文件。

## 运行测试

1. 阅读 `.agents/skills/design-intent-to-frontend/evals/test-cases.md`。
2. 选择单个测试能力。
3. 按 `docs/testing-workflow.md` 记录提示词、预期和结果。
4. 使用 `.agents/skills/design-intent-to-frontend/evals/evaluation-rubric.md` 打分。

## 复制稳定版本到其他仓库

当 Skill 稳定后，只复制以下目录到目标仓库：

```text
.agents/skills/design-intent-to-frontend/
```

不要复制本实验仓库的 `demo-site/`、测试记录或个人实验数据，除非目标仓库也需要这些测试夹具。

## Skill、AGENTS.md 和单次提示词的区别

- Skill：保存跨项目通用的设计意图分析和前端实现流程。
- `AGENTS.md`：保存本实验仓库的项目级工作规则和文件职责。
- 单次任务提示词：保存当前任务的具体目标、参考图、页面范围、品牌约束和验收标准。
