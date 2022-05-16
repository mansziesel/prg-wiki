import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async () => {
	const query = gql`
		{
			posts {
				slug
				title
				description
				coverImage {
					url
				}
				tags
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
