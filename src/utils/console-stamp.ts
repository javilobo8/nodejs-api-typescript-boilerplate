import consoleStamp, { TokenPayload } from 'console-stamp';
import chalk from 'chalk';

const customLabel = (arg: TokenPayload | undefined): string | number => {
  if (!arg) return 0;
  const { method, defaultTokens } = arg;
  switch (method) {
    case 'log': return chalk.green(defaultTokens.label(arg));
    case 'info': return chalk.blue(defaultTokens.label(arg));
    case 'warn': return chalk.yellow(defaultTokens.label(arg));
    case 'error': return chalk.red(defaultTokens.label(arg));
    default:
  }
  return defaultTokens.label(arg);
}

consoleStamp(console, {
  format: ':date(yyyy/mm/dd HH:MM:ss.l).green :custom_label(7)',
  tokens: {
    custom_label: customLabel,
  },
});