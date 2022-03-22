export type ServiceFunction<
  Context,
  Input extends object = {},
  Output extends object = {}
> = (ctx: Context, input: Input) => Promise<Output>;

export type Service<Context> = { [K: string]: ServiceFunction<Context> };

export type MiddleWareFunction<Context> = (
  ctx: Context,
  input: any,
  next: (ctx: Context, input: any) => Promise<any>
) => Promise<any>;

export function withMiddleware<C, S extends Service<C>>(
  service: S,
  middlewareFunction: MiddleWareFunction<C>
): S {
  const ret = Object.keys(service).reduce<S>(
    (acc, serviceFunctionName) => {
      // @ts-ignore
      acc[serviceFunctionName] = async (ctx: C, input: any) => {
        return middlewareFunction(ctx, input, service[serviceFunctionName]);
      };
      return acc;
    },
    { ...service }
  );

  return ret;
}
