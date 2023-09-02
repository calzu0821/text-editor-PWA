const express = require('express');
//import the 'path' module
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files for the 'client/dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
