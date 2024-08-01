require('marko/node-require').install();
require('marko/express');


const express = require('express');
const route = require('../app/routes/routes.js');
const bodyParser = require('body-parser');
const app = express();


app.use('/estatico', express.static('src/app/public'));
app.use(bodyParser.urlencoded({
    extended:true
}))
route(app);
module.exports = app;
