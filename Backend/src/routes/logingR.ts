import { Router } from "express";
import {loging} from "../controllers/logingC";

const router =Router();
//ruta de la api para poder consumirla
router.post('/login', loging);

export default router;