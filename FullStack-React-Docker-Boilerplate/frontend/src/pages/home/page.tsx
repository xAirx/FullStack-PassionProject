import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { GreetingsDisplay } from './greetings/display';

export const Page: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <GreetingsDisplay />
    </Container>
  );
};
