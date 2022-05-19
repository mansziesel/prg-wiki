<script>
	export let data;
</script>

<svelte:head>
	<meta name="description" content="Homepagina van de website" />
	<title>Home | PRG wiki</title>
</svelte:head>

<p class="text-lg">
	Hallo!, dit is een wiki pagina waar je info kan vinden over het vak `programmeren`.
</p>
<br />

<label for="authors">De auteurs van deze site:</label>
<ul id="authors">
	{#each data.authors as author}
		<li>
			<a sveltekit:prefetch href={String.raw`/author/${author.slug}`}>
				<img id={author.slug} src={author.picture.url} alt={author.name} />
				<label for={author.slug}>{author.name}</label>
			</a>
		</li>
	{/each}
</ul>
<!-- <pre class="font-code">{JSON.stringify(data, null, 4)}</pre> -->
