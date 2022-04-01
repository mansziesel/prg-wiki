<script>
	export let data;
</script>

<!-- <svelte:head>
	<meta name="description" content="A wiki page for programming" />
	<title>PRG wiki</title>
</svelte:head> -->

<pre>
    {JSON.stringify(data, null, 4)}
</pre>
