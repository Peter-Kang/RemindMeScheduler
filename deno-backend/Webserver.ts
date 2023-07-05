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
/*
router.get<string>("/wss", (ctx) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501);
  }
  const ws = ctx.upgrade();
  ws.onopen = () => {
    console.log("Connected to client");
    ws.send("Hello from server!");
  };
  ws.onmessage = (m) => {
    console.log("Got message from client: ", m.data);
    ws.send(m.data as string);
    ws.close();
  };
  ws.onclose = () => console.log("Disconnected from client");
});
*/

const webSocketReminderHandler = (
  ws: WebSocket) => 
{
  ws.onopen = () => {
    console.log("Connected to client");
    ws.send("Hello from server!");
  };
  ws.onmessage = (m) => {
    console.log("Got message from client: ", m.data);
    ws.send(m.data as string);
    ws.close();
  };
  ws.onclose = () => console.log("Disconnected from client");
};
router.get<string>("/wss", async ctx=>{ 
  const sock = await ctx.upgrade();
  webSocketReminderHandler(sock);});

//evoke routers
appRouter.init(app)
app.use(router.routes()); // Implement our router
app.use(router.allowedMethods()); // Allow router HTTP methods

const port = 8000;
await app.listen({ port });
