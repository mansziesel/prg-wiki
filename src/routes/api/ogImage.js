// export const get = async ({ url }) => {
// 	const width = 1200;
// 	const height = 630;
// 	let fontSize = 64;
// 	let lineHeight = fontSize * 1.3975;
// 	let textArtistY = 120;
// 	let textTitleY = textArtistY + 220;

// 	const canvas = createCanvas(width, height);
// 	const context = canvas.getContext('2d');

// 	const title = url.searchParams.get('title') || 'PRG Wiki';
// 	const sub = url.searchParams.get('sub');
// 	const tagsStr = url.searchParams.get('tags');
// 	const author = url.searchParams.get('author');

// 	if (tagsStr) {
// 		var tags = tagsStr.split(',');
// 	}
// 	return {
// 		body: { title, sub, tags, author }
// 	};
// };
