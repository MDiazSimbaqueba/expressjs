import { request, response } from "express"
import conexion from "../config/db.js"

const getClientes = async(request, response) => {
    const clientes = await conexion.query("SELECT * FROM owners")
    response.status(200).json(clientes.rows)
}

const insertCliente = async(request, response) => {
    const {owner_id, first_name, last_name, phone} =request.body

    const cliente = await conexion.query(`INSERT INTO owners(owner_id, first_name, last_name, phone) VALUES('${owner_id}', '${first_name}', '${last_name}', '${phone}')`)
    
    response.status(200).json({success: `${cliente.rowCount} Insertado correctamente`})
}

const updateCliente = async(request, response) => {
    const id = request.params.id
    const {first_name, last_name, phone} = request.body

    const cliente = await conexion.query(`UPDATE owners SET first_name='${first_name}', last_name='${last_name}', phone='${phone}' WHERE owner_id='${id}'`)

    response.status(200).json({success: `Actualización exitosa de ${cliente.rowCount} cliente`})
}

const deleteCliente = async(request, response) => {
    const id = request.params.id
    
    const cliente = await conexion.query(`DELETE FROM owners WHERE owner_id='${id}'`)

    response.status(200).json({success: `Eliminación exitosa de ${cliente.rowCount} cliente`})
}

export { getClientes, insertCliente, updateCliente, deleteCliente }