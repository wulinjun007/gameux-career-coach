/* 游戏 UX 求职陪跑营 · 50 项目能力引擎（单一数据源）
   Star 快照：2026-10-07，GitHub API 实测。修改数据后 toolkit.html 会自动重渲染。 */
window.CATS = [
  { key: "A", name: "游戏UX与游戏设计知识", short: "游戏知识", color: "#6CA8FF" },
  { key: "B", name: "游戏UI资产与无障碍", short: "资产·无障碍", color: "#43E6B0" },
  { key: "C", name: "作品集建站与模板", short: "作品集建站", color: "#A78BFA" },
  { key: "D", name: "求职引擎与投递管理", short: "求职引擎", color: "#F5B84D" },
  { key: "E", name: "简历与面试准备", short: "简历·面试", color: "#FF7A9C" },
  { key: "F", name: "设计方法与参考系统", short: "设计方法", color: "#5FD4F0" },
  { key: "G", name: "AI 生产技能管线", short: "AI 管线", color: "#C9D86A" }
];

window.PROJECTS = [
  // A 游戏 UX 与游戏设计知识
  { id: 1, cat: "A", name: "Claude-Code-Game-Studios", repo: "Donchitos/Claude-Code-Game-Studios", stars: 25820, invoke: "技能包", phase: ["P1", "P4"], desc: "把 Claude Code 变成完整游戏工作室：49 个 AI agent + 72 个工作流技能。", use: "跑通「设计文档→可玩原型」全管线，补策划语言与协作话术。" },
  { id: 2, cat: "A", name: "magictools", repo: "ellisonleao/magictools", stars: 17430, invoke: "清单", phase: ["持续"], desc: "游戏开发资源大全：引擎、美术、音频、学习路径。", use: "知识地图——查任何游戏工具，先从这里开始。" },
  { id: 3, cat: "A", name: "awesome-game-design", repo: "Roobyx/awesome-game-design", stars: 663, invoke: "清单", phase: ["持续"], desc: "游戏设计学习材料、示例与工具的策展清单。", use: "系统补游戏设计理论，把面试谈资结构化。" },
  { id: 4, cat: "A", name: "awesome-learn-gamedev", repo: "dawdle-deer/awesome-learn-gamedev", stars: 3562, invoke: "清单", phase: ["持续"], desc: "游戏开发学习资源的社区策展。", use: "制定 8 周补课阅读计划的书架。" },
  { id: 5, cat: "A", name: "2DGD_F0TH", repo: "2DGD-F0TH/2DGD_F0TH", stars: 462, invoke: "开源书", phase: ["持续"], desc: "CC 授权的社区游戏设计与开发知识全书。", use: "免费教材，按章节精读补深度；注意 NC 授权。" },
  { id: 6, cat: "A", name: "ore-ui", repo: "Mojang/ore-ui", stars: 608, invoke: "源码研读", phase: ["P1"], desc: "Minecraft 官方基于 Web 技术的游戏 UI 构件库。", use: "研读 3A 厂商如何做游戏 UI 架构：组件化与状态。" },
  { id: 7, cat: "A", name: "Ultralight", repo: "ultralight-ux/Ultralight", stars: 5018, invoke: "源码/文档", phase: ["持续"], desc: "面向游戏与应用的高性能 HTML UI 渲染器。", use: "理解 UI 层在引擎侧怎么落地——亚太 JD 的引擎硬门槛对策。" },

  // B 游戏 UI 资产与无障碍
  { id: 8, cat: "B", name: "unity-ui-toolkit-design-system", repo: "sinanata/unity-ui-toolkit-design-system", stars: 551, invoke: "模板复用", phase: ["P1"], desc: "Unity 6 UI Toolkit 开箱即用设计系统（tokens/UXML/USS）。", use: "「游戏里的设计系统」现成对标语言——JD 硬通货 ≥50% 岗位点名。" },
  { id: 9, cat: "B", name: "game-ui-design-workflow", repo: "guiguiyan930-source/game-ui-design-workflow", stars: 212, invoke: "技能包", phase: ["P1"], desc: "中文游戏 UI Cursor 技能工作流：原型生成、风格切换、组件拆解。", use: "中文一线实践，作品集原型提速与多页一致性。" },
  { id: 10, cat: "B", name: "Chroma", repo: "ubisoft/Chroma", stars: 956, invoke: "工具接入", phase: ["P1", "P5"], desc: "Ubisoft 官方色盲检测一站式方案。", use: "无障碍证据链：案例加「色盲模拟验证」环节，面试差异化。" },
  { id: 11, cat: "B", name: "accessibility_interview_questions", repo: "scottaohara/accessibility_interview_questions", stars: 396, invoke: "题库", phase: ["P5"], desc: "无障碍面试题库。", use: "Riot/Ubisoft 已设无障碍专职编制——这是你的加分题库。" },
  { id: 12, cat: "B", name: "Game-Assets-And-Resources", repo: "HotpotDesign/Game-Assets-And-Resources", stars: 708, invoke: "清单", phase: ["P1"], desc: "2D/3D/移动游戏资产与资源索引。", use: "案例 demo 的素材来源，商用前逐项核对授权。" },
  { id: 13, cat: "B", name: "game-icons/icons", repo: "game-icons/icons", stars: 1355, invoke: "素材库", phase: ["P1"], desc: "game-icons.net 全量 4000+ SVG 游戏图标。", use: "技能/装备/系统图标直接进原型。" },
  { id: 14, cat: "B", name: "novel-to-game", repo: "zenstory-ai/novel-to-game", stars: 832, invoke: "技能包", phase: ["P1"], desc: "小说改编游戏 agent skills，产出带引用出处的设计文档。", use: "叙事设计方向的案例快速生产，自带引用纪律。" },

  // C 作品集建站与模板
  { id: 15, cat: "C", name: "designer-portfolios", repo: "mejed-alkoutaini/designer-portfolios", stars: 57, invoke: "清单", phase: ["P0", "P1"], desc: "优秀设计师作品集网站索引：UI 模式、UX 案例、创意结构。", use: "开营第一周扫一遍，抽当期作品集叙事模式。" },
  { id: 16, cat: "C", name: "simplefolio", repo: "cobiwave/simplefolio", stars: 14226, invoke: "模板改造", phase: ["P1"], desc: "极简开发者作品集模板。", use: "底子干净的骨架，改造为 case-study 架构。" },
  { id: 17, cat: "C", name: "vcard-personal-portfolio", repo: "codewithsadee/vcard-personal-portfolio", stars: 8112, invoke: "模板改造", phase: ["P1"], desc: "全设备响应式个人 vCard 作品集。", use: "移动端兜底检查的参照系。" },
  { id: 18, cat: "C", name: "React-Portfolio", repo: "rbhatia46/React-Portfolio", stars: 628, invoke: "模板改造", phase: ["P1"], desc: "React SPA 作品集模板（开发者/设计师）。", use: "需要内嵌交互 demo 容器时用。" },
  { id: 19, cat: "C", name: "developer-portfolio-v2", repo: "alexdeploy/developer-portfolio-v2", stars: 270, invoke: "模板改造", phase: ["P1"], desc: "代码编辑器风格作品集。", use: "投游戏工具/引擎向岗位的差异化皮肤。" },
  { id: 20, cat: "C", name: "public-portfolio-site", repo: "ricocc/public-portfolio-site", stars: 298, invoke: "模板改造", phase: ["P1"], desc: "设计师作品集 + 博客模板。", use: "案例叙事 + 复盘写作的双栏结构参照。" },

  // D 求职引擎与投递管理
  { id: 21, cat: "D", name: "career-ops", repo: "career-ops-hq/career-ops", stars: 73620, invoke: "CLI/agent", phase: ["P3"], desc: "开源 AI 求职 agent：扫岗位板，按你的简历对每条岗位 1-5 打分。", use: "P3 主引擎：每日岗位漏斗，只投 4 分以上的。" },
  { id: 22, cat: "D", name: "ai-job-search", repo: "MadsLorentzen/ai-job-search", stars: 45108, invoke: "agent 框架", phase: ["P3", "P5"], desc: "跑在本机的 Claude Code 求职框架：评估 JD→产出定制材料。", use: "JD 解码到材料定制的流水线。" },
  { id: 23, cat: "D", name: "job-ops", repo: "DaKheera47/job-ops", stars: 3996, invoke: "自托管服务", phase: ["P3"], desc: "DevOps 原则做求职：自托管流水线追踪、分析、辅助。", use: "投递漏斗看板，把求职当发布管理。" },
  { id: 24, cat: "D", name: "jobsync", repo: "Gsync/jobsync", stars: 1366, invoke: "应用", phase: ["P3"], desc: "投递追踪 + AI 求职助手。", use: "轻量追踪，与 job-ops 二选一。" },
  { id: 25, cat: "D", name: "offerPilot", repo: "offercontext/offerPilot", stars: 737, invoke: "本地应用", phase: ["P3", "P6"], desc: "中文本地优先 AI 求职工作台：简历、刷题、模拟面试、复盘、Offer 对比谈薪。", use: "中文求职全流程一站式；谈薪模块在开源界稀缺。" },
  { id: 26, cat: "D", name: "Summer2027-Internships", repo: "SimplifyJobs/Summer2027-Internships", stars: 47868, invoke: "数据源", phase: ["P3"], desc: "2027 夏季实习岗列表（SE/DS/AI/PM/硬件）。", use: "校招/实习情报源与投递节奏对标。" },

  // E 简历与面试准备
  { id: 27, cat: "E", name: "Resume-Matcher", repo: "srbhr/Resume-Matcher", stars: 28589, invoke: "本地 AI 工具", phase: ["P2", "P3"], desc: "简历-JD 匹配优化，本地 100+ LLM 支持。", use: "每投一岗前跑一遍匹配分，改完再投。" },
  { id: 28, cat: "E", name: "reactive-resume", repo: "reactive-resume/reactive-resume", stars: 43907, invoke: "应用", phase: ["P2"], desc: "开源简历构建器，隐私优先、可移植。", use: "产出干净的 PDF 主简历。" },
  { id: 29, cat: "E", name: "Awesome-CV", repo: "posquit0/Awesome-CV", stars: 28658, invoke: "模板", phase: ["P2"], desc: "LaTeX CV 模板。", use: "排版标杆，外企/大厂通用。" },
  { id: 30, cat: "E", name: "rendercv", repo: "rendercv/rendercv", stars: 17702, invoke: "CLI", phase: ["P2"], desc: "YAML→PDF 简历生成器（工程师/学术）。", use: "简历进 git：改动可 diff、可回滚、可追溯。" },
  { id: 31, cat: "E", name: "offer-toolkit-skill", repo: "yanliudesign/offer-toolkit-skill", stars: 518, invoke: "技能包", phase: ["P2", "P5"], desc: "求职 skill 全家桶：JD 解码 + 11 模板简历 + 行为面试。", use: "设计师做的求职技能包，语境贴设计岗。" },
  { id: 32, cat: "E", name: "ux-design-interview-questions", repo: "Devinterview-io/ux-design-interview-questions", stars: 18, invoke: "题库", phase: ["P4", "P5"], desc: "UX 设计面试题与答案（2026 版）。", use: "交互岗笔试题感训练；规模小但对口度满分。" },
  { id: 33, cat: "E", name: "awesome-behavioral-interviews", repo: "ashishps1/awesome-behavioral-interviews", stars: 8909, invoke: "题库", phase: ["P5"], desc: "行为面试技巧与资源（STAR 法）。", use: "行为面答案库 + mock 提纲。" },
  { id: 34, cat: "E", name: "fe-interview", repo: "haizlin/fe-interview", stars: 26265, invoke: "题库", phase: ["P4"], desc: "前端面试每日 3+1（中文，6000+ 题）。", use: "交互岗补前端常识，过「懂实现」关。" },
  { id: 35, cat: "E", name: "tech-interview-handbook", repo: "yangshun/tech-interview-handbook", stars: 143129, invoke: "手册", phase: ["P4", "P5"], desc: "技术面试准备手册：大厂流程通识与白板方法论。", use: "面试流程与白板方法论的骨架。" },

  // F 设计方法与参考系统
  { id: 36, cat: "F", name: "awesome-design-md", repo: "VoltAgent/awesome-design-md", stars: 119785, invoke: "合集", phase: ["P1", "持续"], desc: "知名品牌 DESIGN.md 合集：丢给 AI 即可按该设计系统生成界面。", use: "逆向大家课：学大厂如何「表述」设计系统。" },
  { id: 37, cat: "F", name: "awesome-design", repo: "gztchan/awesome-design", stars: 17602, invoke: "清单", phase: ["持续"], desc: "全球设计资源策展。", use: "通用设计知识地图。" },
  { id: 38, cat: "F", name: "design-resources-for-developers", repo: "bradtraversy/design-resources-for-developers", stars: 67090, invoke: "清单", phase: ["持续"], desc: "设计与 UI 资源大全：图库、字体、CSS、工具。", use: "找字体/图库/配色一站化。" },
  { id: 39, cat: "F", name: "awesome-creative-coding", repo: "terkelg/awesome-creative-coding", stars: 15401, invoke: "清单", phase: ["持续"], desc: "创意编码资源：生成艺术、数据可视化、交互。", use: "「游戏感」灵感与着色器启蒙。" },
  { id: 40, cat: "F", name: "lucide", repo: "lucide-icons/lucide", stars: 24878, invoke: "素材库", phase: ["P1"], desc: "社区图标系统（Feather 分叉）。", use: "界面 demo 的图标基建。" },
  { id: 41, cat: "F", name: "onlook", repo: "onlook-dev/onlook", stars: 26868, invoke: "桌面应用", phase: ["P1"], desc: "开源 AI 优先设计工具，可视化编辑真实代码。", use: "案例原型的可视化迭代器。" },

  // G AI 生产技能管线
  { id: 42, cat: "G", name: "Agent-Reach", repo: "Panniantong/Agent-Reach", stars: 92531, invoke: "CLI", phase: ["P5"], desc: "给 AI 全网之眼：Twitter/Reddit/YouTube/GitHub/B站 读取与搜索。", use: "面试前的公司情报与员工真实声音。" },
  { id: 43, cat: "G", name: "last30days-skill", repo: "mvanhorn/last30days-skill", stars: 63620, invoke: "技能", phase: ["P5"], desc: "跨平台 30 天舆情研究技能（Reddit/X/YouTube/HN）。", use: "面试前回答「这家公司最近怎么样」有据可查。中文版见 last30days-skill-cn。" },
  { id: 44, cat: "G", name: "taste-skill", repo: "Leonxlnx/taste-skill", stars: 93071, invoke: "技能", phase: ["P1", "P2"], desc: "给 AI 好品味：阻止生成平庸的 AI 味内容。", use: "文案与界面的反 AI 味门禁。" },
  { id: 45, cat: "G", name: "hallmark", repo: "Nutlope/hallmark", stars: 29693, invoke: "技能", phase: ["P1"], desc: "反 AI-slop 设计技能：audit/redesign/study，21 主题 + 57 门禁。", use: "作品集站的 UI 质量门禁。" },
  { id: 46, cat: "G", name: "ui-skills", repo: "ibelick/ui-skills", stars: 9430, invoke: "技能", phase: ["P1"], desc: "设计工程师技能组：baseline-ui、improve-ui、a11y 三修等。", use: "作品集站的重型只读审查 + 实施计划。" },
  { id: 47, cat: "G", name: "archify", repo: "tt-a1i/archify", stars: 78584, invoke: "技能", phase: ["P1"], desc: "想法/计划/代码 → 精美交互式架构图，五类图 + 原子校验。", use: "案例方法论图组的自动生产。" },
  { id: 48, cat: "G", name: "screenshot-to-code", repo: "abi/screenshot-to-code", stars: 80033, invoke: "应用", phase: ["P1", "P4"], desc: "截图转 HTML/Tailwind/React/Vue 等六栈代码。", use: "竞品界面复刻，做改造前后对比案例。" },
  { id: 49, cat: "G", name: "claude-video", repo: "bradautomates/claude-video", stars: 18137, invoke: "技能", phase: ["P1", "P5"], desc: "/watch 视频理解：下载→抽帧→转录→交给 AI 分析。", use: "局内录像→交互证据提取（帧级时间戳）。" },
  { id: 50, cat: "G", name: "autoclip", repo: "zhouxiaoka/autoclip", stars: 9188, invoke: "桌面应用", phase: ["P1"], desc: "长视频一键剪成高光短视频 + 字幕 + 封面（中文，桌面端）。", use: "作品集 demo reel 的生产管线。" }
];
