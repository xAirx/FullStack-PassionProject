import React from 'react';
import { UserProvider } from './userContext';
import { AppRouter } from './router';

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

export default App;
