"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pruebaC_1 = require("../controllers/pruebaC");
const router = (0, express_1.Router)();
router.get('/prueba', pruebaC_1.getusuarios);
exports.default = router;
