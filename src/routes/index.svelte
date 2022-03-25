<script context="module">
	import { gql } from 'graphql-request';
	import client from '$lib/gqlClient';

	const query = gql`
		{
			authors {
				name
				picture {
					url
				}
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
</script>

<pre>
    {JSON.stringify(data, null, 4)}
</pre>
