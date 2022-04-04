import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async ({ params }) => {
	const query = gql`
		{
			author(where: { slug: "${params.slug}" }) {
				name
                bio
                picture {
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
