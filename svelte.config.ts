import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeHighlight from 'rehype-highlight';
import type { Config } from '@sveltejs/kit';

const dev = process.env.NODE_ENV === 'development';

const config: Config = {
  extensions: ['.svelte', '.md'],
  
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeHighlight]
    })
  ],
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '/my-svelte-site'  // Replace with your repo name
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path.includes('/blog/') && message.includes('404')) {
          return;
        }
        // Allow links that don't begin with base during prerendering
        if (message.includes('does not begin with `base`')) {
          return;
        }
        throw new Error(message);
      },
      handleMissingId: ({ id, path }) => {
        if (path.includes('/blog/')) {
          return;
        }
        throw new Error(`Missing id "${id}" in ${path}`);
      }
    }
  }
};

export default config;
