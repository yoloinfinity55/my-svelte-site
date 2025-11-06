---
title: SvelteKit Static Site Generator Tutorial
date: 2024-11-05
excerpt: A comprehensive, step-by-step tutorial for beginners learning SvelteKit as a static site generator. Learn components, routing, styling, and deployment.
readTime: 15 min read
---

<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';

  const relatedPosts = [
    {
      title: 'My First Blog Post',
      url: '/blog/my-first-post',
      excerpt: 'This is the content of my first post. Welcome to my blog!'
    },
    {
      title: 'My Second Blog Post',
      url: '/blog/my-second-post',
      excerpt: 'More exciting content coming soon!'
    }
  ];
</script>

<svelte:head>
  <title>SvelteKit Static Site Generator Tutorial - My SvelteKit Blog</title>
  <meta name="description" content="A comprehensive, step-by-step tutorial for beginners learning SvelteKit as a static site generator. Learn components, routing, styling, and deployment." />
</svelte:head>

<article class="prose prose-lg max-w-none">
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-4">SvelteKit Static Site Generator Tutorial</h1>
    <div class="text-gray-600 mb-6">
      <time datetime="2024-11-05">November 5, 2024</time>
      <span class="mx-2">•</span>
      <span>15 min read</span>
      <span class="mx-2">•</span>
      <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Tutorial</span>
    </div>
  </header>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
    <div class="flex">
      <div class="ml-3">
        <p class="text-sm text-blue-700">
          <strong>Welcome! 🎉</strong> This tutorial will guide you through building a static site with SvelteKit, based on my own learning journey. We'll start from the basics and build up to more advanced features.
        </p>
      </div>
    </div>
  </div>

  ## What You'll Learn
  SvelteKit fundamentals and file-based routing, component creation and composition, styling with Tailwind CSS, static site generation and deployment, adding interactivity and dynamic features.

  ## Step 1: Understanding Your Project Structure
  A typical SvelteKit project includes src/ for source code, static/ for static files, package.json for dependencies, and svelte.config.ts for configuration.

  ### Key Files Explained
  **Routes (`src/routes/`):** `+page.svelte` = page component, `+layout.svelte` = layout wrapper for child routes, file-based routing: `/blog/my-first-post/+page.svelte` → `/blog/my-first-post`.

  ## Step 2: Running Your Development Server
  Let's get your site running locally with `npm run dev`. This starts the development server at http://localhost:5173 with hot reloading and automatic route generation.

  ## Step 3: Understanding Svelte Components
  Svelte components combine JavaScript logic with HTML templates. Each component has a script block for JavaScript/TypeScript logic with `$props()` and `$state()`, a template with HTML and Svelte directives like `{#each}`, `{#if}`, and an optional style block for component-scoped CSS.

  ## Step 4: Creating Your First Component
  Components are the building blocks of Svelte applications. You can create reusable UI pieces that accept props and emit events. Your existing `BlogCard` component is a great example!

  ## Step 5: Adding Global Styles and Layout
  The root layout (`+layout.svelte`) provides consistent structure across all pages. It includes navigation, headers, footers, and global styles. Your current layout already has a nice navigation structure!

  ## Step 6: Adding Interactivity
  Svelte makes it easy to add interactivity with reactive statements and event handlers. You can create components that respond to user input, manage local state, and persist data in localStorage.

  ## Step 7: Building and Deploying
  Build for production with `npm run build`, preview locally with `npm run preview`, and deploy to GitHub Pages with `npm run deploy`.

  ## Key Concepts Summary

  SvelteKit features include file-based routing, layouts, static generation, components, reactivity, and props. Svelte syntax includes interpolation, loops, conditionals, two-way data binding, and event handlers. Tailwind CSS is a utility-first framework with responsive prefixes and dark mode support.

  <div class="bg-green-50 border-l-4 border-green-400 p-4 my-8">
    <div class="flex">
      <div class="ml-3">
        <p class="text-sm text-green-700">
          <strong>Next Steps:</strong> Try modifying the existing components, add new pages, and experiment with different features. The beauty of SvelteKit is how approachable it is for beginners while being powerful enough for complex applications.
        </p>
      </div>
    </div>
  </div>

  <hr class="my-8">

  <div class="mt-8">
    <h3 class="text-xl font-bold mb-4">Related Posts</h3>
    {#each relatedPosts as post}
      <BlogCard title={post.title} url={post.url} excerpt={post.excerpt} />
    {/each}
  </div>
</article>

<div class="mt-8">
  <a href="../" class="text-blue-600 hover:text-blue-800">← Back to all posts</a>
</div>
