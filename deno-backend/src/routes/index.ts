import { Application } from '../../deps.ts';
import todoRouter from './todo.routes.ts';

function init(app: Application) {
  app.use(todoRouter.prefix('/api/').routes());
}

export default {
  init,
};
