<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	export let data;
</script>

<h1>{data.author.name}</h1>
<MarkdownRenderer source={data.author.bio} />
<img src={data.author.picture.url} alt="" srcset="" />
<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
