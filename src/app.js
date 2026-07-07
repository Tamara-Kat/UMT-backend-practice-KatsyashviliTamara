import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./docs/swagger.json" with { type: "json" };
import { bouquetsRouter } from "./routes/bouquetsRouter.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/photos", express.static(path.join(__dirname, "../public/photos")));

app.get("/", (req, res) => {
  res.json({
    message: "Flora backend API is running",
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/bouquets", bouquetsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;