"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = "\n  type User {\n    id: Int!\n    firstName: String\n    lastName: String\n  }\n\n  #Query\n  type Query {\n    users: [User]\n    user(firstName: String): User\n  }\n\n  #Mutation\n";

exports.default = typeDefs;
module.exports = exports["default"];