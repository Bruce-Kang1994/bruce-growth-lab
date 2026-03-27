export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readingTime(content: string): string {
  const cjkChars = (content.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = content.replace(/[\u4e00-\u9fff]/g, '').split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil((cjkChars / 400 + words / 200));
  return `${Math.max(1, minutes)} 分钟`;
}

export const categoryMap: Record<string, { label: string; description: string }> = {
  frameworks: {
    label: '增长框架',
    description: '可复用的增长方法论和思维模型',
  },
  'case-studies': {
    label: '案例拆解',
    description: '真实产品的增长策略深度分析',
  },
  dialogues: {
    label: '对话精华',
    description: '与增长从业者的访谈和讨论提炼',
  },
  notes: {
    label: '学习笔记',
    description: '阅读、课程和日常思考的记录',
  },
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fff-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}
