import { logger } from '../../logger';
import { ServiceFunction } from '../../lib/service';
import { MongoGreetingStore } from '../store/greeting';
import { Context, Greeting } from '../types';

export interface Input {}

export interface Output {
  greetings: Greeting[];
}

const store = new MongoGreetingStore();

export const listGreetings: ServiceFunction<Context, Input, Output> = async (
  ctx: Context,
  input: Input
) => {
  const greetings = await store.listGreetings();
  logger.debug({ greetings }, 'service - listGreetings()');
  return { greetings };
};
