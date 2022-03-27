export const get = async () => {
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
					    }
					}`
			})
		}
	);
	const { data } = await res.json();

	return {
		body: {
			data
		}
	};
};
