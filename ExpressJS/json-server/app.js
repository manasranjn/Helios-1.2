import express from "express"
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "This is an example of JSON data",
        data: { name: "Smith", age: 20 }
    })
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Data accepted")
})

app.listen(PORT, () => {
    console.log("Server is running");
})