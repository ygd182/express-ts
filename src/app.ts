import express, { Express, Request, Response } from 'express';
import { UserRoutes } from './routes/user.routes';
import * as bodyParser from "body-parser";

export class App {

  createApp() {
    const app: Express = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server is running');
    });

    const userRoutes = new UserRoutes();

    app.use(userRoutes.routes());

    return app;
  }
  
}