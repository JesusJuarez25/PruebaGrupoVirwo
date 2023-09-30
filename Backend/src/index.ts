import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import loging from './routes/logingR';
import postCreateUser from './routes/createUserR';
import getusuarios from './routes/pruebaR';
import indexRoutes from './routes/indexRoutes';

class Server {
    public app: Application;

    constructor() {
        //inicializa app con express
        this.app = express();
        this.config();
        this.midlewares();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    //metodo para definir rutas
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('api/login', loging);
        this.app.use('api/create', postCreateUser);
        this.app.use('api/prueba', getusuarios);
    }

    //metodo para iniciar el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo en el puerto", this.app.get('port'));
        });
    }

    midlewares(){
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(cors())
    }
}

const server = new Server();
server.start();