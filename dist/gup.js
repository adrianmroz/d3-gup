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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVFPLElBQU0sMEJBQVMsU0FBVCxNQUFTLENBQUMsTUFBRDtvQ0FBWTs7OztTQUNoQyxJQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQ7V0FBUSxHQUFHLE1BQUg7R0FBUjtDQURROzs7Ozs7O0FBUWYsSUFBTSxvQkFBTSxrQkFBTSxVQUFDLE1BQUQsRUFBUyxFQUFUO1NBQWdCLEdBQUcsTUFBSDtDQUFoQixDQUFaOzs7Ozs7O0FBT04sSUFBTSxzQkFBTyxTQUFQLElBQU8sQ0FBQyxLQUFELEVBQVEsT0FBUjtTQUNsQiwrQkFBUyxLQUFULEVBQWdCLE9BQWhCO0NBRGtCIiwiZmlsZSI6Imd1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7b2YsIGN1cnJ5fSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgdGhyZWFkIGZyb20gJy4vdGhyZWFkJztcbmltcG9ydCBqb2luIGZyb20gJy4vam9pbic7XG5cbi8qKlxuICogUnVucyBpbiBzZXF1ZW5jZSBmdW5jdGlvbnMgb24gZDMgc2VsZWN0aW9uXG4gKiBEM1NlbGVjdGlvbiAtPiAoRDNTZWxlY3Rpb24gLT4gYSkgLT4gKEQzU2VsZWN0aW9uIC0+IGIpIC4uLlxuICogQHBhcmFtIHtEM1NlbGVjdGlvbn0gcGFyZW50IC0gc2VsZWN0aW9uIHJlcHJlc2VudGluZyBwYXJlbnQgbm9kZVxuICogQHBhcmFtIHtGdW5jdGlvbltdfSB4ZnMgIC0gVHJhbnNmb3JtYXRpb25zIG9mIEQzU2VsZWN0aW9uIHRvIHJ1blxuICovXG5leHBvcnQgY29uc3QgZ3VwQWxsID0gKHBhcmVudCwgLi4ueGZzKSA9PlxuICB4ZnMuZm9yRWFjaCgoZm4pID0+IGZuKHBhcmVudCkpO1xuXG4vKipcbiAqIENhbGxzIHNlbGVjdGlvbiB0cmFuc2Zvcm1hdGlvbiBvbiBEM1NlbGVjdGlvbiBhbmQgcmV0dXJucyBvdXRjb21lXG4gKiBAcGFyYW0ge0QzU2VsZWN0aW9ufSBwYXJlbnQgLSBzZWxlY3Rpb24gcmVwcmVzZW50aW5nIHBhcmVudCBub2RlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiAtIFRyYW5zZm9ybWF0aW9uIG9mIEQzU2VsZWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBndXAgPSBjdXJyeSgocGFyZW50LCB4ZikgPT4geGYocGFyZW50KSk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgam9pbiByZXByZXNlbnRpbmcgbmVzdGluZyB2Tm9kZSBpbnNpZGUgcGFyZW50LiBVc2VzIChkKSA9PiBbZF0gcGF0dGVyblxuICogQHBhcmFtIHtPYmplY3R9IHZOb2RlIC0gTm9kZSBkZWZpbml0aW9uIHJlcHJlc2VudGluZyBqb2luXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIGpvaW5cbiAqL1xuZXhwb3J0IGNvbnN0IG5lc3QgPSAodk5vZGUsIG9wdGlvbnMpID0+XG4gIGpvaW4ob2YsIHZOb2RlLCBvcHRpb25zKTtcbiJdfQ==