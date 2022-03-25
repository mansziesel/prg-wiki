<script context="module">
	import { gql } from 'graphql-request';
	import client from '$lib/gqlClient';

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
				post(where: { slug: "test" }) {
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
				}                }`
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
	import RichContent from '$lib/components/RichContent.svelte';

	export let data;
</script>

<pre>
    {JSON.stringify(data, null, 4)}

</pre>

<RichContent richContent={data.post.content} />
