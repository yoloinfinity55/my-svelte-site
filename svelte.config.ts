import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import type { Config } from '@sveltejs/kit';

const config: Config = {
  extensions: ['.svelte', '.md'],
  
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ],
  
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404s for dynamic routes during prerendering
        if (path.includes('/blog/') && message.includes('404')) {
          return;
        }
        throw new Error(message);
      },
      handleMissingId: ({ id, path }) => {
        // Ignore missing anchor links in blog posts
        if (path.includes('/blog/')) {
          return;
        }
        throw new Error(`Missing id "${id}" in ${path}`); // Fixed: was using template literal with 'throw new Error`...'
      }
    }
  }
};

export default config;