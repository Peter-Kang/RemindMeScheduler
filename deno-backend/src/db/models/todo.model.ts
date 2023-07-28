import { db } from '../../utils/connectToDB.ts';
import { ObjectId, Int32 } from '../../../deps.ts';

export interface TodoSchema {
  _id?: ObjectId;
  message: string;
  startDateTime: Date;
  frequencyInHours: Int32;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Todo = db.collection<TodoSchema>('todos');
