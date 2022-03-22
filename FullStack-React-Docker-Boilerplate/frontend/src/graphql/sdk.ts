import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/sdk';

const url = 'http://localhost:5002/graphql';

const client = new GraphQLClient(url, {
  credentials: 'omit',
});

export const sdk = getSdk(client);
