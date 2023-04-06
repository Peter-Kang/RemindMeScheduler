import { z } from '../../../deps.ts';

export const createToDoSchema = z.object({
  body: z.object({
    message: z.string({
      required_error: 'Message is required',
    }),
    frequencyInHours: z.string({
      required_error: 'Frequency In Hours is required',
    }),
    startDateTime: z.string({
      required_error: 'StartDate is required',
    }),
  }),
});

const params = {
  params: z.object({
    todoId: z.string(),
  }),
};

export const getToDoSchema = z.object({
  ...params,
});

export const updateToDoSchema = z.object({
  ...params,
  body: z
    .object({
      message: z.string(),
      frequencyInHours: z.string(),
      startDateTime: z.string(),
    })
    .partial(),
});

export const deleteToDoSchema = z.object({
  ...params,
});

export type CreateTodoInput = z.TypeOf<typeof createToDoSchema>['body'];
export type GetTodoInput = z.TypeOf<typeof getToDoSchema>['params'];
export type UpdateTodoInput = z.TypeOf<typeof updateToDoSchema>;
export type DeleteTodoInput = z.TypeOf<typeof deleteToDoSchema>['params'];
