const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");
// importo las rutas del usuario
const userRoutes = require("./Routes/users.routes");
<<<<<<< HEAD
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;
=======
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
>>>>>>> ad68b732a9ac6e97d3b913d2d992f4a74f0ac493

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use("/api/v1", userRoutes);

app.listen(PORT, () => console.log("Servidor corriendo en el puerto" + PORT));
