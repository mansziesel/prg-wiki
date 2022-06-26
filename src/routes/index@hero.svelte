<script>
	export let data;
</script>

<svelte:head>
	<meta name="description" content="Homepagina van de website" />
	<title>Home | PRG wiki</title>
</svelte:head>

<div id="grad" class="w-full pt-16">
	<div class="waviy">
		<span style="--i:1">P</span>
		<span style="--i:2">R</span>
		<span style="--i:3">G</span>
		<span style="--i:4">-</span>
		<span style="--i:5">W</span>
		<span style="--i:6">I</span>
		<span style="--i:7">K</span>
		<span style="--i:8">I</span>
	</div>
	<p class="text-lg">
		Hallo! Dit is een wiki pagina waar je info kan vinden over het vak programmeren.
	</p>
</div>
<div class="authors_wrapper">
	<label for="authors">De auteurs van deze site:</label>
	<ul id="authors ">
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
</div>

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
		span {
			font-family: Poppins;
			line-height: 200px;
		}
		span,
		p {
			color: var(--background) !important;
		}

		p {
			font-size: 24px;
		}
	}

	.waviy {
		position: relative;
		-webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
		font-size: 86px;
	}
	.waviy span {
		position: relative;
		display: inline-block;
		text-transform: uppercase;
		animation: waviy 1s infinite;
		animation-delay: calc(0.1s * var(--i));
	}
	@keyframes waviy {
		0%,
		40%,
		100% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(-20px);
		}
	}

	.authors_wrapper {
		width: 960px;
		margin-left: auto;
		margin-right: auto;
	}

	#authors {
		display: grid !important;
		grid-template-columns: 2;
	}
</style>
