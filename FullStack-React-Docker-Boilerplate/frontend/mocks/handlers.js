import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]


// import { rest } from 'msw';

// export const handlers = [
//   rest.get('/api/v1/todos', (_, res, ctx) => {
//     return res(
//       ctx.delay(1500),
//       ctx.json([
//         {
//           id: '1',
//           title: 'Mocked API',
//           done: false,
//         },
//         {
//           id: '2',
//           title: 'Task Two',
//           done: false,
//         },
//         {
//           id: '3',
//           title: 'Task Three',
//           done: false,
//         },
//       ]),
//     );
//   }),

//   rest.post('/api/v1/todos', (req, res, ctx) => {
//     return res(
//       ctx.delay(1500),
//       ctx.json({
//         ...req.body,
//         id: generatedId(),
//       }),
//     );
//   }),
// ];