<script>
	export let data;
</script>

{#each data.posts as post}
	<a href={`/wiki/${post.slug}`}>
		<div>
			<p>{post.title}</p>
			<p>{post.description}</p>
		</div>
	</a>
	<br />
{/each}
