'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = exports.order = exports.classed = exports.on = exports.callv = exports.call = undefined;

var _ramda = require('ramda');

var _d3Fun = require('./d3-fun');

/**
 * call combinator - composes transformation with d3 call method
 * @param {Function} fn Function to be called on resulting selection
 * @param {Function} xf Transformation to be composed at
 */
var call = exports.call = (0, _ramda.curryN)(2, function (fn, xf) {
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
var on = exports.on = (0, _ramda.curryN)(3, function (event, handler, xf) {
  return (0, _ramda.compose)((0, _d3Fun.on)(event, handler), xf);
});

/**
 * classed combinator - composes transformation with setting class value
 * @param {String} classList
 * @param {Function|Boolean} value
 * @param {Function} xf Transformation to be composed
 */
var classed = exports.classed = (0, _ramda.curryN)(3, function (classList, value, xf) {
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
var sort = exports.sort = (0, _ramda.curryN)(2, function (comparator, xf) {
  return (0, _ramda.compose)((0, _d3Fun.sort)(comparator), xf);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFhTyxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxFQUFELEVBQUssRUFBTDtTQUFZLG9CQUFRLGlCQUFPLEVBQVAsQ0FBUixFQUFvQixFQUFwQjtDQUFaLENBRFc7Ozs7Ozs7O0FBU04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO29DQUFROzs7O1NBQzNCLFVBQUMsRUFBRDtXQUNFLFVBQUMsU0FBRDs7O2FBQ0UsVUFBRyxTQUFILEdBQWMsSUFBZCxhQUFtQixXQUFPLEtBQTFCO0tBREY7R0FERjtDQURtQjs7Ozs7Ozs7QUFXZCxJQUFNLGtCQUFLLG1CQUFPLENBQVAsRUFDaEIsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixFQUFqQjtTQUF3QixvQkFBUSxlQUFLLEtBQUwsRUFBWSxPQUFaLENBQVIsRUFBOEIsRUFBOUI7Q0FBeEIsQ0FEVzs7Ozs7Ozs7QUFTTixJQUFNLDRCQUFVLG1CQUFPLENBQVAsRUFDckIsVUFBQyxTQUFELEVBQVksS0FBWixFQUFtQixFQUFuQjtTQUEwQixvQkFBUSxvQkFBVSxTQUFWLEVBQXFCLEtBQXJCLENBQVIsRUFBcUMsRUFBckM7Q0FBMUIsQ0FEVzs7Ozs7O0FBT04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO1NBQVEsa0NBQWlCLEVBQWpCO0NBQVI7Ozs7Ozs7QUFPZCxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxVQUFELEVBQWEsRUFBYjtTQUFvQixvQkFBUSxpQkFBTyxVQUFQLENBQVIsRUFBNEIsRUFBNUI7Q0FBcEIsQ0FEVyIsImZpbGUiOiJjb21iaW5hdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcG9zZSwgY3VycnlOfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQge1xuICBjYWxsIGFzIGQzY2FsbCxcbiAgY2xhc3NlZCBhcyBkM2NsYXNzZWQsXG4gIG9uIGFzIGQzb24sXG4gIG9yZGVyIGFzIGQzb3JkZXIsXG4gIHNvcnQgYXMgZDNzb3J0XG59IGZyb20gJy4vZDMtZnVuJztcblxuLyoqXG4gKiBjYWxsIGNvbWJpbmF0b3IgLSBjb21wb3NlcyB0cmFuc2Zvcm1hdGlvbiB3aXRoIGQzIGNhbGwgbWV0aG9kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gcmVzdWx0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWQgYXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGwgPSBjdXJyeU4oMixcbiAgKGZuLCB4ZikgPT4gY29tcG9zZShkM2NhbGwoZm4pLCB4ZikpO1xuXG4vKipcbiAqIHZhcmlhYmxlIGFyZ3VtZW50IGxlbmd0aCBjYWxsIGNvbWJpbmF0b3IgLSBjb21wb3NlcyBzZWxlY3Rpb24gdHJhbnNmb3JtYXRpb24gd2l0aCBkMyBjYWxsIG1ldGhvZFxuICogICBhY2NlcHRzIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMgKGlzIG5vdCBjdXJyaWVkIGJlY2F1c2Ugb2YgdGhpcylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiByZXN1bHRpbmcgc2VsZWN0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzIGFycmF5IG9mIHBhc3NlZCBhcmd1bWVudHMgdG8gZnVuY3Rpb24gZm5cbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGx2ID0gKGZuLCAuLi5hcmdzKSA9PlxuICAoeGYpID0+XG4gICAgKHNlbGVjdGlvbikgPT5cbiAgICAgIHhmKHNlbGVjdGlvbikuY2FsbChmbiwgLi4uYXJncyk7XG5cbi8qKlxuICogb24gY29tYmluYXRvciAtIGNvbXBvc2VzIHRyYW5zZm9ybWF0aW9uIHdpdGggcmVnaXN0ZXJpbmcgaGFuZGxlciBvbiBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IEV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiBmb3IgZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGNvbXBvc2VkXG4gKi9cbmV4cG9ydCBjb25zdCBvbiA9IGN1cnJ5TigzLFxuICAoZXZlbnQsIGhhbmRsZXIsIHhmKSA9PiBjb21wb3NlKGQzb24oZXZlbnQsIGhhbmRsZXIpLCB4ZikpO1xuXG4vKipcbiAqIGNsYXNzZWQgY29tYmluYXRvciAtIGNvbXBvc2VzIHRyYW5zZm9ybWF0aW9uIHdpdGggc2V0dGluZyBjbGFzcyB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGNsYXNzZWQgPSBjdXJyeU4oMyxcbiAgKGNsYXNzTGlzdCwgdmFsdWUsIHhmKSA9PiBjb21wb3NlKGQzY2xhc3NlZChjbGFzc0xpc3QsIHZhbHVlKSwgeGYpKTtcblxuLyoqXG4gKiBvcmRlciBjb21iaW5hdG9yIC0gY29tcG9zZXMgdHJhbnNmb3JtYXRpb24gd2l0aCBvcmRlcmluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGNvbXBvc2VkXG4gKi9cbmV4cG9ydCBjb25zdCBvcmRlciA9ICh4ZikgPT4gY29tcG9zZShkM29yZGVyLCB4Zik7XG5cbi8qKlxuICogc29ydCBjb21iaW5hdG9yIC0gY29tcG9zZXMgdHJhbnNmb3JtYXRpb24gd2l0aCBzb3J0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBDb21wYXJhdG9yIGZ1bmN0aW9uIHVzZWQgdG8gc29ydCBlbGVtZW50cyBpbiBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGNvbXBvc2VkXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0ID0gY3VycnlOKDIsXG4gIChjb21wYXJhdG9yLCB4ZikgPT4gY29tcG9zZShkM3NvcnQoY29tcGFyYXRvciksIHhmKSk7XG4iXX0=