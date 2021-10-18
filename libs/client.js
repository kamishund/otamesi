import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'company',
  apiKey: process.env.API_KEY,
});