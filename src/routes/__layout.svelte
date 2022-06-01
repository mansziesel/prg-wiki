<script>
	import { page } from '$app/stores';
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	// import 'highlight.js/styles/github.css';
</script>

<svelte:head>
	<title>{$page.url.pathname} | PRG wiki</title>

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-E299EV90FV"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-E299EV90FV');
	</script>
</svelte:head>

<Navbar />
<div id="content_wrapper">
	<main>
		<slot />
	</main>
</div>

<style>
	@media screen and (min-width: 961px) {
		#content_wrapper {
			width: 960px;
			margin-left: auto;
			margin-right: auto;
		}
	}
	@media screen and (max-width: 960px) {
		#content_wrapper {
			width: 100vh;
		}
	}
	#content_wrapper {
		background-color: var(--background);
		padding: 10px;
	}
</style>
