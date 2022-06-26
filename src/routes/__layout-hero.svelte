<script>
	import { page } from '$app/stores';
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
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

<main>
	<slot />
</main>
