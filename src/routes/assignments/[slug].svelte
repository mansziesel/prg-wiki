<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	export let data;
</script>

<pre>{JSON.stringify(data, null, 4)}</pre>

<ul>
{#each data.assignment.tags as tag}
<li>
	
</li>
{/each}
</ul>

<MarkdownRenderer source={data.assignment.content} />
