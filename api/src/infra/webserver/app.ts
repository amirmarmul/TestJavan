import express, { NextFunction, Request, Response } from 'express';
import services from '../config/services';
import routes from './routes';
import cors from 'cors';

declare global {
    namespace Express {
        interface Request {
            services?: any;
        }
    }
}

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    req.services = services;
    next();
});

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ message: error.message })
})

export default app;
