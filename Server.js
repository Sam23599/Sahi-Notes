const express = require('express');
const app = express();
const port = 3000; // Replace this with the desired port number
require('./config/mongoose');

app.use(express.urlencoded());

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
