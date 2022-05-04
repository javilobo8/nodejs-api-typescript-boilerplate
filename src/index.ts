process.on('unhandledRejection', (reason, promise) => {
  console.error(reason, 'Unhandled Rejection at Promise', promise);
});

process.on('uncaughtException', (error) => {
  console.error(error, 'Uncaught Exception thrown');
});

import './utils/console-stamp';
import app from './app';
import config from './config';
import database from './database';

database();

app.listen(config.port, () => {
  console.log(`Server Listening on port ${config.port}`);
});