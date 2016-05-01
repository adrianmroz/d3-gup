'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = exports.order = exports.classed = exports.on = exports.callv = exports.call = undefined;

var _ramda = require('ramda');

var _d3Fun = require('d3-fun');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFhTyxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxFQUFELEVBQUssRUFBTDtTQUFZLG9CQUFRLGlCQUFPLEVBQVAsQ0FBUixFQUFvQixFQUFwQjtDQUFaLENBRFc7Ozs7Ozs7O0FBU04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO29DQUFROzs7O1NBQzNCLFVBQUMsRUFBRDtXQUNFLFVBQUMsU0FBRDs7O2FBQ0UsVUFBRyxTQUFILEdBQWMsSUFBZCxhQUFtQixXQUFPLEtBQTFCO0tBREY7R0FERjtDQURtQjs7Ozs7Ozs7QUFXZCxJQUFNLGtCQUFLLG1CQUFPLENBQVAsRUFDaEIsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixFQUFqQjtTQUF3QixvQkFBUSxlQUFLLEtBQUwsRUFBWSxPQUFaLENBQVIsRUFBOEIsRUFBOUI7Q0FBeEIsQ0FEVzs7Ozs7Ozs7QUFTTixJQUFNLDRCQUFVLG1CQUFPLENBQVAsRUFDckIsVUFBQyxTQUFELEVBQVksS0FBWixFQUFtQixFQUFuQjtTQUEwQixvQkFBUSxvQkFBVSxTQUFWLEVBQXFCLEtBQXJCLENBQVIsRUFBcUMsRUFBckM7Q0FBMUIsQ0FEVzs7Ozs7O0FBT04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO1NBQVEsa0NBQWlCLEVBQWpCO0NBQVI7Ozs7Ozs7QUFPZCxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxVQUFELEVBQWEsRUFBYjtTQUFvQixvQkFBUSxpQkFBTyxVQUFQLENBQVIsRUFBNEIsRUFBNUI7Q0FBcEIsQ0FEVyIsImZpbGUiOiJjb21iaW5hdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcG9zZSwgY3VycnlOfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQge1xuICBjYWxsIGFzIGQzY2FsbCxcbiAgY2xhc3NlZCBhcyBkM2NsYXNzZWQsXG4gIG9uIGFzIGQzb24sXG4gIG9yZGVyIGFzIGQzb3JkZXIsXG4gIHNvcnQgYXMgZDNzb3J0XG59IGZyb20gJ2QzLWZ1bic7XG5cbi8qKlxuICogY2FsbCBjb21iaW5hdG9yIC0gY29tcG9zZXMgdHJhbnNmb3JtYXRpb24gd2l0aCBkMyBjYWxsIG1ldGhvZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHJlc3VsdGluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGNvbXBvc2VkIGF0XG4gKi9cbmV4cG9ydCBjb25zdCBjYWxsID0gY3VycnlOKDIsXG4gIChmbiwgeGYpID0+IGNvbXBvc2UoZDNjYWxsKGZuKSwgeGYpKTtcblxuLyoqXG4gKiB2YXJpYWJsZSBhcmd1bWVudCBsZW5ndGggY2FsbCBjb21iaW5hdG9yIC0gY29tcG9zZXMgc2VsZWN0aW9uIHRyYW5zZm9ybWF0aW9uIHdpdGggZDMgY2FsbCBtZXRob2RcbiAqICAgYWNjZXB0cyB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzIChpcyBub3QgY3VycmllZCBiZWNhdXNlIG9mIHRoaXMpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gcmVzdWx0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIHthbnlbXX0gYXJncyBhcnJheSBvZiBwYXNzZWQgYXJndW1lbnRzIHRvIGZ1bmN0aW9uIGZuXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxsdiA9IChmbiwgLi4uYXJncykgPT5cbiAgKHhmKSA9PlxuICAgIChzZWxlY3Rpb24pID0+XG4gICAgICB4ZihzZWxlY3Rpb24pLmNhbGwoZm4sIC4uLmFyZ3MpO1xuXG4vKipcbiAqIG9uIGNvbWJpbmF0b3IgLSBjb21wb3NlcyB0cmFuc2Zvcm1hdGlvbiB3aXRoIHJlZ2lzdGVyaW5nIGhhbmRsZXIgb24gZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBFdmVudCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gZm9yIGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiBUcmFuc2Zvcm1hdGlvbiB0byBiZSBjb21wb3NlZFxuICovXG5leHBvcnQgY29uc3Qgb24gPSBjdXJyeU4oMyxcbiAgKGV2ZW50LCBoYW5kbGVyLCB4ZikgPT4gY29tcG9zZShkM29uKGV2ZW50LCBoYW5kbGVyKSwgeGYpKTtcblxuLyoqXG4gKiBjbGFzc2VkIGNvbWJpbmF0b3IgLSBjb21wb3NlcyB0cmFuc2Zvcm1hdGlvbiB3aXRoIHNldHRpbmcgY2xhc3MgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0xpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbn0gdmFsdWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRyYW5zZm9ybWF0aW9uIHRvIGJlIGNvbXBvc2VkXG4gKi9cbmV4cG9ydCBjb25zdCBjbGFzc2VkID0gY3VycnlOKDMsXG4gIChjbGFzc0xpc3QsIHZhbHVlLCB4ZikgPT4gY29tcG9zZShkM2NsYXNzZWQoY2xhc3NMaXN0LCB2YWx1ZSksIHhmKSk7XG5cbi8qKlxuICogb3JkZXIgY29tYmluYXRvciAtIGNvbXBvc2VzIHRyYW5zZm9ybWF0aW9uIHdpdGggb3JkZXJpbmcgc2VsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiBUcmFuc2Zvcm1hdGlvbiB0byBiZSBjb21wb3NlZFxuICovXG5leHBvcnQgY29uc3Qgb3JkZXIgPSAoeGYpID0+IGNvbXBvc2UoZDNvcmRlciwgeGYpO1xuXG4vKipcbiAqIHNvcnQgY29tYmluYXRvciAtIGNvbXBvc2VzIHRyYW5zZm9ybWF0aW9uIHdpdGggc29ydGluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgQ29tcGFyYXRvciBmdW5jdGlvbiB1c2VkIHRvIHNvcnQgZWxlbWVudHMgaW4gc2VsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiBUcmFuc2Zvcm1hdGlvbiB0byBiZSBjb21wb3NlZFxuICovXG5leHBvcnQgY29uc3Qgc29ydCA9IGN1cnJ5TigyLFxuICAoY29tcGFyYXRvciwgeGYpID0+IGNvbXBvc2UoZDNzb3J0KGNvbXBhcmF0b3IpLCB4ZikpO1xuIl19