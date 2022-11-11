const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usariosPath = "/api/users";

    //DATABASE
    this.connectDB();

    //Middlewares
    this.middlewares();

    //rutas de la app
    this.routes();
  }

  routes() {
    this.app.use(this.usariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("CORRIENDO EN PUERTO", this.port);
    });
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
    //cors
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());
  }
}

module.exports = Server;
