import { Db, Cursor } from 'mongodb';
import { Greeting } from '../types';
import { getDb } from './db';

export interface GreetingStore {
  listGreetings(): Promise<Greeting[] | any>;
  getGreeting(id: string): Promise<Greeting>;
  createGreeting(greeter: string, id: string, message: string): Promise<any>;
}

const COLLECTION_NAME = 'greetings';

export class MongoGreetingStore implements GreetingStore {
  async listGreetings(): Promise<Greeting[] | any> {
    const db: Db = await getDb();
    return await db.collection(COLLECTION_NAME).find({}).toArray();
  }

  async getGreeting(id: string): Promise<Greeting> {
    const db: Db = await getDb();
    return await db.collection(COLLECTION_NAME).findOne({ id });
  }

  async createGreeting(greeter: string, id: string, message: string): Promise<any> {
    const db: Db = await getDb();
    return await db
      .collection(COLLECTION_NAME)
      .updateOne({ id }, { $set: { greeter, id, message } }, { upsert: true });
  }
}
