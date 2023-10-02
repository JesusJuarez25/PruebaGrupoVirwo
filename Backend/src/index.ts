import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

//rutas de las api
import loging from './routes/logingR';
import postCreateUser from './routes/createUserR';


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

    //metodo para llamar las rutas de las api
    routes(): void {
        this.app.use(loging);
        this.app.use(postCreateUser);
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