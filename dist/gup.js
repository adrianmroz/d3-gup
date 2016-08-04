'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nest = exports.gup = exports.gupAll = undefined;

var _ramda = require('ramda');

var _thread = require('./thread');

var _thread2 = _interopRequireDefault(_thread);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Runs in sequence functions on d3 selection
 * D3Selection -> (D3Selection -> a) -> (D3Selection -> b) ...
 * @param {D3Selection} parent - selection representing parent node
 * @param {Function[]} xfs  - Transformations of D3Selection to run
 */
var gupAll = exports.gupAll = function gupAll(parent) {
  for (var _len = arguments.length, xfs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    xfs[_key - 1] = arguments[_key];
  }

  return xfs.forEach(function (fn) {
    return fn(parent);
  });
};

/**
 * Calls selection transformation on D3Selection and returns outcome
 * @param {D3Selection} parent - selection representing parent node
 * @param {Function} xf - Transformation of D3Selection
 */
var gup = exports.gup = (0, _ramda.curry)(function (parent, xf) {
  return xf(parent);
});

/**
 * Creates new join representing nesting vNode inside parent. Uses (d) => [d] pattern
 * @param {Object} vNode - Node definition representing join
 * @param {Object} options - Options for join
 */
var nest = exports.nest = function nest(vNode, options) {
  return (0, _join2.default)(_ramda.of, vNode, options);
};