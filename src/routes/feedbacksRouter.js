import express from "express";

import {
  createFeedbackController,
  getFeedbacksController,
} from "../controllers/feedbacksController.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createFeedbackSchema } from "../schemas/feedbacksSchemas.js";

export const feedbacksRouter = express.Router();

feedbacksRouter.get("/", ctrlWrapper(getFeedbacksController));

feedbacksRouter.post(
  "/",
  validateBody(createFeedbackSchema),
  ctrlWrapper(createFeedbackController)
);