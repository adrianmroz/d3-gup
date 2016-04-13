'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

/**
 * threads value x through all functions fns
 * a -> (a -> b) -> (b -> c) -> ... -> (y -> z) -> z
 * @param x starting value
 * @param fns functions transforming x in order
 */

exports.default = function (x) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return _ramda.pipe.apply(undefined, fns)(x);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aHJlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7OztrQkFRZSxVQUFDLENBQUQ7b0NBQU87Ozs7U0FBUSw2QkFBUSxHQUFSLEVBQWEsQ0FBYjtDQUFmIiwiZmlsZSI6InRocmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGlwZX0gZnJvbSAncmFtZGEnO1xuXG4vKipcbiAqIHRocmVhZHMgdmFsdWUgeCB0aHJvdWdoIGFsbCBmdW5jdGlvbnMgZm5zXG4gKiBhIC0+IChhIC0+IGIpIC0+IChiIC0+IGMpIC0+IC4uLiAtPiAoeSAtPiB6KSAtPiB6XG4gKiBAcGFyYW0geCBzdGFydGluZyB2YWx1ZVxuICogQHBhcmFtIGZucyBmdW5jdGlvbnMgdHJhbnNmb3JtaW5nIHggaW4gb3JkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHgsIC4uLmZucykgPT4gcGlwZSguLi5mbnMpKHgpO1xuIl19