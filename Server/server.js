var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Employees = require('./routes/employees');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../Client/dist/')));
app.use('/employees',Employees);
var port = 5000;
app.listen(port);
