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
