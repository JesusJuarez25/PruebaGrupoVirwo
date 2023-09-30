import {Request, Response} from "express";
import connection from "../database";

export async function postCreateUser(req:Request, res: Response){

    const conn = await connection;

    const {usename,email,pass} =req.body;
    console.log(usename,email,pass);

    const [pagar] = await conn.query(`CALL sp_createUser('${usename}','${email}','${pass}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(pagar))[0]);
    console.log(pagar);
    return res.json(resultado);
    
}