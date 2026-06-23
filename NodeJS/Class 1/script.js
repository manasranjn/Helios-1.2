//? CommonJS Module System
//! Built-in Modules

// const fs = require('fs')
// const path = require('path')

// console.log(path.dirname('NodeJS/Class 1/script.js'));


//! User Defined Modules

// const math = require('./math.js')

// math.add(10, 30)
// math.subtract(50, 10)

// const { add } = require('./math.js')
// add(10, 30)


//! Third-party Modules
// const express = require('express')
// const cors = require('cors')

// const app = express()

// app.listen(3000, () => {
//     console.log("Server is running.........");
// })



//? ES6 Module System
import express from "express"
const app = express()

import add from "./math.js";

add(10, 20)

app.listen(3000, () => {
    console.log("Server is running");
})