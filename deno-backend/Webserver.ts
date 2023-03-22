import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

app.use(oakCors());

app.use(async (requestEvent) => {
    const result = requestEvent.request.body(); 
    //requestEvent.response.body = await result.value;
    let body = '';
    body = `Alive Update! Your user-agent is:\n\n${
      requestEvent.request.headers.get("user-agent") ?? "Unknown"
    }`;
    if( requestEvent.request.method === 'GET' )
    {
      const url = new URL(requestEvent.request.url, `http://${requestEvent.request.headers.get('host')}`);
      if( url.pathname === '/HealthCheck' )
      {
        body = 'Alive!!';
      }
    }
    requestEvent.response.body = await body;
  });

app.use(router.routes());
await app.listen({ port: 8000 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);