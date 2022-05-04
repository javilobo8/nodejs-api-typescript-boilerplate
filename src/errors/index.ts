export class ResponseError extends Error {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message || 'ResponseError');
    this.statusCode = statusCode;
  }
}

export class ValidationError extends ResponseError {
  constructor(message: string) {
    super(message || 'Validation error', 422);
    this.name = 'ValidationError';
  }
}

export class Unauthorized extends ResponseError {
  constructor(message: string) {
    super(message || 'Not authorized', 401);
    this.name = 'Unauthorized';
  }
}