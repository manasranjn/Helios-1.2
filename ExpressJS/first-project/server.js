const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    // console.log(req.method, req.path);
    res.send("This is Home page")
})

// app.get('/about', (req, res) => {
//     res.send("This is about page")
// })

// app.post('/about', (req, res) => {
//     res.send("About page POST request...")
// })

// app.put('/about', (req, res) => {
//     res.send("About edit request")
// })

// app.delete('/about', (req, res) => {
//     res.send("Delete request")
// })

app.get('/about/:id', (req, res) => {
    console.log(req.params);

    res.send(`Requested for ${req.params.id} id`)
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send("Query string example")
})

app.route('/about')
    .get((req, res) => {
        res.send("This is about page")
    })
    .post((req, res) => {
        res.send("About page POST request...")
    })
    .put((req, res) => {
        res.send("About edit request")
    })
    .delete((req, res) => {
        res.send("Delete request")
    })


app.listen(PORT, () => {
    console.log("Server running");
})