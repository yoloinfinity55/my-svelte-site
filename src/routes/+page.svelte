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
  <title>My SvelteKit Blog</title>
  <meta name="description" content="A blog built with SvelteKit" />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8">
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to My SvelteKit Blog</h1>
    
    <p class="text-xl text-gray-700 mb-6">Check out my latest posts:</p>
    
    <div class="space-y-6">
      {#each data.posts.slice(0, 5) as post}
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <a href={post.url} class="text-2xl font-bold text-blue-600 hover:text-blue-800">
            {post.title}
          </a>
          <div class="text-gray-600 text-sm mt-2">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            {#if post.readTime}
              <span class="mx-2">•</span>
              <span>{post.readTime}</span>
            {/if}
          </div>
          {#if post.excerpt}
            <p class="text-gray-700 mt-3 leading-relaxed">{post.excerpt}</p>
          {/if}
        </div>
      {/each}
    </div>
    
    <div class="mt-8 text-center">
      <a href="/blog" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        View all posts →
      </a>
    </div>
  </div>
</div>