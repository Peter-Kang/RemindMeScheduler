import { MongoClient } from '../../deps.ts';
import config from '../../config/default.ts';

const client: MongoClient = new MongoClient();

const db = await client.connect('mongodb://admin:password123@mongo:6000/deno_mongodb');

export { db };