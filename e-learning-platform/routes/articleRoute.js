const { createArticle } = require('../controllers/articleController')
const express = require('express')
const router = express.Router()

router.post('/', createArticle)

module.exports = router