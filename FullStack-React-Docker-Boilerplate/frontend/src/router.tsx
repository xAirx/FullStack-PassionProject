import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as home from './pages/home';
import { UserContext } from './userContext';

export const AppRouter: React.FC = () => {
  const [state] = useContext(UserContext);

  if (state.phase === 'init') {
    return <div>loading...</div>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <home.Page />
          </Route>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
};
