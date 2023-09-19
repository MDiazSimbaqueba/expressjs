require('dotenv').config()

const express = require('express')
const app = express()

const router = require('./router/router.js')
app.use(router)

app.listen(process.env.APP_PORT)