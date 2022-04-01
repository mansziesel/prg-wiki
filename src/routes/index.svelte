<script>
	export let data;
</script>

<svelte:head>
	<meta name="description" content="Homepagina van de website" />
	<title>Home | PRG wiki</title>
</svelte:head>

<p class="text-lg">Hallo!</p>

<pre>{JSON.stringify(data, null, 4)}</pre>
