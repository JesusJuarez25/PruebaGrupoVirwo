import { Request, Response } from "express";
import connection from "../database";


export async function getusuarios(req:Request, res: Response) {
    
    const conn = await connection;
    
    const [paises] = await conn.query(`CALL prueba();`);

    const resultado = Object.values(JSON.parse(JSON.stringify(paises))[0]);

    //console.log(paises);

    return res.json(resultado);
    
}