"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loging = void 0;
const database_1 = __importDefault(require("../database"));
function loging(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.default;
        const { usename, pass } = req.body;
        console.log(usename, pass);
        const [pagar] = yield conn.query(`CALL sp_loging('${usename}','${pass}');`);
        const resultado = Object.values(JSON.parse(JSON.stringify(pagar))[0]);
        console.log(pagar);
        return res.json(resultado);
    });
}
exports.loging = loging;
