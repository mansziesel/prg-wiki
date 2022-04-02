<script>
	export let data;
</script>

<meta property="og:title" content={data.post.title} />
<meta property="og:description" content={data.post.description} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content={`https://prg-wiki.mziesel.com/wiki/${data.post.slug}`} />

<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="prg-wiki.mziesel.com" />
<meta property="twitter:url" content={`https://prg-wiki.mziesel.com/wiki/${data.post.slug}`} />
<meta name="twitter:title" content={data.post.title} />
<meta name="twitter:description" content={data.post.description} />

{#if data.post.tags}
	<meta
		property="og:image"
		content="https://prg-wiki-og.mziesel.com/api/ogimage?title={data.post
			.title}&tags={data.post.tags.join()}&handle={data.post.authors[0].name}"
	/>
	<meta
		name="twitter:image"
		content="https://prg-wiki-og.mziesel.com/api/ogimage?title={data.post
			.title}&tags={data.post.tags.join()}&handle={data.post.authors[0].name}"
	/>
{:else}
	<meta
		property="og:image"
		content="https://prg-wiki-og.mziesel.com/api/ogimage?title={data.post.title}&handle={data.post
			.authors[0].name}"
	/>
	<meta
		name="twitter:image"
		content="https://prg-wiki-og.mziesel.com/api/ogimage?title={data.post.title}&handle={data.post
			.authors[0].name}"
	/>
{/if}
