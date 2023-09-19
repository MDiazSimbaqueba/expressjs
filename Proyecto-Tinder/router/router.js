const { Router } = require('express')
const router = Router()
const { holaMundo } = require('../controllersrs/controlers')

router.get('/', holaMundo)

module.exports = router