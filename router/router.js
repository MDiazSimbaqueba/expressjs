import {Router} from "express";
import {hola, saludar, suma, nombreUsuario, apiBody, twoBody} from "../controllers/controllers.js"
import {obtenerMascotas, obtenerMascota, insertarMascota, actualizarMascota, borrarMascota} from "../controllers/mascotas.js"
import { getClientes, insertCliente, updateCliente, deleteCliente } from "../controllers/clientes.js";

const router = Router()

//GET para leer información
router.get("/hola", hola)
router.get("/hola/:nombre", saludar)
router.get("/suma/:x/:y", suma)
router.get("/api/usuario/:nombre", nombreUsuario)
// router.get("/", personaje)
router.get("/mascotas", obtenerMascotas)
router.get("/mascota/:id", obtenerMascota)
router.get("/clientes", getClientes)

//POST para insertar información
router.post('/suma', twoBody)
router.post("/mascota", insertarMascota)
router.post("/clientes", insertCliente)

//PUT para editar información
router.put('/api/body', apiBody)
router.put('/mascota/:id', actualizarMascota)
router.put('/clientes/:id', updateCliente)

//DELETE para borrar información
router.delete('/mascota/:id', borrarMascota)
router.delete('/clientes/:id', deleteCliente)

export default router