import { GraphQLResolveInfo } from 'graphql';
// import { Greeting } from '../../service/types';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateGreetingInput = {
  id: Scalars['ID'];
  message: Scalars['String'];
  greeter: Scalars['String'];
};

export type CreateGreetingOutput = {
  __typename?: 'CreateGreetingOutput';
  id: Scalars['ID'];
  message: Scalars['String'];
  greeter: Scalars['String'];
};

export type GetGreetingRequest = {
  id: Scalars['ID'];
};

export type GetGreetingResponse = {
  __typename?: 'getGreetingResponse';
  greeting?: Maybe<Greeting>;
};

export type Greeting = {
  __typename?: 'Greeting';
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  greeter?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGreeting: CreateGreetingOutput;
};

export type MutationCreateGreetingArgs = {
  input: CreateGreetingInput;
};

export type Query = {
  __typename?: 'Query';
  getGreeting: GetGreetingResponse;
  greetings?: Maybe<Array<Maybe<Greeting>>>;
};

export type QueryGetGreetingArgs = {
  input: GetGreetingRequest;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  getGreetingRequest: GetGreetingRequest;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  getGreetingResponse: ResolverTypeWrapper<
    Omit<GetGreetingResponse, 'greeting'> & {
      greeting?: Maybe<ResolversTypes['Greeting']>;
    }
  >;
  Greeting: ResolverTypeWrapper<Greeting>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateGreetingInput: CreateGreetingInput;
  CreateGreetingOutput: ResolverTypeWrapper<CreateGreetingOutput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  getGreetingRequest: GetGreetingRequest;
  ID: Scalars['ID'];
  getGreetingResponse: Omit<GetGreetingResponse, 'greeting'> & {
    greeting?: Maybe<ResolversParentTypes['Greeting']>;
  };
  Greeting: Greeting;
  String: Scalars['String'];
  Mutation: {};
  CreateGreetingInput: CreateGreetingInput;
  CreateGreetingOutput: CreateGreetingOutput;
  Boolean: Scalars['Boolean'];
};

export type CreateGreetingOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateGreetingOutput'] = ResolversParentTypes['CreateGreetingOutput']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  greeter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type GetGreetingResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['getGreetingResponse'] = ResolversParentTypes['getGreetingResponse']
> = {
  greeting?: Resolver<Maybe<ResolversTypes['Greeting']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type GreetingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Greeting'] = ResolversParentTypes['Greeting']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  greeter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createGreeting?: Resolver<
    ResolversTypes['CreateGreetingOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateGreetingArgs, 'input'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  getGreeting?: Resolver<
    ResolversTypes['getGreetingResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryGetGreetingArgs, 'input'>
  >;
  greetings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Greeting']>>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  CreateGreetingOutput?: CreateGreetingOutputResolvers<ContextType>;
  getGreetingResponse?: GetGreetingResponseResolvers<ContextType>;
  Greeting?: GreetingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
