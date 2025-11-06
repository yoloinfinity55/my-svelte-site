<script lang="ts">
  interface Post {
    title: string;
    url: string;
    excerpt: string;
    date: string;
    readTime: string;
  }

  export let data: { posts: Post[] };
</script>

<svelte:head>
  <title>Blog - My SvelteKit Site</title>
  <meta name="description" content="Read my latest thoughts on web development, SvelteKit, and programming tutorials." />
</svelte:head>

<div class="mb-8">
  <h1 class="text-3xl font-bold mb-4">Blog Posts</h1>
  <p class="text-gray-600">Thoughts on web development, tutorials, and my learning journey with SvelteKit.</p>
</div>

<div class="space-y-8">
  {#each data.posts as post}
    <article class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1">
          <h2 class="text-xl font-bold mb-2">
            <a href={post.url} class="text-blue-600 hover:text-blue-800">{post.title}</a>
          </h2>
          <div class="text-sm text-gray-500 mb-3">
            <time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span class="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <p class="text-gray-700 mb-4">{post.excerpt}</p>
          <a href={post.url} class="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
        </div>
      </div>
    </article>
  {/each}
</div>
