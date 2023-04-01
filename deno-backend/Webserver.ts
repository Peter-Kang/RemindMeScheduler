import { Application, Router, oakCors } from './deps.ts';

const app = new Application();
const router = new Router();

app.use(oakCors());

app.use(async (ctx) => {
    //ctx.response.body = await result.value;
    let body = '';
    body = `Alive!! Your user-agent is:\n\n${
      ctx.request.headers.get("user-agent") ?? "Unknown"
    }`;
    const requestMethod = ctx.request.method;
    const url = new URL(ctx.request.url, `http://${ctx.request.headers.get('host')}`);
    switch (requestMethod){
      case "GET":
        if( url.pathname === '/HealthCheck' )
        {
          body = 'Alive!';
        }
        break;
      case "POST":
        if( url.pathname === '/CreateToDo' )
        {
          const jsonResultValue = await ctx.request.body({ type: "json" }).value;
          console.log(jsonResultValue);
        }
        break;
      default:
        break;
    }
    ctx.response.body = await body;
  });

app.use(router.routes());
await app.listen({ port: 8000 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);