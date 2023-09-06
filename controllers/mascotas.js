import { request } from "http";
import conexion from "../config/db.js"

//Consultas de BD
const obtenerMascotas = async (request, response) => {
    const pets = await conexion.query("SELECT * FROM pets")
    console.log(pets);
    response.json(pets.rows)
}

const obtenerMascota = async (request, response) => {
    const id = request.params.id
    const pets = await conexion.query(`SELECT * FROM pets WHERE pet_id=${id}`)
    // console.log(pets);
    response.json(pets.rows)
}

//INSERTAR EN BS
const insertarMascota = async (request, response) => {
    const pet_id = request.body.pet_id
    const name = request.body.name
    const kind = request.body.kind
    const breed = request.body.breed
    const age = request.body.age
    const owner_id = request.body.owner_id
    await conexion.query(`INSERT INTO pets(pet_id, name, kind, breed, age, owner_id) VALUES('${pet_id}', '${name}', '${kind}', '${breed}', '${age}', '${owner_id}')`)
    // await conexion.query(`INSERT INTO pets(name, kind, breed, age, owner_id) VALUES($1, $2, $3)`, [nombre, kind, breed, age, owner_id])
    response.status(200).json({
        "mensaje": "INSERT EXITOSO"
    })
}

export { obtenerMascotas, obtenerMascota, insertarMascota }