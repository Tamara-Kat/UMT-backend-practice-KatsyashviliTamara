import { HttpError } from "../helpers/HttpError.js";

export function validateBody(schema) {
  return function validateRequestBody(req, res, next) {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const message = error.details.map((detail) => detail.message).join(", ");
      next(HttpError(400, message));
      return;
    }

    next();
  };
}