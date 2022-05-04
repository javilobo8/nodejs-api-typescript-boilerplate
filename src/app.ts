import { default as express } from 'express';

import bindControllers from './controllers'
import { ResponseError } from './errors';
import { addPreMiddlewares, addPostMiddlewares } from './middlewares';

const app = express();

addPreMiddlewares(app);
bindControllers(app);
addPostMiddlewares(app);

app.use('*', (error: ResponseError | Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (error instanceof ResponseError) {
    res.status(error.statusCode).send({
      error: error.name,
      message: error.message,
      statusCode: error.statusCode,
    });
  } else {
    res.status(500).send({
      error: error.name,
      message: error.message,
      statusCode: 500,
    });
  }
});

export default app;
