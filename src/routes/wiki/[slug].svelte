<script context="module">
	import { gql } from 'graphql-request';
	import client from '$lib/gqlClient';

	export async function load({ params }) {
		const query = gql`
		{
			post(where: { slug: "${params.slug}" }) {
				title
                description
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
	export let data;
	console.log(data);
</script>

<pre>
    {JSON.stringify(data)}
</pre>
