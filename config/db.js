import pg from 'pg'
const { Pool } = pg

const conexion = new Pool({
    host: "localhost",
    user: "postgres",
    password: "user123",
    database: "veterinary",
    port: 5432
})
export default conexion