import { db } from '../../utils/connectDB.ts';
import { ObjectId } from '../../../deps.ts';

export interface TodoSchema {
  _id?: ObjectId;
  message: string;
  startDateTime: Date;
  frequencyInHours: integer;
  createdAt: Date;
  updatedAt: Date;
}

export const Todo = db.collection<TodoSchema>('todos');
