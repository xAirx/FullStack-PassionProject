import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type _Service = {
   __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
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
  _service: _Service;
  getGreeting: GetGreetingResponse;
  greetings?: Maybe<Array<Maybe<Greeting>>>;
};


export type QueryGetGreetingArgs = {
  input: GetGreetingRequest;
};

export type CreateGreetingMutationVariables = {
  input: CreateGreetingInput;
};


export type CreateGreetingMutation = (
  { __typename?: 'Mutation' }
  & { createGreeting: (
    { __typename?: 'CreateGreetingOutput' }
    & Pick<CreateGreetingOutput, 'greeter' | 'id' | 'message'>
  ) }
);

export type GetGreetingQueryVariables = {
  input: GetGreetingRequest;
};


export type GetGreetingQuery = (
  { __typename?: 'Query' }
  & { getGreeting: (
    { __typename?: 'getGreetingResponse' }
    & { greeting?: Maybe<(
      { __typename?: 'Greeting' }
      & Pick<Greeting, 'greeter' | 'id' | 'message'>
    )> }
  ) }
);

export type ListGreetingsQueryVariables = {};


export type ListGreetingsQuery = (
  { __typename?: 'Query' }
  & { greetings?: Maybe<Array<Maybe<(
    { __typename?: 'Greeting' }
    & Pick<Greeting, 'greeter' | 'id' | 'message'>
  )>>> }
);


export const CreateGreetingDocument = gql`
    mutation CreateGreeting($input: CreateGreetingInput!) {
  createGreeting(input: $input) {
    greeter
    id
    message
  }
}
    `;
export const GetGreetingDocument = gql`
    query GetGreeting($input: getGreetingRequest!) {
  getGreeting(input: $input) {
    greeting {
      greeter
      id
      message
    }
  }
}
    `;
export const ListGreetingsDocument = gql`
    query listGreetings {
  greetings {
    greeter
    id
    message
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateGreeting(variables: CreateGreetingMutationVariables): Promise<CreateGreetingMutation> {
      return withWrapper(() => client.request<CreateGreetingMutation>(print(CreateGreetingDocument), variables));
    },
    GetGreeting(variables: GetGreetingQueryVariables): Promise<GetGreetingQuery> {
      return withWrapper(() => client.request<GetGreetingQuery>(print(GetGreetingDocument), variables));
    },
    listGreetings(variables?: ListGreetingsQueryVariables): Promise<ListGreetingsQuery> {
      return withWrapper(() => client.request<ListGreetingsQuery>(print(ListGreetingsDocument), variables));
    }
  };
}