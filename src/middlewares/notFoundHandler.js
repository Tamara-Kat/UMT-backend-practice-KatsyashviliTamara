import { HttpError } from "../helpers/HttpError.js";

export function notFoundHandler(req, res, next) {
  next(HttpError(404, "Route not found"));
}