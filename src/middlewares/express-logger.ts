import morgan from 'morgan';
import { IncomingMessage, ServerResponse } from 'http';
import chalk from 'chalk';

function morganExpressLogger(tokens: morgan.TokenIndexer<IncomingMessage, ServerResponse>, req: IncomingMessage, res: ServerResponse) {
  const data = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    `${parseInt(<string>(tokens['response-time'](req, res)), 10)}ms`,
  ];

  return data.join(' ');
}

export default morgan(morganExpressLogger, {
  stream: {
    write: (args: string) => console.log(chalk.blue('HTTP'), args.trim()),
  }
});