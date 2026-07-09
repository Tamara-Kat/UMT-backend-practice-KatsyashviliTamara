import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Order = sequelize.define(
  "Order",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "orders",
    timestamps: true,
  }
);