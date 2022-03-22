import { ServiceFunction } from '../../lib/service';
import { logger } from '../../logger';
import { Context, Greeting } from '../types';
import { MongoGreetingStore } from '../store/greeting';

export interface GreetingCreateInput {
  greeter: string;
  id: string;
  message: string;
}

export interface Input {
  greetingCreateInput: GreetingCreateInput;
}
export interface Output {
  Greeting: Greeting;
}

const store = new MongoGreetingStore();

export const createGreeting: ServiceFunction<Context, Input, Output> = async (
  ctx: Context,
  input: Input
) => {
  validate(input);

  const { greetingCreateInput } = input;
  const { greeter, id, message } = greetingCreateInput;
  logger.debug({ greetingCreateInput }, 'service - createGreeting()');

  if (!greetingCreateInput) {
    return;
  }

  const Greeting = await store.createGreeting(greeter, id, message);
  logger.debug({ Greeting }, 'service - createGreeting()');

  return { Greeting };
};

const validate = (input: Input) => {
  const { greetingCreateInput } = input;
  if (!greetingCreateInput) {
    throw new Error('greetingCreateInput is a required property');
  }
};
