import {
  Application,
  Context,
  oakCors,
  Router,
  RouterContext,
} from "./deps.ts";
import appRouter from "./src/routes/index.ts";

const app = new Application();
const router = new Router(); //Create the new router

app.use(oakCors());

//Health Check API
router.get<string>("/HealthCheck", (ctx: RouterContext<string>) => {
  ctx.response.body = {
    status: "success",
    message: "Alive!",
  };
});

const webSocketInitReminderHandlers = (ws: WebSocket) => {
  ws.onopen = () => {
    console.log("Connected to client");
  };
  ws.onclose = () => console.log("Disconnected from client");
  ws.onmessage = (m) => {
    console.log(m.data);
  };
};

router.get<string>("/wss", (ctx: RouterContext<string>) => {
  const sock: WebSocket = ctx.upgrade();
  webSocketInitReminderHandlers(sock);
  setInterval(() => {
    sock.send("hello");
  }, 60000);
  return sock;
});

//evoke routers
appRouter.init(app);
app.use(router.routes()); // Implement our router
app.use(router.allowedMethods()); // Allow router HTTP methods

const port = 8000;
await app.listen({ port });
