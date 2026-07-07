import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Bouquet = sequelize.define(
  "Bouquet",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "bouquets",
    timestamps: true,
  }
);