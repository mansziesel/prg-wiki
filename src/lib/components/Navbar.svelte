<script>
	// import { searchMenuOpen } from '../stores/uiStateStore';
	// import Search from '$lib/components/Algolia.svelte';
</script>

<div id="nav_wrapper">
	<div id="navbar" class="flex justify-between pb-4 flex-wrap">
		<h1>prg-wiki</h1>
		<ul class="flex gap-6 flex-wrap">
			<!-- <li><Search /></li> -->
			<li class="underline hover:decoration-dashed">
				<a sveltekit:prefetch href="/">home</a>
			</li>
			<li class="underline hover:decoration-dashed">
				<a sveltekit:prefetch href="/wiki">wiki</a>
			</li>
			<li class="underline hover:decoration-dashed">
				<a sveltekit:prefetch href="/assignments">assignments</a>
			</li>
			<li class="underline hover:decoration-dashed">
				<a sveltekit:prefetch href="/resources">leermiddelen</a>
			</li>
		</ul>
	</div>
</div>

<style>
	#nav_wrapper {
		background-color: var(--bg-accent);
		max-width: auto;
	}

	#navbar {
		margin-right: auto;
		margin-left: auto;
		max-width: 960px;
		padding-right: 10px;
		padding-left: 10px;
	}

	#searchbutton:hover {
		cursor: pointer;
	}

	ul {
		padding-top: 15px;
	}
</style>
