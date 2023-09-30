import {Request, Response} from 'express';

class IndexController {
    
    public index (req: Request, res: Response) {
       res.json({text: 'Esta API ES /api/autenticacion'});
    } 
} 

export const indexController = new IndexController();