<script>
	export let authors;
</script>

<ul>
	{#each authors as author}
		<li>
			<a sveltekit:prefetch href={String.raw`/author/${author.slug}`}>
				<img id={author.slug} src={author.picture.url} alt={author.name} />
				<label for={author.slug}>{author.name}</label>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		gap: 24px;
		flex-direction: row;
		margin: 1em 0 1em 0;
	}

	img {
		align-self: center;
		object-fit: cover;
		height: 3em;
		width: 3em;
		border-radius: 24%;
	}

	li,
	a {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-content: center;
	}
</style>
