'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = exports.order = exports.classed = exports.on = exports.call = undefined;

var _ramda = require('ramda');

/**
 * call combinator - composes join with d3 call method
 * @param fn Function to be called on resulting selection
 * @param join join to be composed at
 */
var call = exports.call = (0, _ramda.curryN)(2, function (fn, join) {
  return function (selection) {
    return join(selection).call(fn);
  };
});

/**
 * on combinator - composes join with registering handler on event
 * @param event Event name
 * @param handler Handler function for event
 * @param join Join to be composed
 */
var on = exports.on = (0, _ramda.curryN)(3, function (event, handler, join) {
  return function (selection) {
    return join(selection).on(event, handler);
  };
});

/**
 * classed combinator - composes join with setting class value
 * @param classList String representing classes of element to be changed
 * @param value d3 classed function value attribute, bool or data -> bool
 * @param join Join to be composed
 */
var classed = exports.classed = (0, _ramda.curryN)(3, function (classList, value, join) {
  return function (selection) {
    return join(selection).classed(classList, value);
  };
});

/**
 * order combinator - composes join with ordering selection
 * @param join
 */
var order = exports.order = function order(join) {
  return function (selection) {
    return join(selection).order();
  };
};

/**
 * sort combinator - composes join with sorting selection
 * @param comparator Comparator function used to sort elements in selection
 * @param join
 */
var sort = exports.sort = (0, _ramda.curryN)(2, function (comparator, join) {
  return function (selection) {
    return join(selection).sort(comparator);
  };
});