'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.text = exports.style = exports.attr2 = exports.attr = exports.classed = exports.append = exports.exit = exports.enter = exports.data2 = exports.data = exports.selectAll = undefined;

var _ramda = require('ramda');

// Export d3 selection methods as invokers for proper function composition
var selectAll = exports.selectAll = (0, _ramda.invoker)(1, 'selectAll');
var data = exports.data = (0, _ramda.invoker)(1, 'data');
var data2 = exports.data2 = (0, _ramda.invoker)(2, 'data');
var enter = exports.enter = (0, _ramda.invoker)(0, 'enter');
var exit = exports.exit = (0, _ramda.invoker)(0, 'exit');
var append = exports.append = (0, _ramda.invoker)(1, 'append');
var classed = exports.classed = (0, _ramda.invoker)(2, 'classed');
var attr = exports.attr = (0, _ramda.invoker)(1, 'attr');
var attr2 = exports.attr2 = (0, _ramda.invoker)(2, 'attr');
var style = exports.style = (0, _ramda.invoker)(1, 'style');
var text = exports.text = (0, _ramda.invoker)(1, 'text');
var remove = exports.remove = (0, _ramda.invoker)(0, 'remove');