import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async ({ params }) => {
	const query = gql`
		{
			assignment(where: { slug: "${params.slug}" }) {
				title
                slug
                content
                tags
                description
                demo
                
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
