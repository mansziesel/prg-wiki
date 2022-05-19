<script>
	import Tags from '$lib/components/TagsElement.svelte';
	export let data;
</script>

{#each data.posts as post}
	<a sveltekit:prefetch href={`/wiki/${post.slug}`}>
		<div>
			<p>{post.title}</p>
			<p>{post.description}</p>
			<Tags tags={post.tags} />
			<img src={post.coverImage.url} alt="nice" />
		</div></a
	>
	<br />
	<hr />
{/each}

<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
