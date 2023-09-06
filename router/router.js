import {Router} from "express";
import {hola, saludar, suma, nombreUsuario, apiBody, twoBody} from "../controllers/controllers.js"
import {obtenerMascotas, obtenerMascota, insertarMascota} from "../controllers/mascotas.js"

const router = Router()

router.get("/hola", hola)
router.get("/hola/:nombre", saludar)
router.get("/suma/:x/:y", suma)
router.get("/api/usuario/:nombre", nombreUsuario)
// router.get("/", personaje)
router.get("/mascotas", obtenerMascotas)
router.get("/mascota/:id", obtenerMascota)
router.put('/api/body', apiBody)
router.post('/suma', twoBody)
router.post("/mascota", insertarMascota)

export default router
//GET para leer información
//POST para insertar información
//PUT para editar información
//DELETE para borrar información