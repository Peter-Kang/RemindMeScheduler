import { Router } from '../../deps.ts'
import todoController from '../controllers/todo.controller.ts';
import { createToDoSchema, updateToDoSchema } from '../db/schema/todo.schema.ts'
import validate from '../middleware/validate.ts'


const router = new Router();

router.get<string>('/', todoController.findAllTodosController);
router.post<string>(
  '/',
  validate(createToDoSchema),
  todoController.createTodoController
);
router.patch<string>(
  '/:todoId',
  validate(updateToDoSchema),
  todoController.updateTodoController
);
router.get<string>('/:todoId', todoController.findTodoController);
router.delete<string>('/:todoId', todoController.deleteTodoController);

export default router;