// import React from 'react';
// import {
//   render,
//   screen,
//   waitForElementToBeRemoved,
// } from '@testing-library/react';
// import App from './App';

// describe('rendering the App component', () => {
//   describe('rendering the Todo List', () => {
//     test('shows todo items on successful state cycle', async () => {
//       render(<App />);

//       expect(screen.getByText(/loading/i)).toBeInTheDocument();
//       await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
//       expect(screen.getByText(/mocked api/i)).toBeInTheDocument();
//     });
//   });
// });



// import React from 'react';
// import { render, screen, waitForElementToBeRemoved } from '../test/test-utils';
// import { TodoList } from './App';
// import { rest } from 'msw';
// import { server } from './mocks/server';

// describe('rendering the App component', () => {
//   describe('rendering the Todo List', () => {
//     test('shows todo items on successful state cycle', async () => {
//       render(<TodoList />);

//       expect(screen.getByText(/loading/i)).toBeInTheDocument();
//       await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
//       expect(screen.getByText(/mocked api/i)).toBeInTheDocument();
//     });

//     test('shows a failed request message when server request fails', async () => {
//       server.use(
//         rest.get('/api/v1/todos', (_, res, ctx) => {
//           return res(ctx.status(500), ctx.json({ message: 'Internal error' }));
//         }),
//       );

//       render(<TodoList />);

//       expect(screen.getByText(/loading/i)).toBeInTheDocument();
//       await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
//       expect(screen.getByText(/request failed/i)).toBeInTheDocument();
//       screen.debug();
//     });
//   });
// });