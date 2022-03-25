// @ts-nocheck
import { GraphQLClient } from 'graphql-request';

export default new GraphQLClient(import.meta.env.VITE_GQL_ENDPOINT);
