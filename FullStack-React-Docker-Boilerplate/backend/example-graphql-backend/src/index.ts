import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { ENV } from './env';
import { server } from './graphql';
import { logger } from './logger';

(async () => {
  logger.info('demo-gql service starting', { ENV });

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use('/healthy', async (req, res) => {
    res.send({
      message: 'demo-gql is ok',
    });
  });

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: ENV.RUN_PORT }, () => {
    logger.info(`demo-gql listening at :${ENV.RUN_PORT}...`);
  });
})();
