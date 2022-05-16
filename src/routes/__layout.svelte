<script>
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'highlight.js/styles/github-dark.css';
</script>

<Navbar />
<div id="wrapper">
	<main>
		<slot />
	</main>
</div>
<Footer />

<style>
	@media screen and (min-width: 961px) {
		#wrapper {
			width: 960px;
			margin-left: auto;
			margin-right: auto;
		}
	}
	@media screen and (max-width: 960px) {
		#wrapper {
			width: 100vh;
		}
	}
	#wrapper {
		background-color: #0d1117;

		padding: 10px;
	}
</style>
