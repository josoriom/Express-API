import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { router } from './routes/routes.mjs';
import { createServer } from 'http';

dotenv.config();

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
    this.server = createServer(this.app);
  }

  middlewares() {
    // Activate CORS (Cross-Origin Resource Sharing)
    this.app.use(cors());
    // Reading and parsing the body
    this.app.use(express.json());
    // Public directory located in the root folder of the project
    this.app.use(express.static('public'));
  }

  /**
   * This method has example routes located in path
   * 'src/routes/routes.mjs'
   */
  routes() {
    this.app.use('/api/test', router);
  }

  listen() {
    this.connection = this.app.listen(this.port, () => {
      console.log(`Web server running in port: ${this.port}`);
    });
  }

  close() {
    // @ts-ignore
    this.connection.close();
  }
}
