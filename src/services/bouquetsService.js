import { Bouquet } from "../models/Bouquet.js";

export async function getAllBouquets() {
  return Bouquet.findAll({
    order: [["createdAt", "ASC"]],
  });
}

export async function getBouquetById(id) {
  return Bouquet.findByPk(id);
}

export async function createBouquet(data) {
  return Bouquet.create(data);
}

export async function updateBouquetById(id, data) {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.update(data);
  return bouquet;
}

export async function deleteBouquetById(id) {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.destroy();
  return bouquet;
}

export async function updateBouquetFavorite(id, favorite) {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.update({ favorite });
  return bouquet;
}

export async function updateBouquetPhoto(id, photoURL) {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.update({ photoURL });
  return bouquet;
}