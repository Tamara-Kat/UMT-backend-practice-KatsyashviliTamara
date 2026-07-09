import Joi from "joi";

export const createOrderSchema = Joi.object({
  productId: Joi.number().integer().positive().required(),
  productTitle: Joi.string().min(2).max(100).required(),
  quantity: Joi.number().integer().min(1).required(),
  name: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(5).max(30).required(),
  address: Joi.string().min(5).max(200).required(),
  message: Joi.string().max(1000).allow("", null),
});