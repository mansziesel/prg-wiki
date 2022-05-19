<script>
	import { searchMenuOpen } from '../stores/uiStateStore';
	import { onMount } from 'svelte';
	import algoliasearch from 'algoliasearch';

	let searchClient;
	let index;

	let query = '';
	let hits = [];

	onMount(() => {
		searchClient = algoliasearch('FIYS0PJY65', 'cc66905ce6647b8aba0121cd4fff51ff');

		index = searchClient.initIndex('demo_media');

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
	<input
		placeholder="Search Query"
		on:click={() => {
			$searchMenuOpen = true;
		}}
		on:keyup={search}
		bind:value={query}
	/>
</div>

{#if $searchMenuOpen}
	<div id="container">
		<div id="child">
			{#each hits as hit}
				{hit.post_title}
				{hit.permalink}
				<br />
			{/each}
		</div>
	</div>
{/if}

<style>
	#container {
		/* z-index: 10; */
		/* position: fixed; */
		/* width: 100vw; */
		/* height: 100vh; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	input {
		color: #000;
	}
</style>
