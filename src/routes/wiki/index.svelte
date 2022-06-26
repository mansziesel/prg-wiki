<script>
	import Tags from '$lib/components/TagsElement.svelte';
	export let data;
</script>

<h1>Alle <span class="accent">wiki</span> items</h1>
<br />
<br />
<br />

<div class="flex flex-col gap-8">
	{#each data.posts as post}
		<a sveltekit:prefetch href={`/wiki/${post.slug}`} class="rounded-md">
			<div>
				<p class="text-3xl">{post.title}</p>
				<p class="text-lg">{post.description}</p>
				<Tags tags={post.tags} />
				<!-- <img src={post.coverImage.url} alt="nice" /> -->
			</div></a
		>
	{/each}
</div>

<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
<style>
	.accent {
		color: var(--accent);
	}

	a {
		background-color: var(--bg-accent);
	}
</style>
