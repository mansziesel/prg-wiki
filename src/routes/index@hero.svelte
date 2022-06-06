<script context="module">
	/** @type {import('./__types/[slug]').Load} */ export async function load({ fetch }) {
		const url = `/api/authorData.json`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				res: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let res;
	const data = res.data;
</script>

<svelte:head>
	<meta name="description" content="Homepagina van de website" />
	<title>Home | PRG wiki</title>
</svelte:head>

<div id="grad" class="w-full pt-16">
	<h1 class="text-7xl  ">prg-wiki</h1>
	<p class="text-lg">
		Hallo!, dit is een wiki pagina waar je info kan vinden over het vak `programmeren`.
	</p>
</div>

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

<!-- <pre class="font-code">{JSON.stringify(data, null, 4)}</pre> -->
<style lang="scss">
	#grad {
		font-weight: 700;
		background-color: var(--background);
		background-image: url('/Radial3-Grain2.png');
		background-position: 50% 0px;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100vw;
		text-align: center;
		height: 500px;
		h1 {
			font-family: Poppins;
			line-height: 200px;
		}
		h1,
		p {
			color: var(--background) !important;
		}

		p {
			font-size: 24px;
		}
	}
</style>
