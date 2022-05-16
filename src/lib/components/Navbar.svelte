<script>
	const searchMenuToggle = () => {
		alert('to do ');
	};
</script>

<div id="navbarlijn">
	<div id="navbar" class="flex justify-between pb-4 flex-wrap">
		<h1>prg-wiki</h1>
		<ul class="flex gap-6 flex-wrap">
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
			<li on:click={searchMenuToggle} id="searchbutton" class="underline hover:decoration-dashed">
				Search
			</li>
		</ul>
	</div>
</div>

<style>
	#navbarlijn {
		background-color: #161b22;
		max-width: auto;
	}

	#navbar {
		margin-right: auto;
		margin-left: auto;
		max-width: 960px;
		padding-right: 10px;
		padding-left: 10px;
	}

	ul {
		padding-top: 15px;
	}
</style>
