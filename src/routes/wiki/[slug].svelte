<script>
	import MarkdownRenderer from '$lib/MarkdownRenderer.svelte';
	import WikiItemMetadata from '$lib/WikiItemMetadata.svelte';
	export let data;
</script>

<svelte:head>
	<WikiItemMetadata {data} />
</svelte:head>

<!-- <p>{data.post.authors.picture.url}</p>
<img src={data.post.authors[0].picture.url} alt="" />

<pre>{JSON.stringify(data, null, 4)}
</pre> -->

<MarkdownRenderer source={data.post.content} />
