import Joi from 'joi';

export const createItemBodySchema = Joi.object({
  name: Joi.string().required(),
  reference: Joi.string().required(),
  description: Joi.string().required(),
  value: Joi.number().required(),
}).required();
