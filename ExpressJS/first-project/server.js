const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    // console.log(req.method, req.path);
    res.send("This is Home page")
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.post('/about', (req, res) => {
    res.send("About page POST request...")
})

app.put('/about', (req, res) => {
    res.send("About edit request")
})

app.delete('/about', (req, res) => {
    res.send("Delete request")
})


app.listen(PORT, () => {
    console.log("Server running");
})