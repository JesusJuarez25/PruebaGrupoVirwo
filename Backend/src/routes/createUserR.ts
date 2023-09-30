import { Router } from "express";
import {postCreateUser} from "../controllers/createUserC";

const router =Router();

router.post('/', postCreateUser);

export default router;