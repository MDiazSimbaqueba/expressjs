const { Router } = require('express')
const router = Router()
const { holaMundo } = require('../controllersrs/controlers')

router.get('/', (req, res) => {
    res.json({"hola": "mundo"})
})

module.exports = router