import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async ({ params }) => {
	const query = gql`
		{
			post(where: { slug: "${params.slug}" }) {
				slug
				authors {
					name
					slug
					picture {
						url
					}
				}
				coverImage {
					url
				}
				description
				date
				title
				content
				openGraphImage {
					url(transformation: {image: {resize: {height: 630, width: 1200, fit: scale}}})
				}
			}
		}
	`;

	const data = await client.request(query);

	return {
		body: {
			data
		}
	};
};
