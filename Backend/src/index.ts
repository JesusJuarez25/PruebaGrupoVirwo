import express, { Application } from "express";

class Server{
    public app: Application;

    constructor(){
        //inicializa app con express
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
    }

    //metodo para definir rutas
    routes():void{

    }

    //metodo para iniciar el servidor
    start(): void{
      this.app.listen(this.app.get('port'), () =>{
        console.log("Servidor corriendo en el puerto", this.app.get('port'));
      });
    }
}

const server = new Server ();
server.start();