<script>
	const searchMenuToggle = () => {
		alert('to do ');
	};
</script>

<div class="flex justify-between pb-4 mx-auto max-w-3xl flex-wrap">
	<p>prg-wiki</p>
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
