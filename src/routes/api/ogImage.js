export const get = async ({ url }) => {
	const title = url.searchParams.get('title') || 'PRG Wiki';
	const sub = url.searchParams.get('sub');
	const tagsStr = url.searchParams.get('tags');
	const author = url.searchParams.get('author');

	if (tagsStr) {
		var tags = tagsStr.split(',');
	}
	return {
		body: { title, sub, tags, author }
	};
};
