<script context="module">
	import { gql } from 'graphql-request';
	import client from '$lib/gqlClient';

	export async function load({ params }) {
		const query = gql`
			{
				post(where: { slug: "${params.slug}" }) {
					title
					date
					content
					description
					tags
					authors {
						name
						picture {
							url
						}
					}
					coverImage {
						url
					}
				}
			}
		`;

		const data = await client.request(query);

		return {
			props: {
				data
			}
		};
	}
</script>

<script>
	import RichContent from '$lib/components/RichContent.svelte';

	export let data;
</script>

<pre>
    {JSON.stringify(data, null, 4)}

</pre>

<RichContent richContent={data.post.content} />
