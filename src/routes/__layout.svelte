<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../global.css';
	import 'highlight.js/styles/atom-one-light.css';
</script>

<Navbar />
<main class="max-w-3xl mx-auto">
	<slot />
</main>
<Footer />
