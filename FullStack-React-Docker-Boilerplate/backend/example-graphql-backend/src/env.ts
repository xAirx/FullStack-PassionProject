export const ENV = {
  DB_SERVER_URL: process.env.DB_SERVER_URL || 'mongodb://localhost:27017',
  RUN_PORT: process.env.RUN_PORT || '5002',
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
};
