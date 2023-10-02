"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUserC_1 = require("../controllers/createUserC");
const router = (0, express_1.Router)();
//ruta de la api para poder consumirla
router.post('/create', createUserC_1.postCreateUser);
exports.default = router;
