export async function get({ url }) {
	// `params.id` comes from [id].js
	const ref = url.searchParams.get('ref') || 'none';
	const test = url.searchParams.get('test') || 'test';

	return {
		body: { ref, test }
	};

	return {
		status: 404
	};
}
