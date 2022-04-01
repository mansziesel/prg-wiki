export const get = async ({ url }) => {
	const title = url.searchParams.get('title') || 'PRG Wiki';
	const sub = url.searchParams.get('sub');
	const tags = url.searchParams.get('tags');
	const author = url.searchParams.get('author');

	return {
		body: { title, sub, tags, author }
	};
}
