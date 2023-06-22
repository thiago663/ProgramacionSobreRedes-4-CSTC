import { Request, Response, NextFunction, response } from 'express'
import jwt from 'jsonwebtoken'

export interface IPayload {
    _id: string;
    iat: number;
} 

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => 
{
    try {
        const token = req.header('token');
        if (!token) return res.status(401).json('Access Denied');
        const payload = jwt.verify(token, process.env['TOKEN_SECRET'] || 'test') as IPayload;
        req.body.userId = payload._id;
        next();
    } catch (e) {
        res.status(400).json({
        error: 'Invalid Token',
        message: 'El token proporcionado es inválido',
        });
    }

}