//! Step-1: Import the http module
const http = require("http")

//! Step-2: Create a server
const server = http.createServer((req, res) => {
    //* Check the client request
    // console.log(req.method, req.url);

    //* Set response header and status code
    res.setHeader("Content-Type", "application/json")

    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Welcome to the Home Page" }));
    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Welcome to the About Page" }));
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Welcome to the Contact Page" }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Page Not Found" }));
    }
})

//! Step-3: Define a port number
const PORT = 5000

//! Step-4: Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})