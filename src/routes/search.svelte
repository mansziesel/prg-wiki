<script>
	import { onMount } from 'svelte';
	import algoliasearch from 'algoliasearch';

	let searchClient;
	let index;

	let query = '';
	let hits = [];

	onMount(() => {
		searchClient = algoliasearch('FIYS0PJY65', 'cc66905ce6647b8aba0121cd4fff51ff');

		index = searchClient.initIndex('prg-wiki');

		// Warm up search
		index.search({ query }).then(console.log);
	});

	// Fires on each keyup in form
	async function search() {
		const result = await index.search({ query });
		hits = result.hits;
		console.log(hits);
	}
</script>

<div>
	<h1>Svelte InstantSearch</h1>

	<div>
		<input type="text" bind:value={query} on:keyup={search} />
	</div>

	{#each hits as hit}
		{hit.post_title}
		{hit.permalink}
		<br />
	{/each}
</div>

<style>
	input {
		color: #000;
	}
</style>
