<script>
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'highlight.js/styles/github-dark.css';
</script>

<div id="wrapper">
<Navbar />
<main>
	<slot />
</main>
<Footer />
</div>

<style>

#wrapper {
	background-color: rgb(100, 100, 100);
	max-width: 1000px;
	min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
}

</style>