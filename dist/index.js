'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// entry point for application
var port = process.env.PORT || 3000;
// import mongoose from 'mongoose'

var app = (0, _express2.default)();

// app setup
// middleware setup
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _morgan2.default)('combined')); // TODO: configure later

// db setup
// mongoose.connect('mongodb://localhost:db/db')

(0, _routes2.default)(app);

app.listen(port, function (req, res) {
  console.log('Listening on port: ', port);
});