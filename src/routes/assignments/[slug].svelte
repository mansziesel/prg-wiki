<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import Tags from '$lib/components/TagsElement.svelte';

	export let data;
</script>

<MarkdownRenderer source={data.assignment.description} />
<Tags tags={data.assignment.tags} />
<br />
<hr />
<span class="markdown">
	<MarkdownRenderer source={data.assignment.content} />
</span>

<style global lang="scss">
	.markdown {
		li {
			list-style: inside;
		}
	}
</style>
