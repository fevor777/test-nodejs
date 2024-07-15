// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const port = 3000;

// Define a route for the /hello endpoint
app.get('/hello', (req, res) => {
  res.send('Hello World (from server)');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

