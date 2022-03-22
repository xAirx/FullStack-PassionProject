import { ServiceFunction } from '../../lib/service';
import { logger } from '../../logger';
import { MongoGreetingStore } from '../store/greeting';
import { Context, Greeting } from '../types';

export interface Input {
  id: string;
}
export interface Output {
  greeting: Greeting;
}

const store = new MongoGreetingStore();

export const getGreeting: ServiceFunction<Context, Input, Output> = async (
  ctx: Context,
  input: Input
) => {
  validate(input);

  const { id } = input;
  const greeting = await store.getGreeting(id);
  logger.debug({ greeting }, 'service - getGreeting()');
  return { greeting };
};

const validate = (input: Input) => {
  if (!input) {
    throw new Error('input is required');
  }

  const { id } = input;
  if (!id) {
    throw new Error('id is a required property');
  }
};
