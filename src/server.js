require('dotenv').config();
const cors = require('cors');
const express = require('express');

const { dbConnection } = require('./databases/mongo');

class Server {
  constructor() {
    this.app = express();
    // Asigna a la clase el puerto definido en la variable de entorno
    this.port = process.env.PORT;

    // Conectar a la base de datos
    // Cuando se tengan las credenciales correspondientes
    // se descomenta esta opción para conectar a la base de datos

    // this.connectDB();

    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();

    this.server = require('http').createServer(this.app);
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    // Activar CORS (Cross-Origin Resource Sharing)
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio público ubicado en la carpeta raíz del proyecto
    this.app.use(express.static('public'));
  }

  /**
   * Este método tiene rutas de ejemplo ubicadas en el path
   * 'src/routes/example.js'
   * el endpoint al que apunta es '/api/test'
   */
  routes() {
    this.app.use('/api/test', require('./routes/example'));
  }

  listen() {
    this.connection = this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }

  close() {
    // @ts-ignore
    this.connection.close();
  }
}

module.exports = { Server };
