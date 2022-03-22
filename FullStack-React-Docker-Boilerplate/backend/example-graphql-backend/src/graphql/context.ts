import { Request } from 'express';
import * as DataLoaders from './dataloaders';

export type GraphqlContext = ReturnType<typeof context>;

export function context({ req }: { req: Request }) {
    const token = 'Make way for the bad guy!';
    const ctx = { token };

    return {
        ...ctx,
        greetingDataLoader: DataLoaders.greetingDataLoader(ctx),
    };
}
