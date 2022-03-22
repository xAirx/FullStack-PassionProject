import React, { useEffect, useReducer, Context, Dispatch } from 'react';
import { userReducer, State, Action } from './userReducer';
// import { sdk } from './graphql/sdk';

const initialState: State = { phase: 'init' };

export const UserContext: Context<[State, Dispatch<Action>]> = React.createContext([
  initialState,
  (() => {}) as React.Dispatch<Action>,
]);

export const UserProvider: React.FC = props => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    (async () => {
      // const { self: user } = await sdk.self();
      const user = null;

      if (!user) {
        dispatch({ type: 'LoggedOut' });
        return;
      }

      dispatch({ type: 'LoggedIn', payload: { user } });
    })();
  }, []);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
