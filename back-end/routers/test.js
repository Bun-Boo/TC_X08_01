import express from "express";
import { HelloMessage } from "../controllers/test.js";

const router = express.Router();

router.get("/", HelloMessage);

export default router;
