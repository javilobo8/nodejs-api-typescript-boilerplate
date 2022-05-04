import mongoose from 'mongoose';
import config from '../config';
import Logger from '../utils/logger';

const logger = new Logger('Mongoose');

export default function connectDatabase() {
  if (process.env.NODE_ENV !== 'test') {
    logger.log('connectig');

    mongoose.connection.on('connected', () => {
      logger.log('connected');
    });
  
    mongoose.connect(config.mongo.uri);
  }
}