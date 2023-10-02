import { Router } from "express";
import {postCreateUser} from "../controllers/createUserC";

const router =Router();
//ruta de la api para poder consumirla
router.post('/create', postCreateUser);

export default router;