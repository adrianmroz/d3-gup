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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFhTyxJQUFNLHNCQUFPLGtCQUFNLFVBQUMsRUFBRCxFQUFLLEVBQUw7U0FDeEIsb0JBQVEsaUJBQU8sRUFBUCxDQUFSLEVBQW9CLEVBQXBCO0NBRHdCLENBQWI7Ozs7Ozs7O0FBU04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO29DQUFROzs7O1NBQzNCLFVBQUMsRUFBRDtXQUNFLFVBQUMsU0FBRDs7O2FBQ0UsVUFBRyxTQUFILEdBQWMsSUFBZCxhQUFtQixXQUFPLEtBQTFCO0tBREY7R0FERjtDQURtQjs7Ozs7Ozs7QUFXZCxJQUFNLGtCQUFLLGtCQUFNLFVBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsRUFBakI7U0FDcEIsb0JBQVEsZUFBSyxLQUFMLEVBQVksT0FBWixDQUFSLEVBQThCLEVBQTlCO0NBRG9CLENBQVg7Ozs7Ozs7O0FBU04sSUFBTSw0QkFBVSxrQkFBTSxVQUFDLFNBQUQsRUFBWSxLQUFaLEVBQW1CLEVBQW5CO1NBQzNCLG9CQUFRLG9CQUFVLFNBQVYsRUFBcUIsS0FBckIsQ0FBUixFQUFxQyxFQUFyQztDQUQyQixDQUFoQjs7Ozs7O0FBT04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO1NBQVEsa0NBQWlCLEVBQWpCO0NBQVI7Ozs7Ozs7QUFPZCxJQUFNLHNCQUFPLGtCQUFNLFVBQUMsVUFBRCxFQUFhLEVBQWI7U0FDeEIsb0JBQVEsaUJBQU8sVUFBUCxDQUFSLEVBQTRCLEVBQTVCO0NBRHdCLENBQWIiLCJmaWxlIjoiY29tYmluYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXBvc2UsIGN1cnJ5fSBmcm9tICdyYW1kYSc7XG5pbXBvcnQge1xuICBjYWxsIGFzIGQzY2FsbCxcbiAgY2xhc3NlZCBhcyBkM2NsYXNzZWQsXG4gIG9uIGFzIGQzb24sXG4gIG9yZGVyIGFzIGQzb3JkZXIsXG4gIHNvcnQgYXMgZDNzb3J0XG59IGZyb20gJy4vZDMtZnVuJztcblxuLyoqXG4gKiBjYWxsIGNvbWJpbmF0b3IgLSBjb21wb3NlcyB0cmFuc2Zvcm1hdGlvbiB3aXRoIGQzIGNhbGwgbWV0aG9kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gcmVzdWx0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWQgYXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGwgPSBjdXJyeSgoZm4sIHhmKSA9PlxuICBjb21wb3NlKGQzY2FsbChmbiksIHhmKSk7XG5cbi8qKlxuICogdmFyaWFibGUgYXJndW1lbnQgbGVuZ3RoIGNhbGwgY29tYmluYXRvciAtIGNvbXBvc2VzIHNlbGVjdGlvbiB0cmFuc2Zvcm1hdGlvbiB3aXRoIGQzIGNhbGwgbWV0aG9kXG4gKiAgIGFjY2VwdHMgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoaXMgbm90IGN1cnJpZWQgYmVjYXVzZSBvZiB0aGlzKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHJlc3VsdGluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7YW55W119IGFyZ3MgYXJyYXkgb2YgcGFzc2VkIGFyZ3VtZW50cyB0byBmdW5jdGlvbiBmblxuICovXG5leHBvcnQgY29uc3QgY2FsbHYgPSAoZm4sIC4uLmFyZ3MpID0+XG4gICh4ZikgPT5cbiAgICAoc2VsZWN0aW9uKSA9PlxuICAgICAgeGYoc2VsZWN0aW9uKS5jYWxsKGZuLCAuLi5hcmdzKTtcblxuLyoqXG4gKiBvbiBjb21iaW5hdG9yIC0gY29tcG9zZXMgdHJhbnNmb3JtYXRpb24gd2l0aCByZWdpc3RlcmluZyBoYW5kbGVyIG9uIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgRXZlbnQgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIGZvciBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IG9uID0gY3VycnkoKGV2ZW50LCBoYW5kbGVyLCB4ZikgPT5cbiAgICBjb21wb3NlKGQzb24oZXZlbnQsIGhhbmRsZXIpLCB4ZikpO1xuXG4vKipcbiAqIGNsYXNzZWQgY29tYmluYXRvciAtIGNvbXBvc2VzIHRyYW5zZm9ybWF0aW9uIHdpdGggc2V0dGluZyBjbGFzcyB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGNsYXNzZWQgPSBjdXJyeSgoY2xhc3NMaXN0LCB2YWx1ZSwgeGYpID0+XG4gIGNvbXBvc2UoZDNjbGFzc2VkKGNsYXNzTGlzdCwgdmFsdWUpLCB4ZikpO1xuXG4vKipcbiAqIG9yZGVyIGNvbWJpbmF0b3IgLSBjb21wb3NlcyB0cmFuc2Zvcm1hdGlvbiB3aXRoIG9yZGVyaW5nIHNlbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IG9yZGVyID0gKHhmKSA9PiBjb21wb3NlKGQzb3JkZXIsIHhmKTtcblxuLyoqXG4gKiBzb3J0IGNvbWJpbmF0b3IgLSBjb21wb3NlcyB0cmFuc2Zvcm1hdGlvbiB3aXRoIHNvcnRpbmcgc2VsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIENvbXBhcmF0b3IgZnVuY3Rpb24gdXNlZCB0byBzb3J0IGVsZW1lbnRzIGluIHNlbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVHJhbnNmb3JtYXRpb24gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNvcnQgPSBjdXJyeSgoY29tcGFyYXRvciwgeGYpID0+XG4gIGNvbXBvc2UoZDNzb3J0KGNvbXBhcmF0b3IpLCB4ZikpO1xuIl19