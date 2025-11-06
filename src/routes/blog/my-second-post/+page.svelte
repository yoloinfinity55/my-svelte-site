<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>My Second Blog Post - My SvelteKit Blog</title>
  <meta name="description" content="This is the content of my second post. You can write anything here!" />
</svelte:head>

<div class="mb-8">
  <h1 class="text-4xl font-bold mb-4">My Second Blog Post</h1>
  <div class="text-gray-600 mb-6">
    <time datetime="2023-01-15">
      January 15, 2023
    </time>
    <span class="mx-2">•</span>
    <span>2 min read</span>
  </div>
</div>

<div class="prose prose-lg max-w-none">
  <p>This is the content of my second post. You can write anything here!</p>
</div>

<div class="mt-8">
  <a href="{base}/blog" class="text-blue-600 hover:text-blue-800">← Back to all posts</a>
</div>
