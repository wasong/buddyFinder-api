'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlServerExpress = require('graphql-server-express');

var _schema = require('./src/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export routes
var routes = function routes(app) {
  app.get('/', function (req, res) {
    res.send({ hi: 'Hello World' });
  });

  app.use('/graphql', (0, _graphqlServerExpress.graphqlExpress)(function (_ref) {
    var query = _ref.query.query,
        body = _ref.body;

    var q = query || body.query;
    if (q && q.length > 2000) {
      throw new Error('Query too large');
    }

    return { schema: _schema2.default };
  }));
};

exports.default = routes;
module.exports = exports['default'];