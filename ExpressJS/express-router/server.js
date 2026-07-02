const express = require('express');
const app = express();
const PORT = 5000;


const allRoutes = require('./routes/allRoutes');

app.use('/api', allRoutes);

// http://localhost:5000/api/home
// http://localhost:5000/api/about
// http://localhost:5000/api/products


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})