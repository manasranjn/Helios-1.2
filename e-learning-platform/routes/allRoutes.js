const express = require('express')
const router = express.Router()

const articleRoutes = require('./articleRoute')

router.use('/article', articleRoutes)

module.exports = router