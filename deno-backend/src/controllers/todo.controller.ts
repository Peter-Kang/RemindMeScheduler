import { AggregateCursor } from "https://deno.land/x/mongo@v0.30.1/src/collection/commands/aggregate.ts";
import type { RouterContext } from "../../deps.ts";
import { Bson, Int32 } from "../../deps.ts";
import { Todo } from "../db/models/todo.model.ts";
import { TodoSchema } from "../db/models/todo.model.ts";
import type {
  CreateTodoInput,
  UpdateTodoInput,
} from "../db/schema/todo.schema.ts";

// [...] Create Todo Controller
const createTodoController = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    //wait for a value
    const { message, startDateTime, frequencyInHours }: CreateTodoInput =
      await request.body().value;
    //validation
    const totoExists = await Todo.findOne({ message });
    if (totoExists) {
      response.status = 409;
      response.statusText = "Create fail. Title already exists";
      response.body = {
        status: "fail",
        message: "Todo with that title already exists",
      };
      return;
    }

    //prepare parameters
    const createdAt = new Date();
    const updatedAt = createdAt;
    const startDateTimeDate = new Date(startDateTime);
    const frequencyInHoursInt32 = new Number(frequencyInHours);
    const status = "incomplete";
    //add it
    const todoId: string | Bson.ObjectId = await Todo.insertOne({
      message,
      startDateTime: startDateTimeDate,
      frequencyInHours: frequencyInHoursInt32,
      status,
      createdAt,
      updatedAt,
    });

    if (!todoId) {
      response.status = 500;
      response.body = { status: "error", message: "Error creating todo" };
      return;
    }

    //check if it is created
    const todo = await Todo.findOne({ _id: todoId });
    response.status = 201;
    response.statusText = "Created";
    response.body = {
      status: "success",
      data: { todo },
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

// [...] Update Todo Controller
const updateTodoController = async ({
  params,
  request,
  response,
}: RouterContext<string>) => {
  try {
    const payload: UpdateTodoInput["body"] = await request.body().value;
    const startDate = new Date(payload.startDateTime);
    console.log(payload); //update freq to number
    const updatedInfo = await Todo.updateOne(
      { _id: new Bson.ObjectId(params.todoId) },
      { $set: { ...payload, startDateTime: startDate, updatedAt: new Date() } },
      { ignoreUndefined: true }
    );

    if (!updatedInfo.matchedCount) {
      response.status = 404;
      response.body = {
        status: "fail",
        message: "No todo with that Id exists",
      };
      return;
    }

    const updatedTodo = await Todo.findOne({ _id: updatedInfo.upsertedId });

    response.status = 200;
    response.body = {
      status: "success",
      data: { todo: updatedTodo },
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

// [...] Find One Todo Controller
const findTodoController = async ({
  params,
  response,
}: RouterContext<string>) => {
  try {
    const todo = await Todo.findOne({ _id: new Bson.ObjectId(params.todoId) });

    if (!todo) {
      response.status = 404;
      response.body = {
        status: "success",
        message: "No todo with that Id exists",
      };
      return;
    }

    response.status = 200;
    response.body = {
      status: "success",
      data: { todo },
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

// [...] Find All Todos Controller
const findAllTodosController = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const page = request.url.searchParams.get("page");
    const limit = request.url.searchParams.get("limit");
    const intPage = page ? parseInt(page) : 1;
    const intLimit = limit ? parseInt(limit) : 10;
    const skip = (intPage - 1) * intLimit;
    const pipeline = [
      { $match: {} },
      {
        $skip: skip,
      },
      {
        $limit: intLimit,
      },
    ];

    const cursor: AggregateCursor<TodoSchema> = Todo.aggregate(pipeline);
    const cursorTodos = cursor.map((todo: TodoSchema) => todo);
    const todos = await cursorTodos;

    response.status = 200;
    response.body = {
      status: "success",
      results: todos.length,
      data: { todos },
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

// [...] Delete Todo Controller
const deleteTodoController = async ({
  params,
  response,
}: RouterContext<string>) => {
  try {
    await Todo.deleteOne({
      _id: new Bson.ObjectId(params.todoId),
    });
    const numberOfTodo = await Todo.countDocuments({
      _id: new Bson.ObjectId(params.todoId),
    });
    console.log(numberOfTodo);
    if (numberOfTodo !== 0) {
      response.status = 404;
      response.body = {
        status: "success",
        message: "No todo with that Id exists",
      };
      return;
    }

    response.status = 204;
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

// Get all reminders that are active
const getActiveTodoController = async () => {
  try {
    const pipeline = [
      {
        $match: {
          status: {
            $in: ["incomplete", "autorepeat"],
          }, //get the ones that are past the current time
          startDateTime: {
            $lte: new Date(),
          },
        },
      },
    ];

    const cursor = Todo.aggregate(pipeline) as AggregateCursor<TodoSchema>;
    const cursorTodos = cursor.map((todo: TodoSchema) => todo);
    const todos = await cursorTodos;
    console.log(todos);
    return todos;
  } catch (_error) {
    return {};
  }
};

const markDoneTodoController = async (id: string) => {
  //Check if the todo is set to autorepeat or incomplete
  const todoExisting = await Todo.findOne({
    _id: new Bson.ObjectId(id),
    status: {
      $in: ["incomplete", "autorepeat"],
    },
  });

  if (todoExisting) {
    let statusToUpdate: string = "autorepeat";
    const nextDate = new Date();
    if (todoExisting.status === "incomplete") {
      statusToUpdate = "completed";
    } else {
      nextDate.setHours(
        nextDate.getHours() + Number(todoExisting.frequencyInHours)
      );
    }
    Todo.updateOne(
      { _id: new Bson.ObjectId(id) },
      {
        $set: {
          status: statusToUpdate,
          updatedAt: new Date(),
          startDateTime: nextDate,
        },
      },
      { ignoreUndefined: true }
    );
  }
};

export default {
  createTodoController,
  updateTodoController,
  findTodoController,
  findAllTodosController,
  deleteTodoController,
  getActiveTodoController,
  markDoneTodoController,
};
