"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const connection = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'virwo',
    port: 3306
});
exports.default = connection;
