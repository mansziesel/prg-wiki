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
						authors {
							name
							picture {
								url
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

<pre>
    {JSON.stringify(data, null, 4)}
</pre>
