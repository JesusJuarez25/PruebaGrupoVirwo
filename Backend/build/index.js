"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//rutas de las api
const logingR_1 = __importDefault(require("./routes/logingR"));
const createUserR_1 = __importDefault(require("./routes/createUserR"));
class Server {
    constructor() {
        //inicializa app con express
        this.app = (0, express_1.default)();
        this.config();
        this.midlewares();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //metodo para llamar las rutas de las api
    routes() {
        this.app.use(logingR_1.default);
        this.app.use(createUserR_1.default);
    }
    //metodo para iniciar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo en el puerto", this.app.get('port'));
        });
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
    }
}
const server = new Server();
server.start();
