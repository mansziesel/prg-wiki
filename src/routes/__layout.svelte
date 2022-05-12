<script>
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'highlight.js/styles/github-dark.css';
</script>

<Navbar />
<main class="max-w-3xl mx-auto">
	<slot />
</main>
<Footer />
