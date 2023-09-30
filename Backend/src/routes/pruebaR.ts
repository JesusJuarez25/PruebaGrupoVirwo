import { Router } from "express";
import { getusuarios } from "../controllers/pruebaC";

const router = Router();

router.get('/', getusuarios)

export default router;