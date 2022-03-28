<script>
	import MarkdownRenderer from '$lib/MarkdownRenderer.svelte';

	export let data;
</script>

<pre>
    {JSON.stringify(data, null, 4)}

	

</pre>

<MarkdownRenderer source={data.post.content} />
