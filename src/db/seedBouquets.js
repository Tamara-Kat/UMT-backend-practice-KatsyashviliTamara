import dotenv from "dotenv";

import { sequelize } from "./sequelize.js";
import { Bouquet } from "../models/Bouquet.js";

dotenv.config();

const bouquets = [
  {
    title: "Spring Elegance",
    description: "A delicate bouquet with fresh spring flowers.",
    price: 35,
    favorite: true,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/perfect-gift-wonderful-flowers-womens-day-tender-smiling-brunet-woman-holding-front-face-bouquet-spring-flowerspace-text.png",
  },
  {
    title: "Berry Chic",
    description: "A romantic bouquet with elegant roses and soft tones.",
    price: 40,
    favorite: true,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/bridal-arrangement-wedding-flowers-closeup-decoration-roses-flowers-ornamental-plants-closeup.png",
  },
  {
    title: "Lavender Dream",
    description: "A gentle bouquet for warm and memorable moments.",
    price: 55,
    favorite: true,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/mixed-flower-bouquet-wooden-table.png",
  },
  {
    title: "Peach Meadow",
    description: "A bright basket bouquet with fresh seasonal flowers.",
    price: 55,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/side-view-rose-bouquet-with-wildflowers-pink-basket.png",
  },
  {
    title: "Blush Romance",
    description: "A soft romantic arrangement created by our florists.",
    price: 34,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/florist-makes-beautiful-bouquet-studio.png",
  },
  {
    title: "Pastel Garden",
    description: "A pastel basket full of fresh flowers and gentle colors.",
    price: 40,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/big-basket-mixed-flowers-standing-table-with-christmas-cones.png",
  },
  {
    title: "Tulip Charm",
    description: "A classic bouquet with a refined floral composition.",
    price: 61,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/mixed-flower-composition-side-view.png",
  },
  {
    title: "Berry Bloom",
    description: "A seasonal bouquet with rich colors and rustic mood.",
    price: 32,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/exotic-rustic-bunch-flowers-mixed-colors.png",
  },
  {
    title: "Sweet Whisper",
    description: "A sweet flower basket for special occasions.",
    price: 40,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/basket-filled-with-assorted-colorful-flowers-notecard.png",
  },
  {
    title: "Field Joy",
    description: "A joyful bouquet inspired by wild field flowers.",
    price: 49,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/wild-flowers.png",
  },
  {
    title: "Soft Bloom",
    description: "A soft classic bouquet with vintage floral details.",
    price: 37,
    favorite: false,
    photoURL:
      "https://tamara-kat.github.io/UMT-markup-practice-KatsyashviliTamara/images/close-up-bouquet-decorated-vintage-style-dark-background.png",
  },
];

async function seedBouquets() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Bouquet.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
    });

    await Bouquet.bulkCreate(bouquets);

    console.log("Bouquets seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedBouquets();