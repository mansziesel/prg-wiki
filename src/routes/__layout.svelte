<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../global.css';
	import 'highlight.js/styles/atom-one-light.css';
</script>

<Navbar />
<main class="max-w-2xl mx-auto">
	<slot />
</main>
<Footer />

<svelte:head>
	<html lang="dutch" />
	<meta name="description" content="A wiki page for programming" />
	<title>PRG wiki</title>
</svelte:head>
