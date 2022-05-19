<script>
	export let data;
</script>

<svelte:head>
	<meta name="description" content="Homepagina van de website" />
	<title>Home | PRG wiki</title>
</svelte:head>

<pre class="font-code">{JSON.stringify(data, null, 4)}</pre>
