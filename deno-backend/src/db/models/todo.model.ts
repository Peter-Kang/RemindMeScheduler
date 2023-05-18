import { db } from '../../utils/connectToDB.ts';
import { ObjectId } from '../../../deps.ts';
import { Int32 } from 'https://deno.land/x/web_bson@v0.2.3/mod.ts';

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
