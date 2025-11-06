<script lang="ts">
  import { base } from '$app/paths';

  interface PostData {
    content: any;
    meta: {
      title: string;
      date: string;
      excerpt: string;
      readTime: string;
    };
  }

  let { data }: { data: PostData } = $props();

  // In Svelte 5 runes mode, assign the component directly
  const Content = data.content;
</script>

<svelte:head>
  <title>{data.meta.title} - My SvelteKit Blog</title>
  <meta name="description" content={data.meta.excerpt} />
</svelte:head>

<div class="mb-8">
  <h1 class="text-4xl font-bold mb-4">{data.meta.title}</h1>
  <div class="text-gray-600 mb-6">
    <time datetime={data.meta.date}>
      {new Date(data.meta.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}
    </time>
    <span class="mx-2">•</span>
    <span>{data.meta.readTime}</span>
  </div>
</div>

<!-- Changed from {data.content} to <Content /> -->
<div class="prose prose-lg max-w-none">
  <Content />
</div>

<div class="mt-8">
  <a href="{base}/blog" class="text-blue-600 hover:text-blue-800">← Back to all posts</a>
</div>
