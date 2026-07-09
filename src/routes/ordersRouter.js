import express from "express";

import {
  createOrderController,
  getOrdersController,
} from "../controllers/ordersController.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createOrderSchema } from "../schemas/ordersSchemas.js";

export const ordersRouter = express.Router();

ordersRouter.get("/", ctrlWrapper(getOrdersController));

ordersRouter.post(
  "/",
  validateBody(createOrderSchema),
  ctrlWrapper(createOrderController)
);