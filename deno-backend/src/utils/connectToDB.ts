// import { MongoClient } from '../../deps.ts';

// const conn = async () => {
//   const client = new MongoClient();
//   const srv = `mongodb://admin:password123@mongo:6000/deno_mongodb?authMechanism=SCRAM-SHA-1&retryWrites=true&w=majority`
//   await client.connect(srv);
//   return client;
// }

// export const db = await conn();


import { MongoClient } from '../../deps.ts';
const client: MongoClient = new MongoClient();
const db = await client.connect('mongodb://admin:password123@172.17.0.1:6000/deno_mongodb?authSource=admin');
console.log("Worked");
export { db };

//Found the solution here: changed ip from localhost to 172.17.0.1
//https://github.com/denoland/deno/issues/7686#issuecomment-1380142892
//mongodb://admin:password123@172.17.0.1:6000/deno_mongodb