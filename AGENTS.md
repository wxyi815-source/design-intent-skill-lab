# design-intent-skill-lab Agent Rules

## 仓库用途

- 开发和评估 `design-intent-to-frontend` Skill。
- 保存通用 Skill 规则、参考方法、模板和评估用例。
- 使用 `demo-site/` 进行隔离测试。
- 不用于保存任何公司项目、客户资料、保密设计稿或个人作品集专属规则。

## 文件职责

- `.agents/skills/`：正式仓库级 Skill。
- `demo-site/`：可被反复修改的无依赖测试页面。
- `docs/`：开发记录、测试方法和决策。
- `CHANGELOG.md`：Skill 版本变化。

## 工作规则

- 修改 Skill 前先阅读当前版本和 `docs/decision-log.md`。
- Skill 必须保持通用，不混入作品集专属规则。
- 一次只测试一个明确能力。
- 每次测试记录输入、预期、实际结果和失败表现。
- 不因为单个项目问题无限增加规则。
- 修改 `demo-site/` 时不得顺带重写 Skill，除非测试明确证明 Skill 规则存在问题。
- 修改 Skill 后应同步更新 `CHANGELOG.md`。
- 不安装不必要的依赖。
- 优先使用无依赖的 HTML、CSS 和 JavaScript 测试环境。
- 不提交敏感文件、访问令牌、Cookie、SSH 私钥、环境变量或真实保密资料。

## 完成标准

每次任务完成后必须报告：

- 修改了哪些文件。
- 为什么修改。
- 如何验证。
- 存在哪些未解决问题。
- 修改属于通用 Skill、测试环境还是项目级规则。
