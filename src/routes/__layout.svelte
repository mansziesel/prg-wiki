<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />

<svelte:head>
	<html lang="dutch" />
	<meta name="description" content="A wiki page for programming" />
	<title>PRG wiki</title>
</svelte:head>
