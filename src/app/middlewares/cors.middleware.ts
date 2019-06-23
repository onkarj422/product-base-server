import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next) {
        const allowedOrigins = ['http://localhost:8080'];
        if (allowedOrigins.indexOf(req.header('Origin')) > -1) {
            res.header('Access-Control-Allow-Origin', req.header('Origin'));
            res.header('Access-Control-Allow-Headers', '*');
            res.header('Access-Control-Allow-Methods', '*');
        }
        next();
    }
}
