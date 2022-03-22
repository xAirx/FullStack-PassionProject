import { logger } from '../logger';
import { GraphqlContext } from './context';
import { GetGreetingResponse, Resolvers } from './generated/resolvers';
import GreetingService from '../greeting/service';

export const resolvers: Resolvers<GraphqlContext> = {
  Greeting: {
    id: ({ id }) => id,
    message: ({ message }) => message,
    greeter: ({ greeter }) => greeter,
  },
  Query: {
    greetings: async (_, __, ctx) => {
      const { greetings } = await GreetingService.listGreetings(ctx, {});
      return greetings;
    },
    getGreeting: async (_, { input }, ctx) => {
      const { id } = input;
      const result = await ctx.greetingDataLoader.load(id);
      logger.debug({ result }, 'resolvers - getGreeting()');
      return { greeting: result } as GetGreetingResponse;
    },
  },
  Mutation: {
    createGreeting: async (_, { input }, ctx) => {
      const { greeter, id, message } = input;
      logger.debug({ greeter, id, message }, 'resolvers - createGreeting()');
      const result = await GreetingService.createGreeting(ctx, {
        greetingCreateInput: { greeter, id, message },
      });
      logger.debug({ result }, 'resolvers - createGreeting()');
      return { greeter, id, message };
    },
  },
};
