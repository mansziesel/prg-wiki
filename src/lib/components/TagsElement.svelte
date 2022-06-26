<script>
	export let tags;
	// console.log(tags);
</script>

<ul class="flex gap-1">
	{#each tags as tag}
		<li class="p-1 rounded-md inline-block tag">
			{tag}
		</li>
	{/each}
</ul>

<style>
	li {
		background: var(--accent);
		color: var(--text);
	}
</style>
