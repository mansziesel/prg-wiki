<script>
	import MarkdownRenderer from '$lib/MarkdownRenderer.svelte';

	export let data;
</script>

<svelte:head>
	<meta property="og:image" content={data.post.openGraphImage.url} />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<!-- <p>{data.post.authors.picture.url}</p>
<img src={data.post.authors[0].picture.url} alt="" />

<pre>{JSON.stringify(data, null, 4)}
</pre> -->

<MarkdownRenderer source={data.post.content} />
