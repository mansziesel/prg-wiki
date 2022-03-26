<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch(
			'https://api-eu-central-1.graphcms.com/v2/cl15ajjvgghuh01zaa62u11s3/master',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					query: `{
						projects {
                            createdAt
                            description
                            slug
                            title
						}
					}`
				})
			}
		);

		const { data } = await res.json();
		return {
			props: {
				data
			}
		};
	};
</script>

<script>
	export let data;
</script>

{#each data.projects as post}
	<a href={`/assignments/${post.slug}`}>
		<div>
			<p>{post.title}</p>
			<p>{post.description}</p>
		</div>
	</a>
	<br />
{/each}
