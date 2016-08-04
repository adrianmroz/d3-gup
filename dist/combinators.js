'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.each = exports.sort = exports.order = exports.classed = exports.on = exports.callv = exports.call = undefined;

var _ramda = require('ramda');

var _d3Fun = require('./d3-fun');

/**
 * call combinator - composes transformation with d3 call method
 * @param {Function} fn Function to be called on resulting selection
 * @param {Function} xf Transformation to be composed at
 */
var call = exports.call = (0, _ramda.curry)(function (fn, xf) {
  return (0, _ramda.compose)((0, _d3Fun.call)(fn), xf);
});

/**
 * variable argument length call combinator - composes selection transformation with d3 call method
 *   accepts variable number of arguments (is not curried because of this)
 * @param {Function} fn Function to be called on resulting selection
 * @param {any[]} args array of passed arguments to function fn
 */
var callv = exports.callv = function callv(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (xf) {
    return function (selection) {
      var _xf;

      return (_xf = xf(selection)).call.apply(_xf, [fn].concat(args));
    };
  };
};

/**
 * on combinator - composes transformation with registering handler on event
 * @param {String} event Event name
 * @param {Function} handler Handler function for event
 * @param {Function} xf Transformation to be composed
 */
var on = exports.on = (0, _ramda.curry)(function (event, handler, xf) {
  return (0, _ramda.compose)((0, _d3Fun.on)(event, handler), xf);
});

/**
 * classed combinator - composes transformation with setting class value
 * @param {String} classList
 * @param {Function|Boolean} value
 * @param {Function} xf Transformation to be composed
 */
var classed = exports.classed = (0, _ramda.curry)(function (classList, value, xf) {
  return (0, _ramda.compose)((0, _d3Fun.classed)(classList, value), xf);
});

/**
 * order combinator - composes transformation with ordering selection
 * @param {Function} xf Transformation to be composed
 */
var order = exports.order = function order(xf) {
  return (0, _ramda.compose)(_d3Fun.order, xf);
};

/**
 * sort combinator - composes transformation with sorting selection
 * @param {Function} comparator Comparator function used to sort elements in selection
 * @param {Function} xf Transformation to be composed
 */
var sort = exports.sort = (0, _ramda.curry)(function (comparator, xf) {
  return (0, _ramda.compose)((0, _d3Fun.sort)(comparator), xf);
});

/**
 * each combinator - composes transformation with function called on each selection element
 * @param {Function} fn Function to be called on elements in selection
 * @param {Function} xf Transformation to be composed
 */
var each = exports.each = (0, _ramda.curry)(function (fn, xf) {
  return (0, _ramda.compose)((0, _d3Fun.each)(fn), xf);
});