const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Define the file path based on the request URL
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Get the file extension
    const extname = path.extname(filePath);

    // Set the default content type based on the file extension
    let contentType = 'text/html';

    if (extname === '.css') {
        contentType = 'text/css';
    } else if (extname === '.js') {
        contentType = 'application/javascript';
    }

    // Serve the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle errors (e.g., file not found)
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Respond with the file content and the correct content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Set the port to listen on
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
