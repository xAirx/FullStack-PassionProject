import { Db, MongoClient } from 'mongodb';
import { ENV } from '../../env';
import { logger } from '../../logger';

const DB_NAME = 'local';
let connection = null;

export const getDb = async (): Promise<Db> => {
  const dbConnection = await getDbConnection();
  return dbConnection.db(DB_NAME);
};

export const getDbConnection = async (): Promise<MongoClient> => {
  if (connection) {
    return connection;
  }

  connection = await MongoClient.connect(ENV.DB_SERVER_URL).then((client) => {
    process.on('exit', () => {
      if (client != null) {
        client.close().then(() => logger.info(`successfully closed mongo connection`));
      }
    });
    return client;
  });

  return connection;
};
