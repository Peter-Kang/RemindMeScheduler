import { Application,oakCors,Router, RouterContext } from './deps.ts';
import appRouter from './src/routes/index.ts';

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

//evoke routers
appRouter.init(app)
app.use(router.routes()); // Implement our router
app.use(router.allowedMethods()); // Allow router HTTP methods

const port = 8000;
await app.listen({ port });
