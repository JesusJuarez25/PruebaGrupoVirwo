"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logingC_1 = require("../controllers/logingC");
const router = (0, express_1.Router)();
//ruta de la api para poder consumirla
router.post('/login', logingC_1.loging);
exports.default = router;
