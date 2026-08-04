// 施工/交付状态数据 —— 改这个文件即更新看板(单一数据源)
// 状态严格按真实进展标注,不粉饰。
window.PROJECT_STATUS = {
  project: "亚太医疗供应商评分系统",
  subtitle: "施工 / 交付 实时状态看板",
  updated: "2026-08-04",
  buyer: "企业采购决策方",

  dbStats: {"products": 5952816, "companies": 10184, "registrations": 5952678, "categories": 46, "regions": {"华东": 4634, "华南": 1717, "华北": 1536, "华中": 1143, "西南": 488, "东北": 279, "西北": 213, "VN": 90, "TH": 82, "Vietnam": 2}, "topCategories": [{"name": "无源植入器械", "count": 2131205}, {"name": "眼科器械", "count": 1473254}, {"name": "注输、护理和防护器械", "count": 468862}, {"name": "口腔科器械", "count": 378094}, {"name": "无源手术器械", "count": 313002}, {"name": "骨科手术器械", "count": 253291}, {"name": "临床检验分析仪器(含体外诊断试剂)", "count": 226354}, {"name": "神经和心血管手术器械", "count": 193175}], "updated": "2026-08-04 07:45", "source": "NMPA UDI 全量包(2026-06-01 基线 + 每日自增)", "customs": {"total": 363165, "hs6": 64, "categories": 15, "cn_origin": 54382, "sources": {"peru_sunat": 281019, "chile_din": 82136, "peru": 8, "ecuador": 2}, "note": "秘鲁 SUNAT + 智利 DIN 逐笔真成交(代理 benchmark);逐笔企业名不外发"}, "priceLayer": {"total": 874, "real_deal": 82, "comtrade": 770}, "fourElements": {"demand": {"buyers": 354, "tenders": 848, "demands": 7}, "supply": {"companies": 10184, "products": 5952816}, "price": {"total": 874, "real_deal": 82, "customs_txn": 363165}, "compliance": {"fda_clearances": 6883, "fda_establishments": 5271, "mecomed": 77}}},

  legend: [
    { key: "done",    label: "已完成",      color: "#22C55E" },
    { key: "partial", label: "半成品/部分",  color: "#F59E0B" },
    { key: "todo",    label: "遗留待办",      color: "#64748B" },
    { key: "next",    label: "下阶段优先",    color: "#A855F7" },
  ],

  // 阶段时间线;currentIndex 标"现在在这里"
  currentIndex: 5,
  phases: [
    { name: "奠基",         detail: "蓝图 / MVP / 数据源 / 架构画板",     status: "done" },
    { name: "数据层基座",   detail: "PG + pgvector 双后端(SQLite 零依赖)", status: "done" },
    { name: "规则版闭环",   detail: "采集→治理→匹配→报价 跑通(脆)",      status: "partial" },
    { name: "战略重定位",   detail: "真实买家 / 集采排除 / AI 四环节",      status: "done" },
    { name: "Skill 骨架",   detail: "21 个单一职责 skill",                 status: "done" },
    { name: "AI 嵌入实现",  detail: "入库 / 查询 / 治理 / 决策 AI",         status: "partial" },
    { name: "检索质量",     detail: "向量 + 混合检索 + 金标准评测集",       status: "partial" },
    { name: "决策层",       detail: "多维评分推荐 + 可审计理由",            status: "partial" },
    { name: "L6 工作台",    detail: "采购端 Web 界面",                     status: "todo" },
  ],

  layers: [
    { id: "L0", name: "控制层", subtitle: "专职输出可控", color: "#A855F7", skills: [
      { name: "confidence-router", type: "规则", duty: "按置信度路由 快路/慢路/人审", status: "todo",    note: "低于阈值强制转人审" },
      { name: "eval-runner",       type: "规则", duty: "金标准评测集跑分",            status: "todo",    note: "缺它=质量不可量化(半成功根因)" },
      { name: "audit-logger",      type: "规则", duty: "AI 输出留痕",                 status: "todo",    note: "大额采购扛审计" },
    ]},
    { id: "L1", name: "入库层", subtitle: "数据进库即被 AI 治", color: "#22D3EE", skills: [
      { name: "doc-extractor",        type: "AI",     duty: "非结构化 → 结构化字段",      status: "done",    note: "多模态识别已上线(图/PDF/Excel/一句话)" },
      { name: "category-classifier",  type: "AI+规则", duty: "产品 → 品类树",             status: "done",    note: "日包大类识别率 100%" },
      { name: "term-normalizer",      type: "规则+AI", duty: "同义词/单位归一(5ml=5cc)",  status: "done",    note: "已上线:色标/单位/中英/俗称归一" },
      { name: "vector-embedder",      type: "AI",     duty: "文本 → 向量",               status: "done",    note: "10.3万通用名向量已建满" },
      { name: "entity-resolver",      type: "AI+规则", duty: "多源同实体去重",            status: "partial", note: "库内去重有,跨源待做" },
      { name: "quality-gate",         type: "规则",   duty: "完整度打分 + 准入门禁",      status: "done",    note: "4 维规则评分已跑通" },
    ]},
    { id: "L2", name: "检索层", subtitle: "模糊需求 → 精准候选", color: "#38BDF8", skills: [
      { name: "query-parser",     type: "AI",      duty: "模糊需求 → 结构化意图",        status: "done",    note: "需求识别已上线" },
      { name: "hybrid-retriever", type: "规则编排", duty: "向量+关键词+结构化过滤",       status: "partial", note: "关键词+向量已并跑 · FTS5 毫秒级" },
      { name: "reranker",         type: "AI",      duty: "候选精排",                    status: "partial", note: "规则排序在跑,AI 精排待" },
    ]},
    { id: "L3", name: "治理层", subtitle: "持续更新 + 质量保鲜", color: "#34D399", skills: [
      { name: "source-harvester",  type: "规则+AI", duty: "巡源抓取(NMPA/阿里/海关)",   status: "partial", note: "UDI 595万+每日自增;多源待接" },
      { name: "change-detector",   type: "规则",   duty: "diff 产出变更事件",           status: "partial", note: "日增量 upsert 在跑,diff 事件待" },
      { name: "anomaly-detector",  type: "AI+规则", duty: "价格突变/规格矛盾标记",       status: "todo",    note: "" },
      { name: "lifecycle-manager", type: "规则",   duty: "注册过期/报价失效流转",        status: "partial", note: "注销→过期已部分流转" },
    ]},
    { id: "L4", name: "决策层", subtitle: "供应商评分推荐", color: "#FBBF24", skills: [
      { name: "price-integrator",  type: "规则+AI", duty: "多源价格 → 价格体系(排除集采)", status: "partial", note: "海关 HS 均价已接入评分" },
      { name: "compliance-checker",type: "规则",   duty: "UAE 准入(意愿+能力,非持证)",  status: "partial", note: "规则 stub,UAE 法规待调研" },
      { name: "supplier-scorer",   type: "规则+AI", duty: "多维评分(价/质/履约/产能/财务)", status: "done",    note: "多维评分+大白话理由已上线" },
      { name: "equivalence-judge", type: "AI",     duty: "等效替代裁定(高风险)",         status: "todo",    note: "AI 只建议,人审裁定" },
      { name: "rationale-writer",  type: "AI",     duty: "带源引用的可审计理由",         status: "partial", note: "评分理由有,源引用待挂" },
    ]},
  ],

  legacy: [
    "UAE 合规还是规则占位 —— MOHAP/DHA/DOH 注册路径未调研,这是成交阀门",
    "报价单出口未接 —— 现在止于供应商名单,差「能签的报价单」最后一步",
    "价格只有海关参考价 —— 腾道逐笔等 key,阿里 / 厂家报价两源未接",
    "金标准评测集未建 —— 质量好坏还无法用数字量化",
    "会话是内存态 —— 重启即丢,多轮追问 / 客户档案未做",
  ],

  next: [
    "UAE 合规引擎(MOHAP/DHA/DOH)—— 把「能不能成交」标到每家厂头上",
    "报价单出口端到端 —— 从供应商名单一步走到客户能签的报价单",
    "价格三源补齐 —— 腾道逐笔 / 阿里国际站 / 厂家报价",
    "主动情报推送 —— 日报 / 价格异动 / 新供给,从被动查询变主动助手",
    "金标准评测集 + 控制层 —— 质量可量化、结论可审计",
  ],
};
