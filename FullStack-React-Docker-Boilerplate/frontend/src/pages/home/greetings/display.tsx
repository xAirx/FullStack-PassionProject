import React, { useEffect, useReducer } from 'react';
import { sdk } from '../../../graphql/sdk';
import { Error } from './error';
import { GreetingsList } from './list';
import { Loading } from './loading';

export interface Greeting {
  greeter: string;
  id: string;
  message: string;
}

enum STEPS {
  INIT,
  LOADING_GREETINGS,
  GREETINTS_LOADED,
  ERROR,
}

enum ACTIONS {
  LIST_GREETINGS_REQUEST_SENT,
  LIST_GREETINGS_SUCCEEDED,
  LIST_GREETINGS_FAILED,
}

export interface ListGreetingsRequestSent {
  type: ACTIONS.LIST_GREETINGS_REQUEST_SENT;
  payload: {};
}

export interface ListGreetingsSucceeded {
  type: ACTIONS.LIST_GREETINGS_SUCCEEDED;
  payload: {
    greetings: Greeting[] | any;
  };
}
export interface ListGreetingsFailed {
  type: ACTIONS.LIST_GREETINGS_FAILED;
  payload: {
    error: string;
  };
}

export type Action =
  | ListGreetingsRequestSent
  | ListGreetingsSucceeded
  | ListGreetingsFailed;

export interface State {
  step: STEPS.INIT | STEPS.LOADING_GREETINGS | STEPS.GREETINTS_LOADED | STEPS.ERROR;
  greetings?: Greeting[];
  error?: string;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.LIST_GREETINGS_FAILED:
      return {
        ...state,
        step: STEPS.ERROR,
        error: action.payload.error,
      };
    case ACTIONS.LIST_GREETINGS_REQUEST_SENT:
      return {
        ...state,
        step: STEPS.LOADING_GREETINGS,
      };
    case ACTIONS.LIST_GREETINGS_SUCCEEDED:
      return {
        ...state,
        step: STEPS.GREETINTS_LOADED,
        greetings: action.payload.greetings,
      };
    default:
      return state;
  }
};

export const GreetingsDisplay: React.FC = ({}) => {
  const [state, dispatch] = useReducer(reducer, {
    step: STEPS.INIT,
    greetings: [],
  });

  useEffect(() => {
    loadGreetings(dispatch);
  }, [dispatch]);

  if (state.step === STEPS.ERROR) {
    return <Error message={state.error} />;
  }

  if (state.step === STEPS.LOADING_GREETINGS) {
    return <Loading />;
  }

  return <GreetingsList greetings={state.greetings} />;
};

async function loadGreetings(dispatch: React.Dispatch<Action>) {
  dispatch({ type: ACTIONS.LIST_GREETINGS_REQUEST_SENT, payload: {} });

  await sdk
    .listGreetings()
    .then(data => {
      dispatch({
        type: ACTIONS.LIST_GREETINGS_SUCCEEDED,
        payload: {
          greetings: data.greetings,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ACTIONS.LIST_GREETINGS_FAILED,
        payload: {
          error: 'An error occurred loading greetings',
        },
      });
    });
}
