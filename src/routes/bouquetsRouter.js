import express from "express";

import {
  createBouquetController,
  deleteBouquetController,
  getBouquetByIdController,
  getBouquetsController,
  updateBouquetController,
  updateFavoriteController,
  updatePhotoController,
} from "../controllers/bouquetsController.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";
import { upload } from "../middlewares/upload.js";
import { validateBody } from "../middlewares/validateBody.js";
import {
  createBouquetSchema,
  updateBouquetSchema,
  updateFavoriteSchema,
} from "../schemas/bouquetsSchemas.js";

export const bouquetsRouter = express.Router();

bouquetsRouter.get("/", ctrlWrapper(getBouquetsController));

bouquetsRouter.get("/:id", ctrlWrapper(getBouquetByIdController));

bouquetsRouter.post(
  "/",
  validateBody(createBouquetSchema),
  ctrlWrapper(createBouquetController)
);

bouquetsRouter.put(
  "/:id",
  validateBody(updateBouquetSchema),
  ctrlWrapper(updateBouquetController)
);

bouquetsRouter.delete("/:id", ctrlWrapper(deleteBouquetController));

bouquetsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  ctrlWrapper(updateFavoriteController)
);

bouquetsRouter.patch(
  "/:id/photo",
  upload.single("photo"),
  ctrlWrapper(updatePhotoController)
);