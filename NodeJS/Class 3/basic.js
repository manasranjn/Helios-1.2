//! Step-1: Import the http module
const http = require("http")

//! Step-2: Create a server
const server = http.createServer((req, res) => {
    //? req- request from client
    //? res- response from server

    //* Check the client request
    console.log(req.method, req.url);

    //* Set response header and status code
    res.writeHead(200, { "Content-Type": "text/plain" })

    //* Send the response to the client
    res.end("Hello, World! This is our first HTTP server")
})

//! Step-3: Define a port number
const PORT = 5000

//! Step-4: Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})