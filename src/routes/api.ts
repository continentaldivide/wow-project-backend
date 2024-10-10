import express from "express";
import { basicGreeting } from "../controllers/api";

const router = express.Router();

router.get("/", basicGreeting);

export default router;
