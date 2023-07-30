import { Application, oakCors, Router, RouterContext } from "./deps.ts";
import appRouter from "./src/routes/index.ts";
import todoController from "./src/controllers/todo.controller.ts";

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
  ws.onopen = async () => {
    console.log("Connected to client");
    //send the inital data over
    const todos: {} = await todoController.getActiveTodoController();
    if (ws.readyState !== WebSocket.CLOSED) {
      const value = JSON.stringify(todos);
      ws.send(value);
    }
  };
  ws.onclose = () => console.log("Disconnected from client");
  ws.onmessage = (m) => {
    console.log(m.data);
  };
};

router.get<string>("/wss", (ctx: RouterContext<string>) => {
  const sock: WebSocket = ctx.upgrade();
  webSocketInitReminderHandlers(sock);
  setInterval(async () => {
    if (sock.readyState !== WebSocket.CLOSED) {
      const todos: {} = await todoController.getActiveTodoController();
    }
    if (sock.readyState !== WebSocket.CLOSED) {
      const value = JSON.stringify(todos);
      sock.send(value);
    }
  }, 10000);
  return sock;
});

//evoke routers
appRouter.init(app);
app.use(router.routes()); // Implement our router
app.use(router.allowedMethods()); // Allow router HTTP methods

const port = 8000;
await app.listen({ port });
