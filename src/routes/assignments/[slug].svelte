<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	export let data;
</script>

<pre>{JSON.stringify(data, null, 4)}</pre>

<MarkdownRenderer source={data.assignment.content} />
