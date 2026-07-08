const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const { connectDB } = require('./config/db')


connectDB()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log("Server running");
})