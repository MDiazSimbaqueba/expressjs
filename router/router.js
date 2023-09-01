import {Router} from "express";
import {hola, saludar, suma, nombreUsuario, personaje, apiBody, obtenerMascotas, obtenerMascota} from "../controllers/controllers.js"

const router = Router()

router.get("/hola", hola)
router.get("/hola/:nombre", saludar)
router.get("/suma/:x/:y", suma)
router.get("/api/usuario/:nombre", nombreUsuario)
router.get("/", personaje)
router.get("/mascotas", obtenerMascotas)
router.get("/mascota/:id", obtenerMascotas)
router.put('/api/body', apiBody)

export default router