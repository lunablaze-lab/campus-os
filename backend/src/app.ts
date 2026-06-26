import cors from "cors";
import express from "express";

import { healthRouter } from "./routes/health.routes.js";

export const createApp = () => {
  const app = express();

  app.disable("x-powered-by");
  app.use(cors());
  app.use(express.json());

  app.use("/health", healthRouter);

  return app;
};
