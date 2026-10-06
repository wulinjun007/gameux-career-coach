# 游戏 UX 求职陪跑营（GameUX Career Pacer）

> 用 59 条真实 JD、22 份标杆作品集和 50 个开源项目，把游戏UX求职做成一场可验证的工程。
> 不承诺 Offer，只交付证据。

**线上**：https://wulinjun007.github.io/gameux-career-coach/

## 这是什么

一个「游戏UX求职陪跑」服务的产品全套 V1.0：

| 交付物 | 位置 |
|--------|------|
| 产品 PRD V1.0 | [docs/PRD-游戏UX求职陪跑营-V1.0.md](docs/PRD-游戏UX求职陪跑营-V1.0.md) |
| Top50 GitHub 项目清单（能力引擎，Star 快照 2026-10-07） | [docs/Top50-GitHub项目清单-2026-10-07.md](docs/Top50-GitHub项目清单-2026-10-07.md) |
| 官网 5 页（首页 / 陪跑体系 / 能力引擎 / 方法论 / 诊断与报名） | 仓库根目录 `*.html` |

## 技术说明

- 纯静态、零外部依赖：`data/projects.js` 是 50 项目的单一数据源，`toolkit.html` 由 `assets/app.js` 数据驱动渲染（分类筛选 + 搜索）。
- `apply.html` 内置「30 秒自诊断」（差距五维计分），表单为演示态，不伪造提交成功。
- 方法论与数据来自两份本地调研：`game-ux-portfolio-research/`（59 JD · 22 标杆）与 `portfolio-benchmark-2026-09/`（100 分制 · 决策十环）。

## 更新项目库

编辑 `data/projects.js`（字段：`name / repo / stars / cat / invoke / phase / desc / use`），刷新即生效；同步更新 `docs/Top50-*.md` 与页脚快照日期。

## License

站点与文档内容 © 2026 游戏 UX 求职陪跑营。所列 50 个开源项目著作权归各自作者，License 以各仓库为准（商用前逐项核对，CC BY-NC 素材不可商用）。
