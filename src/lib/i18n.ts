export type Locale = 'zh' | 'en';

export const translations = {
  zh: {
    site: {
      title: "Bruce's Growth Lab",
      subtitle: '增长方法论实验室',
      description: '可复用的增长框架、真实案例拆解、实战经验沉淀',
    },
    nav: {
      frameworks: '增长框架',
      caseStudies: '案例拆解',
      dialogues: '对话精华',
      notes: '学习笔记',
      about: '关于',
      tags: '标签',
    },
    home: {
      heroTitle1: '增长不靠灵感，',
      heroTitle2: '靠方法论。',
      heroDesc: '从维度分析到增长杠杆，从竞品拆解到实验闭环。把增长经验变成可复用的框架。',
      featured: '精选文章',
      latest: '最新文章',
      explore: '探索分类',
      viewAll: '查看全部',
    },
    article: {
      toc: '目录',
      readTime: '分钟阅读',
      related: '相关文章',
      backTo: '返回',
    },
    category: {
      frameworks: { label: '增长框架', desc: '可复用的增长方法论和思维模型' },
      'case-studies': { label: '案例拆解', desc: '真实产品的增长策略深度分析' },
      dialogues: { label: '对话精华', desc: '与增长从业者的访谈和讨论提炼' },
      notes: { label: '学习笔记', desc: '阅读、课程和日常思考的记录' },
    },
    footer: {
      copyright: '用方法论驱动增长',
    },
    tags: {
      title: '标签',
      articles: '篇文章',
    },
    common: {
      noArticles: '暂无文章',
    },
  },
  en: {
    site: {
      title: "Bruce's Growth Lab",
      subtitle: 'Growth Methodology Lab',
      description: 'Reusable growth frameworks, real case studies, and practical insights',
    },
    nav: {
      frameworks: 'Frameworks',
      caseStudies: 'Case Studies',
      dialogues: 'Dialogues',
      notes: 'Notes',
      about: 'About',
      tags: 'Tags',
    },
    home: {
      heroTitle1: 'Growth is not about inspiration,',
      heroTitle2: "it's about methodology.",
      heroDesc: 'From dimensional analysis to growth levers, from competitive teardowns to experiment loops. Turning growth experience into reusable frameworks.',
      featured: 'Featured',
      latest: 'Latest Articles',
      explore: 'Explore Categories',
      viewAll: 'View all',
    },
    article: {
      toc: 'Contents',
      readTime: 'min read',
      related: 'Related Articles',
      backTo: 'Back to',
    },
    category: {
      frameworks: { label: 'Frameworks', desc: 'Reusable growth methodologies and mental models' },
      'case-studies': { label: 'Case Studies', desc: 'Deep analysis of real product growth strategies' },
      dialogues: { label: 'Dialogues', desc: 'Insights from conversations with growth practitioners' },
      notes: { label: 'Notes', desc: 'Reading notes, course takeaways, and reflections' },
    },
    footer: {
      copyright: 'Growth driven by methodology',
    },
    tags: {
      title: 'Tags',
      articles: 'articles',
    },
    common: {
      noArticles: 'No articles yet',
    },
  },
} as const;

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}
