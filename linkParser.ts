interface MarkdownLink {
  type: 'link';
  text: string;       // 链接的显示文本
  url: string;        // 链接地址
  title?: string;     // 链接的标题（可选）
}

/**
 * 解析 Markdown 中的链接
 * @param markdown Markdown 文本内容
 * @returns 解析后的 MarkdownLink 数组
 */
function parseMarkdownLinks(markdown: string): MarkdownLink[] {
  const links: MarkdownLink[] = [];
  const regex = /
 $$(.*?)$$  $\s*(.*?)\s*(?:["']([^"']*)["'])?\s*$ /g; // 改进后的正则表达式
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markdown)) !== null) {
    const text = match[1].trim(); // 链接的显示文本
    const url = match[2].trim(); // 链接的 URL
    const title = match[3] ? match[3].trim() : undefined; // 链接的标题（可选）

    links.push({
      type: 'link',
      text,
      url,
      title
    });
  }

  return links;
}
