import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async ({ params }) => {
	const query = gql`
		{
			post(where: { slug: "${params.slug}" }) {
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
