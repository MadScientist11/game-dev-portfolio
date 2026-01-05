import matter from 'gray-matter';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

// Import all markdown files from the articles folder
const articleFiles = import.meta.glob('/src/articles/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export function getArticles(): Article[] {
  const articles: Article[] = [];

  for (const path in articleFiles) {
    const rawContent = articleFiles[path] as string;
    const { data, content } = matter(rawContent);

    articles.push({
      id: data.id || path.split('/').pop()?.replace('.md', '') || '',
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: content.trim(),
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
      readTime: data.readTime || '',
      tags: data.tags || [],
    });
  }

  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const articles = getArticles();
