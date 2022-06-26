import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async () => {
	const query = gql`
		{
			authors {
				slug
				name
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
