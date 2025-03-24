// Import the Express module to set up the server
const express = require('express');

// Import the body-parser module to parse incoming JSON requests
const bodyParser = require('body-parser');

// Create an instance of an Express application
const app = express();

// Define the port on which the server will listen for requests
const port = 3001;

// Middleware: Use body-parser to parse incoming JSON requests
app.use(bodyParser.json());

// Define a GET route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('<b> Hi there! </b>');
});

// Define a GET route for the '/hello' endpoint
app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

// Define a POST route for the root URL ('/')
app.post('/', (req, res) => {
    console.log(req.body);
    // Send a response confirming the POST request
    res.send("This is post request");
});

// Start the server and make it listen on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
