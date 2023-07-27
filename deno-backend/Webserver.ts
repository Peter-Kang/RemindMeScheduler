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
/*
const webSocketInitReminderHandlers = (ws: WebSocket) => {
  ws.onopen = () => {
    console.log("Connected to client");
    ws.send("Hello from server!");
  };
  ws.onclose = () => console.log("Disconnected from client");
};

const webSocket:WebSocket = router.get<string>(
  "/wss",
  async (ctx: RouterContext<string>) => {
    const sock = await ctx.upgrade();
    webSocketInitReminderHandlers(sock);
    return sock;
  }
);

async function reqHandler(req: Request) {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 });
  }
  const { socket: ws, response } = Deno.upgradeWebSocket(req);
  return response;
}

setInterval(() => {}, 60000);
*/
//evoke routers
appRouter.init(app);
app.use(router.routes()); // Implement our router
app.use(router.allowedMethods()); // Allow router HTTP methods

const port = 8000;
await app.listen({ port });
