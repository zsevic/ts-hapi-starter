import Joi from 'joi';

export const authorQuery = Joi.object({
  name: Joi.string().optional(),
});

export const authorSchema = Joi.object({
  name: Joi.string().required(),
});

export const authorParam = Joi.object({
  authorId: Joi.string().guid().required(),
});
