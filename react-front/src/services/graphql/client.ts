import { ApolloClient, InMemoryCache } from '@apollo/client';

const serverUrl = (import.meta.env.VITE_GRAPHQL_SERVER_URL as string) || '';
console.log('serverUri', serverUrl);

if (!serverUrl) {
    console.error('GRAPHQL_SERVER_URL is not set in the environment variables');
}

const client = new ApolloClient({
    uri: serverUrl,
    cache: new InMemoryCache(),
});

export default client;
