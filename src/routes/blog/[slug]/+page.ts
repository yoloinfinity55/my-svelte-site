import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    
    return {
      content: post.default,
      meta: post.metadata  // Changed from 'metadata' to 'meta'
    };
  } catch (e) {
    console.error(`Failed to load post: ${params.slug}`, e);
    throw error(404, `Post not found`);
  }
};

export const prerender = true;