<script context="module">
	import { gql } from 'graphql-request';
	import client from '$lib/gqlClient';

	const query = gql`
		{
			posts {
				slug
				title
				description
			}
		}
	`;

	export const load = async () => {
		const data = await client.request(query);

		return {
			props: {
				data
			}
		};
	};
</script>

<script>
	export let data;
	console.log(data);
</script>

{#each data.posts as post}
	<a sveltekit:prefetch href={`/wiki/${post.slug}`}>
		<div>
			<p>{post.title}</p>
			<p>{post.description}</p>
		</div>
	</a>
	<br />
{/each}
