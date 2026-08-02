/**
 * 关于页文案（集中维护，改字只动本文件即可）
 */
export const aboutHero = {
  titleLines: ["我是卢卢", "一位不断成长的设计师"] as const,
  tagline:
    "我希望始终不为自己设限，在设计、技术与艺术的交汇处持续探索，并用设计创造真正有价值、有温度且能够打动人的体验",
};

/**
 * About me 四段经历（stage）。
 * 每段：
 *   highlight — 加重的开篇宣告（深色、半粗）
 *   body      — 跟随说明（浅灰、正文）
 *   photo     — 拍立得照片
 * 之后将通过滚动驱动 stage 1 → 4 的交叉淡入淡出。
 */
export const aboutStages = [
  {
    id: 1,
    highlight: "希望成为一名兼具逻辑思维与创造力的体验设计师",
    body: "在我看来，优秀的设计既需要理性与系统性的分析，也需要对人、情感与美的敏锐感知。我不希望将自己局限于单一的设计角色之中，而是希望持续拓展能力边界。对我来说，设计不仅是解决问题的方法，也是一种不断探索世界、连接技术与人的方式。",
  },
  {
    id: 2,
    highlight: `我的设计之路，始于对"美"的热爱`,
    body: `从小学六年级开始，在父亲"世界上的许多事情都离不开审美"的影响下，我开始学习绘画，并将这份兴趣坚持到了今天。小时候，我经常外出写生，在自然中观察光影、色彩与结构，也逐渐培养出对视觉细节和审美表达的敏感度。它让我更好地探索世界，也成为我后来走上设计道路的重要基础。`,
  },
  {
    id: 3,
    highlight: "进入大学后，我开始接触更广阔的专业视界",
    body: "在大学里，我不仅系统掌握了色彩、构图等理论与方法，也逐渐接触到互动装置、生成艺术以及虚拟现实艺术。这些经历让我意识到，设计是一种融合技术、数学逻辑与美学感知的创造方式。",
    body2: "与此同时，在尝试与探索的过程中，我逐渐发现自己在交互与体验设计领域获得了最强烈的成就感。我享受与人交流、理解真实需求，并通过逻辑化的梳理与创造性的表达，将复杂的问题转化为清晰、自然且富有美感的体验方案。",
  },
  {
    id: 4,
    highlight: "不局限自己，不止于设计",
    body: "在AI快速发展的今天，我仍然希望不断夯实和提升设计本质能力，同时积极拥抱新的工具和工作方式，持续学习、创造与表达。",
  },
] as const;

/* 旧的散落段落，保留作为后续 stage 2 ~ 4 的素材来源 */
export const aboutStoryParagraphs = [
  "我希望成为一名兼具逻辑思维与创造力的体验设计师。在我看来，优秀的设计既需要理性与系统性的分析，也需要对人、情感与美的敏锐感知。我不希望将自己局限于单一的设计角色之中，而是希望持续拓展能力边界。对我来说，设计不仅是解决问题的方法，也是一种不断探索世界、连接技术与人的方式。",
  "我的设计之路，始于对“美”的长期积累。从小学六年级开始，在父亲“世界上的许多事情都离不开审美”的影响下，我开始学习绘画，并将这份兴趣坚持到了今天。小时候，我经常外出写生，在自然中观察光影、色彩与结构，也逐渐培养出对视觉细节和审美表达的敏感度。它让我更好地探索世界，也成为我后来走上设计道路的重要基础。",
  "进入大学后，我开始接触更广阔的设计世界。在大学里，我不仅系统掌握了色彩、构图和视觉表达的理论与方法，也逐渐接触到互动装置、生成艺术以及虚拟现实作品。这些经历让我意识到，设计不再只是静态的视觉呈现，而是一种能够融合技术、叙事与体验的创造方式。",
  "与此同时，我系统学习了用户体验设计的方法。在不断实践的过程中，我发现自己在交互与体验设计领域获得了最强烈的成就感。我享受与用户交流，并通过逻辑梳理与创意表达，将复杂的问题转化为清晰、自然且富有美感的解决方案。",
  "我相信，设计的核心始终是对人的理解。在 AI 快速发展的今天，我希望不断打磨和提升设计本质能力，同时积极拥抱新的工具和工作方式。",
] as const;

export const aboutEducation = [
  {
    school: "北京航空航天大学",
    period: "2020 — 2024",
    degree: "数字媒体艺术设计",
    courses: "移动交互应用设计、UI 设计、Web 前端设计、VR 交互设计",
  },
  {
    school: "北京航空航天大学",
    period: "2021 — 至今",
    degree: "用户体验与交互设计",
    courses: "人机交互与用户体验、设计研究方法、跨学科数字创新设计、设计风格与表现",
  },
] as const;

export const aboutInternships = [
  {
    org: "百度 · 百度网盘界面设计组",
    period: "2026.05 — 2026.08",
    role: "UI 设计师",
    description:
      "参与百度网盘产品的界面设计与视觉规范建设，围绕核心功能进行体验梳理与细节打磨，推动设计方案落地。",
  },
  {
    org: "小米汽车 · 汽车部",
    period: "2025.5 — 2025.11",
    role: "体验设计师",
    description:
      "负责自动驾驶相关界面的 AI 智驾相关的竞品研究与需求优化，辅助输出 HMI 设计规范，推动设计体验实现。参与小米汽车 App C 端的体验设计优化和改版。",
  },
  {
    org: "知乎 · 盐言业务部",
    period: "2026.03 — 2024.05",
    role: "产品体验设计师",
    description:
      "参与盐言故事业务的产品体验设计，围绕内容消费与增长链路开展方案探索，输出可落地的交互与视觉方案。",
  },
] as const;

export const aboutAwards = [
  {
    direction: "left" as const,
    duration: "52s",
    items: [
      { title: "IF DESIGN STUDENT AWARD",            iconKey: "awardMedal"  },
      { title: "国家奖学金 ×1",                       iconKey: "awardTrophy" },
      { title: "IEEE VR 2024 Posters Program",        iconKey: "awardCert"   },
      { title: "全国高校数字艺术设计大赛 国赛一等奖",  iconKey: "awardMedal"  },
      { title: "特等奖学金 ×6",                       iconKey: "awardTrophy" },
      { title: "SIGGRAPH ASIA 2023 XR Program",       iconKey: "awardCert"   },
      { title: "校级三好学生 ×4",                     iconKey: "awardTrophy" },
      { title: "优秀毕业生 ×1",                       iconKey: "awardTrophy" },
    ],
  },
  {
    direction: "right" as const,
    duration: "52s",
    items: [
      { title: "米兰设计周 省赛一等奖",               iconKey: "awardMedal"  },
      { title: "SIGGRAPH ASIA 2025 Poster Program",   iconKey: "awardCert"   },
      { title: "二等奖学金 ×4",                       iconKey: "awardTrophy" },
      { title: "中国大学生计算机设计大赛 省赛三等奖",  iconKey: "awardMedal"  },
      { title: "CHI 2025 LBW",                        iconKey: "awardCert"   },
      { title: "一等奖学金 ×2",                       iconKey: "awardTrophy" },
      { title: "校级优秀生 ×4",                       iconKey: "awardTrophy" },
    ],
  },
] as const;
