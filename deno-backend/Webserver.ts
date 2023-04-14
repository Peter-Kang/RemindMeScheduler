import { Application,oakCors,Router, mongo } from './deps.ts';
import config from './config/default'

const app = new Application();
const router = new Router(); //Create the new router

app.use(oakCors());

// Middleware Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

//Health Check API
router.get<string>('/HealthCheck', (ctx: RouterContext<string>) => {
  ctx.response.body = {
    status: "success",
    message: "Alive!"
  };
});

/*
app.use(async (ctx) => {
  //ctx.response.body = await result.value;
  let body = '';
  body = `Alive!! Your user-agent is:\n\n${ctx.request.headers.get("user-agent") ?? "Unknown"
    }`;
  const requestMethod = ctx.request.method;
  const url = new URL(ctx.request.url, `http://${ctx.request.headers.get('host')}`);
  switch (requestMethod) {
    case "GET":
      if (url.pathname === '/HealthCheck') {
        body = 'Alive!';
      }
      if (url.pathname === '/GetAllToDo') {
        const scaffoldResponse = [{ id: 0, message: 'Fake ToDo', startDateTime: '01/05/2023' },{ id: 2, message: 'Fake ToDo2', startDateTime: '02/05/2021' }];
        const json = JSON.stringify(scaffoldResponse);
        console.log(json);
        body = json;
      }
      break;
    case "POST":
      if (url.pathname === '/CreateToDo') {
        const jsonResultValue = await ctx.request.body({ type: "json" }).value;
        console.log(jsonResultValue);
      }
      break;
    default:
      break;
  }
  ctx.response.body = await body;
});
*/

app.use(router.routes()); // Implement our router
app.use(router.allowedMethods()); // Allow router HTTP methods

app.addEventListener('listen', ({ port, secure }) => {
  console.log(
    `? Server started on ${secure ? 'https://' : 'http://'}localhost:${port}`
  );
});

const port = config.port;
await app.listen({ port });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);