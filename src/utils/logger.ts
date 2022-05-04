class Logger {
  private context: string;
  private shouldLog: boolean;

  constructor(context: string) {
    this.context = context;
    this.shouldLog = process.env.NODE_ENV !== 'test';
  }

  log(...args: any) {
    this.shouldLog && console.log(this.context, ...args);
  }

  error(...args: any) {
    this.shouldLog && console.error(this.context, ...args);
  }

  debug(...args: any) {
    this.shouldLog && console.debug(this.context, ...args);
  }

  info(...args: any) {
    this.shouldLog && console.info(this.context, ...args);
  }

  warn(...args: any) {
    this.shouldLog && console.warn(this.context, ...args);
  }
}

export default Logger;
