import { Router } from "express";
import {loging} from "../controllers/logingC";

const router =Router();

router.post('/', loging);

export default router;