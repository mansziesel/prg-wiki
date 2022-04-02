<script>
	export let data;
	console.log(data.posts[0].coverImage.url);
</script>

{#each data.posts as post}
	<a sveltekit:prefetch href={`/wiki/${post.slug}`}>
		<div>
			<p>{post.title}</p>
			<p>{post.description}</p>
			<img src={post.coverImage.url} alt="nice" />
		</div>
	</a>
	<br />
{/each}

<pre>{JSON.stringify(data, null, 4)}</pre>
