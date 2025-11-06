import type { PageLoad } from './$types';
import { base } from '$app/paths';

interface Post {
  title: string;
  url: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const load: PageLoad = async () => {
  // Import all markdown files
  const postModules = import.meta.glob('../posts/*.md', { eager: true });

  const posts: Post[] = Object.entries(postModules).map(([path, module]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return {
      title: module.metadata.title,
      url: `${base}/blog/${slug}`,
      excerpt: module.metadata.excerpt,
      date: module.metadata.date,
      readTime: module.metadata.readTime
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date descending

  return { posts };
};
