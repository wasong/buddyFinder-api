'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _Resolver = require('./Resolvers/Resolver');

var _Resolver2 = _interopRequireDefault(_Resolver);

var _Types = require('./Types/Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _Types2.default,
  resolvers: _Resolver2.default
});
module.exports = exports['default'];