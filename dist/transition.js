'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

/**
 * helper for creating optional enter/exit transitions for joins
 *
 * @param attrs Object, where keys are animated node attributes and
 *  values are arrays of two - start and end values of attribute transition
 * @param duration duration of transition
 */

exports.default = function (attrs, duration) {
  return {
    enterTransform: function enterTransform(sel) {
      return sel.transition().duration(duration).attr((0, _ramda.map)((0, _ramda.nth)(1), attrs));
    },

    exitTransform: function exitTransform(sel) {
      return sel.transition().duration(duration).attr((0, _ramda.map)((0, _ramda.nth)(0), attrs));
    } };
};