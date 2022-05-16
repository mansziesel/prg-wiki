<script>
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'highlight.js/styles/github-dark.css';
</script>

<Navbar />
<div id="content_wrapper">
	<main>
		<slot />
	</main>
</div>
<!-- Die footer kan me de kanker krijgen -->
<!-- <Footer /> -->

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
		background-color: #0d1117;
		padding: 10px;
	}
</style>
