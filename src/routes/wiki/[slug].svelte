<script>
	import MarkdownRenderer from '$lib/MarkdownRenderer.svelte';

	export let data;
</script>

<!-- <p>{data.post.authors.picture.url}</p> -->
<!-- <img src={data.post.authors[0].picture.url} alt="" /> -->

<!-- <pre>
    {JSON.stringify(data, null, 4)}
</pre> -->

<MarkdownRenderer source={data.post.content} />
