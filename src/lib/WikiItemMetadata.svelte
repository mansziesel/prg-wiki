<script>
	export let data;
</script>

<meta property="og:image" content={data.post.openGraphImage.url} />
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
<meta name="twitter:image" content={data.post.openGraphImage.url} />
