<script>
	export let data;
</script>

{#each data.assignments as assignment}
	<a href={`/assignments/${assignment.slug}`}>
		<div>
			<p>{assignment.title}</p>
			<p>{assignment.description}</p>
			<grid class="gap-1 flex ">
				{#each assignment.tags as tag}
					<p class="bg-red-200 inline-block">{tag}</p>
				{/each}
			</grid>
		</div>
	</a>
	<br />
{/each}

<pre>{JSON.stringify(data, null, 4)}</pre>
