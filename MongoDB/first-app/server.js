const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()


// mongoose.connect(process.env.MONGO_URL)
//     .then((res) => {
//         console.log("DB connected");
//     }).catch((err) => {
//         console.log(err.message);
//     })

try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("DB connected");
} catch (err) {
    console.log(err.message);
}


app.listen(process.env.PORT, () => {
    console.log("Server is running");

})