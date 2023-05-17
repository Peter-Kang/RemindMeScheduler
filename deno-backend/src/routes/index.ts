import { Application } from '../../deps.ts';
import todoRouter from './todo.routes.ts';

function init(app: Application) {
  app.use(todoRouter.prefix('/ToDo/').routes());
}

export default {
  init,
};
