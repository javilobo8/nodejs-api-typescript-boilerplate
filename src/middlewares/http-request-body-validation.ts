import Joi from 'joi';
import express from 'express';
import { ValidationError } from '../errors';

export default function httpRequestBodyValidation(validationSchema: Joi.Schema) {
  return function middleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    const result = validationSchema.validate(req.body);
    if (result.error) {
      return next(new ValidationError(result.error.message));
    }
    return next(null);
  }
}