import fs from "node:fs/promises";
import path from "node:path";
import gravatar from "gravatar";
import { nanoid } from "nanoid";

import { HttpError } from "../helpers/HttpError.js";
import {
  createBouquet,
  deleteBouquetById,
  getAllBouquets,
  getBouquetById,
  updateBouquetById,
  updateBouquetFavorite,
  updateBouquetPhoto,
} from "../services/bouquetsService.js";

const photosDir = path.resolve("public", "photos");

export async function getBouquetsController(req, res) {
  const bouquets = await getAllBouquets();

  res.status(200).json(bouquets);
}

export async function getBouquetByIdController(req, res) {
  const { id } = req.params;

  const bouquet = await getBouquetById(id);

  if (!bouquet) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(bouquet);
}

export async function createBouquetController(req, res) {
  const photoURL =
    req.body.photoURL ||
    gravatar.url(req.body.title, {
      protocol: "https",
      s: "250",
      d: "identicon",
    });

  const bouquet = await createBouquet({
    ...req.body,
    photoURL,
  });

  res.status(201).json(bouquet);
}

export async function updateBouquetController(req, res) {
  const { id } = req.params;

  const bouquet = await updateBouquetById(id, req.body);

  if (!bouquet) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(bouquet);
}

export async function deleteBouquetController(req, res) {
  const { id } = req.params;

  const bouquet = await deleteBouquetById(id);

  if (!bouquet) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    message: "Bouquet deleted successfully",
    bouquet,
  });
}

export async function updateFavoriteController(req, res) {
  const { id } = req.params;
  const { favorite } = req.body;

  const bouquet = await updateBouquetFavorite(id, favorite);

  if (!bouquet) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(bouquet);
}

export async function updatePhotoController(req, res) {
  const { id } = req.params;

  if (!req.file) {
    throw HttpError(400, "Photo file is required");
  }

  const extension = path.extname(req.file.originalname);
  const filename = `${nanoid()}${extension}`;
  const resultPath = path.join(photosDir, filename);

  await fs.rename(req.file.path, resultPath);

  const baseUrl = process.env.BASE_URL || "http://localhost:3001";
  const photoURL = `${baseUrl}/photos/${filename}`;

  const bouquet = await updateBouquetPhoto(id, photoURL);

  if (!bouquet) {
    await fs.unlink(resultPath);
    throw HttpError(404, "Not found");
  }

  res.status(200).json(bouquet);
}