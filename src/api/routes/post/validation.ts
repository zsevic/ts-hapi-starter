import Joi from 'joi';

export const postQuery = Joi.object({
  name: Joi.string().optional(),
});

export const postSchema = Joi.object({
  name: Joi.string().required(),
  text: Joi.string().required(),
  authorId: Joi.string().guid().required(),
});
