---
title: "SvelteKit Blog Setup Manual - Step by Step Guide"
date: 2024-11-05
excerpt: "A complete beginner-friendly guide to setting up and running your SvelteKit blog. Follow these simple steps to get your blog up and running locally and deploy it online."
readTime: 10 min read
---

<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';

  const relatedPosts = [
    {
      title: 'SvelteKit Static Site Generator Tutorial',
      url: '/blog/sveltekit-tutorial',
      excerpt: 'Learn the fundamentals of SvelteKit and how to build static sites.'
    },
    {
      title: 'My First Blog Post',
      url: '/blog/my-first-post',
      excerpt: 'Welcome to my blog! This is my first post.'
    }
  ];
</script>

<svelte:head>
  <title>SvelteKit Blog Setup Manual - My SvelteKit Blog</title>
  <meta name="description" content="A complete beginner-friendly guide to setting up and running your SvelteKit blog. Follow these simple steps to get your blog up and running locally and deploy it online." />
</svelte:head>

<article class="prose prose-lg max-w-none">
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-4">SvelteKit Blog Setup Manual</h1>
    <div class="text-gray-600 mb-6">
      <time datetime="2024-11-05">November 5, 2024</time>
      <span class="mx-2">•</span>
      <span>10 min read</span>
      <span class="mx-2">•</span>
      <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Setup Guide</span>
    </div>
  </header>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
    <div class="flex">
      <div class="ml-3">
        <p class="text-sm text-blue-700">
          <strong>Perfect for beginners! 🚀</strong> This manual will walk you through every step needed to get your SvelteKit blog running. No prior experience required.
        </p>
      </div>
    </div>
  </div>

  ## What You'll Need

  Before we start, make sure you have these installed on your computer:

  - **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org)
  - **Git** - Download from [git-scm.com](https://git-scm.com)
  - **A code editor** (like VS Code) - Download from [code.visualstudio.com](https://code.visualstudio.com)

  ## Step 1: Get the Project Code

  First, you need to download or clone this project to your computer.

  ### Option A: Clone with Git (Recommended)

  Open your terminal/command prompt and run:

  ```bash
  git clone https://github.com/yoloinfinity55/my-svelte-site.git
  cd my-svelte-site
  ```

  ### Option B: Download ZIP

  1. Go to [https://github.com/yoloinfinity55/my-svelte-site](https://github.com/yoloinfinity55/my-svelte-site)
  2. Click the green "Code" button
  3. Select "Download ZIP"
  4. Extract the ZIP file to a folder on your computer
  5. Open that folder in your code editor

  ## Step 2: Install Dependencies

  Now you need to install all the required packages. In your terminal/command prompt, make sure you're in the project folder and run:

  ```bash
  npm install
  ```

  This will download and install all the necessary dependencies. It might take a few minutes.

  ## Step 3: Start the Development Server

  Once the installation is complete, start the development server:

  ```bash
  npm run dev
  ```

  You should see output like this:
  ```
  Local:   http://localhost:5173/
  Network: http://192.168.1.xxx:5173/
  ```

  ## Step 4: View Your Blog

  Open your web browser and go to `http://localhost:5173/`

  Congratulations! 🎉 Your blog is now running locally. You should see the homepage with the navigation and some sample blog posts.

  ## Step 5: Make Your First Changes

  Let's make a small change to see how it works:

  1. Open `src/routes/+page.svelte` in your code editor
  2. Find the welcome message and change it
  3. Save the file
  4. Check your browser - the changes should appear automatically!

  ## Step 6: Create Your First Blog Post

  Want to add a new blog post? Here's how:

  ### Option A: Use the Create Script

  ```bash
  npm run create-post
  ```

  Follow the prompts to create a new post.

  ### Option B: Manual Creation

  1. Create a new file in the `src/posts/` folder
  2. Name it something like `my-new-post.md`
  3. Copy the format from an existing post (like `my-first-post.md`)
  4. Add your content
  5. Save and check your blog - the new post should appear!

  ## Step 7: Build for Production

  When you're ready to share your blog with the world, build it for production:

  ```bash
  npm run build
  ```

  This creates a `build` folder with your optimized site.

  ## Step 8: Preview Production Build

  Test your production build locally:

  ```bash
  npm run preview
  ```

  Visit `http://localhost:4173/` to see how your site will look when deployed.

  ## Step 9: Deploy to GitHub Pages

  This project is set up for automatic deployment to GitHub Pages.

  ### If You Cloned the Repository:

  1. Create your own GitHub repository
  2. Change the remote URL:
     ```bash
     git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     ```
  3. Push your changes:
     ```bash
     git add .
     git commit -m "Initial commit"
     git push -u origin main
     ```

  ### Enable GitHub Pages:

  1. Go to your repository on GitHub
  2. Click "Settings" tab
  3. Scroll down to "Pages" section
  4. Under "Source", select "GitHub Actions"
  5. Push any change to trigger deployment

  Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

  ## Troubleshooting

  ### Common Issues:

  **"npm install" fails:**
  - Make sure you have Node.js installed
  - Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

  **"npm run dev" doesn't work:**
  - Check if port 5173 is already in use
  - Try `npm run dev -- --port 3000` to use a different port

  **Changes not showing:**
  - Make sure you're saving the files
  - Check the terminal for any error messages
  - Try refreshing your browser

  **Build fails:**
  - Run `npm run check` to check for TypeScript errors
  - Fix any errors shown, then try building again

  ## Project Structure Overview

  Here's what each folder contains:

  - `src/routes/` - Your pages and layouts
  - `src/posts/` - Blog post content (Markdown files)
  - `src/lib/components/` - Reusable Svelte components
  - `static/` - Static files (images, favicon, etc.)
  - `src/app.css` - Global styles

  ## Next Steps

  Now that your blog is set up, you can:

  - Customize the design in `src/app.css`
  - Add new components in `src/lib/components/`
  - Modify the layout in `src/routes/+layout.svelte`
  - Write more blog posts!


  <div class="bg-green-50 border-l-4 border-green-400 p-4 my-8">
    <div class="flex">
      <div class="ml-3">
        <p class="text-sm text-green-700">
          <strong>You're all set! 🎉</strong> Your SvelteKit blog is ready. Start writing posts and customizing your site. Check out the tutorial post for more advanced features.
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