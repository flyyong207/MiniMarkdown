interface MarkdownImage {
  type: 'image';
  alt: string;        // 图片的替代文本
  url: string;        // 图片的链接地址
  title?: string;     // 图片的标题（可选）
}

/**
 * 解析 Markdown 中的图片
 * @param markdown Markdown 文本内容
 * @returns 解析后的 MarkdownImage 数组
 */
function parseMarkdownImages(markdown: string): MarkdownImage[] {
  const images: MarkdownImage[] = [];
  const regex = /!
 $$(.*?)$$  $\s*(.*?)\s*(?:["']([^"']*)["'])?\s*$ /g; // 改进后的正则表达式
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markdown)) !== null) {
    const alt = match[1].trim(); // 图片的替代文本
    const url = match[2].trim(); // 图片的 URL
    const title = match[3] ? match[3].trim() : undefined; // 图片的标题（可选）

    images.push({
      type: 'image',
      alt,
      url,
      title
    });
  }

  return images;
}
