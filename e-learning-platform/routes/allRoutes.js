const express = require('express')
const router = express.Router()

const articleRoutes = require('./articleRoute')
const teacherRoutes = require('./teacherRoute')
const courseRoutes = require('./courseRoute')
const authRoutes = require('./authRoutes')

router.use('/article', articleRoutes)
router.use('/teacher', teacherRoutes)
router.use('/course', courseRoutes)
router.use('/auth', authRoutes)


module.exports = router