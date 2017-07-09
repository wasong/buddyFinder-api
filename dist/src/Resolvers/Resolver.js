'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// example data
var _users = [{ id: 1, firstName: 'Tom', lastName: 'Coleman' }, { id: 2, firstName: 'Sashko', lastName: 'Stubailo' }, { id: 3, firstName: 'Mikhail', lastName: 'Novikov' }];

var resolvers = {
  Query: {
    users: function users() {
      return _users;
    },
    user: function user(_, _ref) {
      var firstName = _ref.firstName;
      return _users.find(function (i) {
        return i.firstName === firstName;
      });
    }
  }
};

exports.default = resolvers;
module.exports = exports['default'];