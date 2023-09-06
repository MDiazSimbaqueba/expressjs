import {Router} from "express";
import {hola, saludar, suma, nombreUsuario, personaje, apiBody, obtenerMascotas, obtenerMascota, twoBody} from "../controllers/controllers.js"

const router = Router()

router.get("/hola", hola)
router.get("/hola/:nombre", saludar)
router.get("/suma/:x/:y", suma)
router.get("/api/usuario/:nombre", nombreUsuario)
router.get("/", personaje)
router.get("/mascotas", obtenerMascotas)
router.get("/mascota/:id", obtenerMascota)
router.put('/api/body', apiBody)
router.post('/suma', twoBody)

export default router