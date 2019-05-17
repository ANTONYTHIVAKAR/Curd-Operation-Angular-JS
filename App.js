const express = require('express');
const bodyParser = require('body-parser');
const emp = require('./routes/emp.route');
const app = express();
app.use('/emp', emp);
let port = 4200;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});