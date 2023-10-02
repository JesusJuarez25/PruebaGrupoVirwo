import { Request, Response } from "express";
import connection from "../database";

export async function loging(req:Request, res: Response){

    const conn = await connection;

    const {usename,pass} =req.body;
    console.log(usename,pass);

    const [user] = await conn.query(`CALL sp_loging('${usename}','${pass}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(user))[0]);
    console.log(user);
    return res.json(resultado);
    
}