/**
 * 本地图：`public/images/` → 站点根路径 `/images/...`
 * 作品封面：`public/images/work/` → `/images/work/...`
 */
const img = "/images";
const workImg = `${img}/work`;

/** 多页共用的占位图 */
const ph = `${img}/hero-scene.png`;

/** 文件名含撇号、空格时须 URL 编码 */
const portraitLarge = `${img}/Lulu%27s%20professional%20portrait.png`;

/** Work 区六个封面（与卡片顺序一致） */
export const workThumbnails = [
  `${workImg}/1_Collab-ear.png`,
  `${workImg}/2_Pergume.png`,
  `${workImg}/3_798.png`,
  `${workImg}/4_Dance.png`,
  `${workImg}/4_dongba.png`,
  `${workImg}/Apple.png`,
] as const;

/** 作品 1–6 对应 B 站视频（顺序与 `cards` 一致） */
export const workBilibiliLinks = [
  "https://www.bilibili.com/video/BV1xw411m73x/?share_source=copy_web&vd_source=f5a7fd259d05ab5f69de4ed76e9db9e6",
  "https://www.bilibili.com/video/BV1i34y1A768/?share_source=copy_web&vd_source=f5a7fd259d05ab5f69de4ed76e9db9e6",
  "https://www.bilibili.com/video/BV1284y1D7Kb/?share_source=copy_web&vd_source=f5a7fd259d05ab5f69de4ed76e9db9e6",
  "https://www.bilibili.com/video/BV1vDv8BYEa7/?share_source=copy_web&vd_source=f5a7fd259d05ab5f69de4ed76e9db9e6",
  "https://www.bilibili.com/video/BV1ip4y1F76D/?share_source=copy_web&vd_source=f5a7fd259d05ab5f69de4ed76e9db9e6",
  "https://www.bilibili.com/video/BV1PT546WEsq/?share_source=copy_web&vd_source=f5a7fd259d05ab5f69de4ed76e9db9e6",
] as const;

/** PDF 作品集：封面 + PDF 链接（点击卡片在新标签打开 PDF） */
const pdfBase = "/pdf";
export const workPdfs = [
  {
    title: "小米汽车 APP 社区体验优化设计",
    tag: "C端",
    desc: "社区体验优化，包括内容浏览体验优化、深度内容消费优化、自驱 AI 提效探索三个部分。",
    cover: `${workImg}/${encodeURIComponent("小米汽车APP-社区体验优化设计.png")}`,
    pdf: `${pdfBase}/${encodeURIComponent("小米汽车APP-社区体验优化设计.pdf")}`,
    bg: "bg-[#cdeeff]",
  },
  {
    title: "小米汽车 HUD 抬头显示界面改版",
    tag: "HMI",
    desc: "开展 6+ 用户深访，洞察用户需求并提炼 4 项关键设计方向，结合 KANO 模型完成需求优先级排序，支撑 HUD 改版策略制定。",
    cover: `${workImg}/${encodeURIComponent("小米汽车-HUD抬头显示界面改版.png")}`,
    pdf: `${pdfBase}/${encodeURIComponent("小米汽车-HUD抬头显示界面改版.pdf")}`,
    bg: "bg-[#dde8f0]",
  },
  {
    title: "知乎会员 · 截断墙广告转化",
    tag: "C端",
    desc: "聚焦广告解锁前、中、后的完整体验链路：前置降低选择成本，中段强化广告价值感知，从而提升广告解锁转化与阅读连续性。",
    cover: `${workImg}/${encodeURIComponent("盐言故事-高吸引力标题生成skill.png")}`,
    pdf: `${pdfBase}/${encodeURIComponent("知乎会员-截断墙广告转化.pdf")}`,
    bg: "bg-[#ffe3df]",
  },
  {
    title: "盐言故事 · 高吸引力标题生成 Skill",
    tag: "AI",
    desc: "针对小说标题吸引力不强的问题，梳理高吸引力标题结构，沉淀标题生成 Skill，让短篇故事标题更有点击欲。",
    cover: `${workImg}/${encodeURIComponent("知乎会员-截断墙广告转化.png")}`,
    pdf: `${pdfBase}/${encodeURIComponent("盐言故事-高吸引力标题生成skill.pdf")}`,
    bg: "bg-[#e9e3c9]",
  },
  {
    title: "AI 提效与设计资产工程化建设",
    tag: "AI",
    desc: "面向设计团队的 AI 提效实践与设计资产工程化落地方案。",
    cover: `${workImg}/${encodeURIComponent("AI 提效与设计资产工程化建设.png")}`,
    pdf: `${pdfBase}/${encodeURIComponent("AI 提效与设计资产工程化建设.pdf")}`,
    bg: "bg-[#e8ecf4]",
  },
] as const;

export const home = {
  work: `${img}/work.png`,
  software: `${img}/software.png`,
  table: `${img}/table.png`,
  avatar: `${img}/avatar.png`,
  contact: `${img}/contact.png`,
  cabinet: `${img}/cabinet.png`,
  resume: `${img}/resume.png`,
  plant: `${img}/plant.png`,
} as const;

export const work = {
  folder: `${img}/folder.png`,
  floatIcon: `${img}/software.png`,
} as const;

export const about = {
  heroAvatar: `${img}/portrait.png`,
  portrait: portraitLarge,
  line1: ph,
  line2: ph,
  line3: ph,
  awardMedal:  `${img}/about/award-medal.png`,
  awardTrophy: `${img}/about/award-trophy.png`,
  awardCert:   `${img}/about/award-cert.png`,
  /* 拍立得装饰贴纸 */
  stickerClip:    `${img}/about/sticker-clip.png`,
  stickerBrace:   `${img}/about/sticker-brace.png`,
  stickerSlash:   `${img}/about/sticker-slash.png`,
  stickerCursor:  `${img}/about/sticker-cursor.png`,
  stickerBrush:   `${img}/about/sticker-brush.png`,
  stickerPalette: `${img}/about/sticker-palette.png`,
  stickerAvatar:  `${img}/about/sticker-avatar.png`,
  stickerMagnifier: `${img}/about/sticker-magnifier.png`,
  stickerBubble:    `${img}/about/sticker-bubble.png`,
  stickerClip2:     `${img}/about/sticker-clip2.png`,
  stickerFolder:    `${img}/about/sticker-folder.png`,
  stickerPen:       `${img}/about/sticker-pen.png`,
  /* 四段经历照片 */
  stage1Photo:   `${img}/about/stage-1-portrait.png`,
  stage2Sketch:  `${img}/about/stage-2-sketch.png`,
  stage2Drawing: `${img}/about/stage-2-drawing.png`,
  stage3Poster:  `${img}/about/stage-3-poster.png`,
  stage3Xiaomi:  `${img}/about/stage-3-xiaomi.png`,
  stage3Sydney:  `${img}/about/stage-3-sydney.png`,
  stage4Swan:    `${img}/about/stage-4-swan.png`,
} as const;

export const contact = {
  envelopeBack: `${img}/contact/envelope-back.png`,
  envelopeFront: `${img}/contact/envelope-front.png`,
  letter: `${img}/contact/letter.png`,
} as const;
