import Joi from "joi";

export const createFeedbackSchema = Joi.object({
  text: Joi.string().min(5).max(1000).required(),
  author: Joi.string().min(2).max(100).required(),
});
