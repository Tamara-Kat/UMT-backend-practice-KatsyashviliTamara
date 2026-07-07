import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDatabase, sequelize } from "./src/db/sequelize.js";
import "./src/models/Bouquet.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

async function startServer() {
  await connectDatabase();

  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();