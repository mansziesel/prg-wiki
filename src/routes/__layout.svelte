<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../global.css';
	import 'highlight.js/styles/atom-one-dark.css';
</script>

<Navbar />
<main class="max-w-3xl mx-auto">
	<slot />
</main>
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

	pre,
	code {
		font-family: 'JetBrains Mono', monospace !important;
	}
</style>
