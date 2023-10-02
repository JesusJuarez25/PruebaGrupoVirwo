import {Request, Response} from "express";
import connection from "../database";

export async function postCreateUser(req:Request, res: Response){

    const conn = await connection;

    const {usename,email,pass} =req.body;
    console.log(usename,email,pass);

    const [user] = await conn.query(`CALL sp_createUser('${usename}','${email}','${pass}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(user))[0]);
    console.log(user);
    return res.json(resultado);
    
}