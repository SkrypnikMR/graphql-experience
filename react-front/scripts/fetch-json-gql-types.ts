import { writeFileSync } from 'fs';
import { join } from 'path';
import { fetch } from 'cross-fetch';
import { getIntrospectionQuery } from 'graphql';
import { config } from 'dotenv';

config();

const serverUrl = process.env.VITE_GRAPHQL_SERVER_URL;

(async function fetchTypes() {
  try {
    console.log('request to', serverUrl);
    const introspectionQuery = getIntrospectionQuery();
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: introspectionQuery }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error('Error fetching types:', errors);
      return;
    }

    writeFileSync(join(__dirname, '../src/services/graphql/types.json'), JSON.stringify(data, null, 2));
    console.assert('Types fetched and saved to types.json');
  } catch (error) {
    console.error('Error fetching types:', error.message);
  }
})();