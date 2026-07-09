import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Feedback = sequelize.define(
  "Feedback",
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "feedbacks",
    timestamps: true,
  }
);