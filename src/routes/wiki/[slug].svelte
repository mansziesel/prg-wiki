<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import WikiItemMetadata from '$lib/components/WikiItemMetadata.svelte';
	import Tags from '$lib/components/TagsElement.svelte';

	export let data;
</script>

<svelte:head>
	<WikiItemMetadata {data} />
</svelte:head>

<!-- <p>{data.post.authors.picture.url}</p>
<img src={data.post.authors[0].picture.url} alt="" />
-->

<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->

<Tags tags={data.post.tags} />
<hr />
<MarkdownRenderer source={data.post.content} />
