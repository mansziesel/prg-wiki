import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export const get = async () => {
	const query = gql`
		{
			authors {
				name
				picture {
					url
				}
				slug
				intro
				bio
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
