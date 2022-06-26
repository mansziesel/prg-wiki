<script>
	export let data;
</script>

<label for="authors">De auteurs van deze site:</label>
<ul id="authors">
	{#each data.authors as author}
		<li>
			<a sveltekit:prefetch href={String.raw`/author/${author.slug}`}>
				<img id={author.slug} src={author.picture.url} alt={author.name} />
				<label for={author.slug}>{author.name}</label>
			</a>
			<br />
			<br />
		</li>
	{/each}
</ul>
