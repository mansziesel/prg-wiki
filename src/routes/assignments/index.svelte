<script>
	import Tags from '$lib/components/TagsElement.svelte';
	export let data;
</script>

{#each data.assignments as assignment}
	<a href={`/assignments/${assignment.slug}`}>
		<div>
			<p class="text-2xl font-bold">{assignment.title}</p>
			<p class="text-xl">{assignment.description}</p>
			<Tags tags={assignment.tags} />
		</div>
	</a>
	<br />
{/each}

<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
