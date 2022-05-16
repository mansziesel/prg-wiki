<script>
	export let data;
	console.log(data);
</script>

{#each data.assignments as assignment}
	<a href={`/assignments/${assignment.slug}`}>
		<div>
			<p class="text-2xl font-bold">{assignment.title}</p>
			<p class="text-xl">{assignment.description}</p>
			<grid class="gap-1 flex ">
				{#each assignment.tags as tag}
					<p class="bg-gray-300 p-1 rounded-md inline-block">{tag}</p>
				{/each}
			</grid>
		</div>
	</a>
	<br />
{/each}

<!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
