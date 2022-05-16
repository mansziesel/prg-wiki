<script>
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'highlight.js/styles/github-dark.css';
</script>

<div id="navbar">
	<Navbar />
</div>

<div id="wrapper">

<main>
	<slot />
</main>
<Footer />
</div>

<style>

#wrapper {
	background-color: #0d1117;
	max-width: 1160px;
	min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
	padding: 10px;
}

</style>