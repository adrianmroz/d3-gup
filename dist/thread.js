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