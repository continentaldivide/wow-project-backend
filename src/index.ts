import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8888;

app.get("/", (req: Request, res: Response) => {
  res.json({ response: "Express + TypeScript Server" });
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
