import Joi from "joi";

export const createBouquetSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(5).max(1000).required(),
  price: Joi.number().min(0).required(),
  favorite: Joi.boolean(),
  photoURL: Joi.string().uri(),
});

export const updateBouquetSchema = Joi.object({
  title: Joi.string().min(2).max(100),
  description: Joi.string().min(5).max(1000),
  price: Joi.number().min(0),
  favorite: Joi.boolean(),
  photoURL: Joi.string().uri(),
}).min(1);

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});