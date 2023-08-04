const express = require('express');
const app = express();
const port = 3000; // Replace this with the desired port number

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
