# SvelteKit Static Site Generator Tutorial

## Welcome! 🎉

This tutorial will guide you through building a static site with SvelteKit, based on your existing project. We'll start from the basics and build up to more advanced features. By the end, you'll understand how to create, style, and deploy your own SvelteKit static sites.

## What You'll Learn

- SvelteKit fundamentals and file-based routing
- Component creation and composition
- Styling with Tailwind CSS
- Static site generation and deployment
- Adding interactivity and dynamic features

---

## Step 1: Understanding Your Project Structure

Let's start by examining what you already have:

```
my-svelte-site/
├── src/
│   ├── app.css          # Global styles (Tailwind CSS)
│   ├── app.html         # Base HTML template
│   ├── lib/             # Reusable components and utilities
│   │   └── assets/      # Static assets (favicon, images)
│   └── routes/          # Pages and layouts (file-based routing)
│       ├── +layout.svelte    # Root layout
│       ├── +page.svelte      # Homepage
│       └── blog/             # Blog section
│           ├── my-first-post/
│           │   └── +page.svelte
│           └── my-second-post/
│               └── +page.svelte
├── static/              # Static files served at root
├── package.json         # Dependencies and scripts
└── svelte.config.ts     # SvelteKit configuration
```

### Key Files Explained

**Routes (`src/routes/`):**
- `+page.svelte` = page component
- `+layout.svelte` = layout wrapper for child routes
- File-based routing: `/blog/my-first-post/+page.svelte` → `/blog/my-first-post`

**Configuration:**
- `svelte.config.ts`: Uses `@sveltejs/adapter-static` for static site generation
- `package.json`: Includes build scripts and Tailwind CSS setup

---

## Step 2: Running Your Development Server

Let's get your site running locally:

```bash
npm run dev
```

This starts the development server. Open `http://localhost:5173` in your browser.

**What happens:**
- SvelteKit compiles your Svelte components
- Hot reloading enables instant updates
- Routes are automatically generated from your file structure

---

## Step 3: Understanding Svelte Components

Look at your existing `src/routes/+page.svelte`:

```svelte
<script lang="ts">
  const posts = [
    { title: 'My First Blog Post', url: '/blog/my-first-post' },
    { title: 'My Second Blog Post', url: '/blog/my-second-post' }
  ];
</script>

<h1>Welcome to My SvelteKit Blog</h1>

<ul>
  {#each posts as post}
    <li><a href={post.url}>{post.title}</a></li>
  {/each}
</ul>
```

### Breaking it down:

1. **`<script>` block**: JavaScript/TypeScript logic
2. **Template**: HTML with Svelte directives
3. **`{#each}`**: Loop through arrays
4. **Reactive**: Changes to `posts` automatically update the UI

---

## Step 4: Creating Your First Component

Let's create a reusable blog post card component.

Create `src/lib/components/BlogCard.svelte`:

```svelte
<script lang="ts">
  interface Props {
    title: string;
    url: string;
    excerpt?: string;
  }

  let { title, url, excerpt }: Props = $props();
</script>

<article class="border border-gray-200 rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow">
  <h2 class="text-xl font-bold mb-2">
    <a href={url} class="text-blue-600 hover:text-blue-800">{title}</a>
  </h2>
  {#if excerpt}
    <p class="text-gray-600 mb-4">{excerpt}</p>
  {/if}
  <a href={url} class="text-sm text-blue-600 hover:text-blue-800">Read more →</a>
</article>
```

Now update your homepage to use this component:

```svelte
<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';

  const posts = [
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

<h1 class="text-3xl font-bold mb-8">Welcome to My SvelteKit Blog</h1>

<div class="grid gap-6">
  {#each posts as post}
    <BlogCard {title} {url} {excerpt} />
  {/each}
</div>
```

---

## Step 5: Adding Global Styles and Layout

Your `src/routes/+layout.svelte` is the root layout. Let's enhance it:

```svelte
<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>My SvelteKit Blog</title>
  <meta name="description" content="A static blog built with SvelteKit" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <header class="bg-white shadow-sm border-b">
    <nav class="max-w-4xl mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-gray-900">My Blog</a>
        <div class="space-x-6">
          <a href="/" class="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/blog" class="text-gray-600 hover:text-gray-900">Blog</a>
        </div>
      </div>
    </nav>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-8">
    {@render children()}
  </main>

  <footer class="bg-white border-t mt-16">
    <div class="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
      <p>&copy; 2024 My SvelteKit Blog. Built with ❤️ and SvelteKit.</p>
    </div>
  </footer>
</div>
```

---

## Step 6: Creating a Blog Index Page

Create `src/routes/blog/+page.svelte` for a blog listing:

```svelte
<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';

  const posts = [
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
  <title>Blog - My SvelteKit Site</title>
</svelte:head>

<h1 class="text-3xl font-bold mb-8">Blog Posts</h1>

<div class="grid gap-6">
  {#each posts as post}
    <BlogCard {title} {url} {excerpt} />
  {/each}
</div>
```

---

## Step 7: Enhancing Blog Posts with Markdown

Let's improve your blog posts with better formatting. Update `src/routes/blog/my-first-post/+page.svelte`:

```svelte
<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';

  const relatedPosts = [
    {
      title: 'My Second Blog Post',
      url: '/blog/my-second-post',
      excerpt: 'More exciting content coming soon!'
    }
  ];
</script>

<svelte:head>
  <title>My First Blog Post - My SvelteKit Blog</title>
</svelte:head>

<article class="prose prose-lg max-w-none">
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-4">My First Blog Post</h1>
    <div class="text-gray-600">
      <time datetime="2024-01-01">January 1, 2024</time>
      <span class="mx-2">•</span>
      <span>5 min read</span>
    </div>
  </header>

  <div class="mb-8">
    <p class="text-xl text-gray-700 mb-6">
      This is the content of my first post. Welcome to my blog! I'm excited to share my journey learning SvelteKit and building static sites.
    </p>

    <h2>What I've Learned So Far</h2>
    <ul>
      <li>SvelteKit uses file-based routing</li>
      <li>Components are reactive and efficient</li>
      <li>Tailwind CSS makes styling easy</li>
      <li>Static generation is perfect for blogs</li>
    </ul>

    <h2>Next Steps</h2>
    <p>
      I'm planning to add more features like:
    </p>
    <ul>
      <li>Markdown support for blog posts</li>
      <li>Tags and categories</li>
      <li>Search functionality</li>
      <li>RSS feed</li>
    </ul>
  </div>

  <hr class="my-8">

  <div class="mt-8">
    <h3 class="text-xl font-bold mb-4">Related Posts</h3>
    {#each relatedPosts as post}
      <BlogCard {title} {url} {excerpt} />
    {/each}
  </div>
</article>

<div class="mt-8">
  <a href="/blog" class="text-blue-600 hover:text-blue-800">← Back to all posts</a>
</div>
```

---

## Step 8: Adding Interactivity

Let's add a simple dark mode toggle. Create `src/lib/components/ThemeToggle.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'light' | 'dark' = 'light';

  onMount(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateTheme();
  });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    updateTheme();
    localStorage.setItem('theme', theme);
  }

  function updateTheme() {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
</script>

<button
  onclick={toggleTheme}
  class="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
  aria-label="Toggle theme"
>
  {#if theme === 'light'}
    🌙
  {:else}
    ☀️
  {/if}
</button>
```

Add it to your layout:

```svelte
<!-- In +layout.svelte -->
<div class="flex justify-between items-center">
  <a href="/" class="text-2xl font-bold text-gray-900 dark:text-white">My Blog</a>
  <div class="flex items-center space-x-6">
    <a href="/" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</a>
    <a href="/blog" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</a>
    <ThemeToggle />
  </div>
</div>
```

---

## Step 9: Building and Deploying

### Build for Production

```bash
npm run build
```

This creates a `build/` folder with your static site.

### Preview Locally

```bash
npm run preview
```

### Deploy to GitHub Pages

Your project is already configured for GitHub Pages deployment:

```bash
npm run deploy
```

This builds your site and pushes it to the `gh-pages` branch.

---

## Step 9.5: Creating Blog Posts with Markdown

Your blog now supports markdown files for easier content creation! Here's how to create new blog posts:

### Using the Create Post Script

The easiest way to create a new blog post is using the built-in script:

```bash
# Create a post with auto-generated slug
npm run create-post "My Amazing Blog Post"

# Or specify a custom slug
npm run create-post "My Amazing Blog Post" "amazing-post-2024"
```

This creates a new markdown file in `src/posts/` with frontmatter and a template.

### Manual Creation

You can also create markdown files manually. Create a new file in `src/posts/` with this structure:

```markdown
---
title: Your Post Title
date: 2024-11-05
excerpt: A brief description of your post
readTime: 5 min read
---

# Your Post Title

Write your blog post content here using Markdown.

## Features

- **Bold text** and *italic text*
- `inline code` snippets
- [Links](https://example.com)
- Code blocks:

```javascript
console.log('Hello, world!');
```

## Lists

- Item 1
- Item 2
- Item 3

1. Numbered item
2. Another item

Happy blogging! 🎉

<a href="/">← Back to homepage</a>
```

### Frontmatter Fields

- `title`: The post title (displayed in headings and meta tags)
- `date`: Publication date (YYYY-MM-DD format)
- `excerpt`: Brief description (shown in blog listings)
- `readTime`: Estimated reading time (e.g., "5 min read")

### How It Works

1. **Markdown Processing**: Files in `src/posts/` are processed by mdsvex
2. **Dynamic Routing**: URLs like `/blog/your-post-slug` automatically load the corresponding markdown file
3. **Auto-Indexing**: The blog index page automatically discovers and lists all posts
4. **Sorting**: Posts are sorted by date (newest first)

### File Structure

```
src/
├── posts/                    # Markdown blog posts
│   ├── my-first-post.md
│   ├── my-second-post.md
│   └── sveltekit-tutorial.md
└── routes/
    └── blog/
        ├── +page.svelte      # Blog index (auto-loads posts)
        ├── [slug]/
        │   └── +page.svelte  # Dynamic post loader
        └── _post.svelte      # Post layout wrapper
```

---

## Step 10: Advanced Features (Optional)

### Adding Markdown Support

Install markdown processing:

```bash
npm install -D @types/markdown-it markdown-it
```

Create `src/lib/markdown.ts`:

```typescript
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export function parseMarkdown(content: string): string {
  return md.render(content);
}
```

### Creating a Contact Page

Create `src/routes/contact/+page.svelte`:

```svelte
<script lang="ts">
  let formData = $state({
    name: '',
    email: '',
    message: ''
  });

  let submitted = $state(false);

  function handleSubmit(event: Event) {
    event.preventDefault();
    // In a static site, you'd typically use a service like Formspree
    console.log('Form submitted:', formData);
    submitted = true;
  }
</script>

<svelte:head>
  <title>Contact - My SvelteKit Blog</title>
</svelte:head>

<div class="max-w-2xl mx-auto">
  <h1 class="text-3xl font-bold mb-8">Contact Me</h1>

  {#if submitted}
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
      Thanks for your message! I'll get back to you soon.
    </div>
  {/if}

  <form onsubmit={handleSubmit} class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
      <input
        type="text"
        id="name"
        bind:value={formData.name}
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
      <textarea
        id="message"
        bind:value={formData.message}
        required
        rows="5"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <button
      type="submit"
      class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send Message
    </button>
  </form>
</div>
```

---

## Key Concepts Summary

### SvelteKit Features Used:
- **File-based routing**: URLs determined by file structure
- **Layouts**: Shared UI with `+layout.svelte`
- **Static generation**: `@sveltejs/adapter-static`
- **Components**: Reusable UI pieces
- **Reactivity**: Automatic UI updates with `$state`
- **Props**: Component communication with `$props`

### Svelte Syntax:
- `{variable}`: Interpolation
- `{#each}`: Loops
- `{#if}`: Conditionals
- `bind:value`: Two-way data binding
- `on:event`: Event handlers

### Tailwind CSS:
- Utility-first CSS framework
- Responsive design with prefixes (`sm:`, `md:`, `lg:`)
- Dark mode support with `dark:` prefix

---

## Next Steps

1. **Practice**: Try modifying the existing components
2. **Experiment**: Add new pages and features
3. **Learn More**: Check the [SvelteKit docs](https://kit.svelte.dev/)
4. **Build**: Create your own blog posts and pages

Remember: Start small, build incrementally, and don't be afraid to experiment! The beauty of SvelteKit is how approachable it is for beginners while being powerful enough for complex applications.

Happy coding! 🚀
