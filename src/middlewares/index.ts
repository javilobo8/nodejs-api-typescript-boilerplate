import express from 'express';
import helmet from 'helmet';
import cors from './cors';
import expressLogger from './express-logger';

export function addPreMiddlewares(app: express.Application) {
  app.use(helmet());
  app.use(cors);
  app.use(express.json());

  if (process.env.NODE_ENV !== 'test') {
    app.use(expressLogger);
  }
}

export function addPostMiddlewares(app: express.Application) {

}