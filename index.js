//require('dotenv').config() commonJS
import 'dotenv/config'
import express from "express";
import router from "./router/router.js";

// const port = 3000
const port = process.env.APP_PORT
//crea una instancia de la aplicación Express
const app = express()
app.use(express.json())
app.use(router)
app.use('/api/swapi', router);
app.listen(port)

console.log(`Corriendo ${process.env.APP_NAME}, mi 🏎 servidor en http://localhost:${port}`)
