'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = exports.order = exports.classed = exports.on = exports.callv = exports.call = undefined;

var _ramda = require('ramda');

var _d3Fun = require('d3-fun');

/**
 * call combinator - composes join with d3 call method
 * @param fn Function to be called on resulting selection
 * @param join join to be composed at
 */
var call = exports.call = (0, _ramda.curryN)(2, function (fn, join) {
  return (0, _ramda.compose)((0, _d3Fun.call)(fn), join);
});

/**
 * variable argument length call combinator - composes selection transformation with d3 call method
 *   accepts variable number of arguments (is not curried because of this)
 * @param fn Function to be called on resulting selection
 * @param args array of passed arguments to function fn
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
 * on combinator - composes join with registering handler on event
 * @param event Event name
 * @param handler Handler function for event
 * @param join Join to be composed
 */
var on = exports.on = (0, _ramda.curryN)(3, function (event, handler, join) {
  return (0, _ramda.compose)((0, _d3Fun.on)(event, handler), join);
});

/**
 * classed combinator - composes join with setting class value
 * @param classList
 * @param value
 * @param join Join to be composed
 */
var classed = exports.classed = (0, _ramda.curryN)(3, function (classList, value, join) {
  return (0, _ramda.compose)((0, _d3Fun.classed)(classList, value), join);
});

/**
 * order combinator - composes join with ordering selection
 * @param join
 */
var order = exports.order = function order(join) {
  return (0, _ramda.compose)(_d3Fun.order, join);
};

/**
 * sort combinator - composes join with sorting selection
 * @param comparator Comparator function used to sort elements in selection
 * @param join
 */
var sort = exports.sort = (0, _ramda.curryN)(2, function (comparator, join) {
  return (0, _ramda.compose)((0, _d3Fun.sort)(comparator), join);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFhTyxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxFQUFELEVBQUssSUFBTDtTQUFjLG9CQUFRLGlCQUFPLEVBQVAsQ0FBUixFQUFvQixJQUFwQjtDQUFkLENBRFc7Ozs7Ozs7O0FBU04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO29DQUFROzs7O1NBQzNCLFVBQUMsRUFBRDtXQUNFLFVBQUMsU0FBRDs7O2FBQ0UsVUFBRyxTQUFILEdBQWMsSUFBZCxhQUFtQixXQUFPLEtBQTFCO0tBREY7R0FERjtDQURtQjs7Ozs7Ozs7QUFXZCxJQUFNLGtCQUFLLG1CQUFPLENBQVAsRUFDaEIsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixJQUFqQjtTQUEwQixvQkFBUSxlQUFLLEtBQUwsRUFBWSxPQUFaLENBQVIsRUFBOEIsSUFBOUI7Q0FBMUIsQ0FEVzs7Ozs7Ozs7QUFTTixJQUFNLDRCQUFVLG1CQUFPLENBQVAsRUFDckIsVUFBQyxTQUFELEVBQVksS0FBWixFQUFtQixJQUFuQjtTQUE0QixvQkFBUSxvQkFBVSxTQUFWLEVBQXFCLEtBQXJCLENBQVIsRUFBcUMsSUFBckM7Q0FBNUIsQ0FEVzs7Ozs7O0FBT04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxJQUFEO1NBQVUsa0NBQWlCLElBQWpCO0NBQVY7Ozs7Ozs7QUFPZCxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxVQUFELEVBQWEsSUFBYjtTQUFzQixvQkFBUSxpQkFBTyxVQUFQLENBQVIsRUFBNEIsSUFBNUI7Q0FBdEIsQ0FEVyIsImZpbGUiOiJjb21iaW5hdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcG9zZSwgY3VycnlOfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQge1xuICBjYWxsIGFzIGQzY2FsbCxcbiAgY2xhc3NlZCBhcyBkM2NsYXNzZWQsXG4gIG9uIGFzIGQzb24sXG4gIG9yZGVyIGFzIGQzb3JkZXIsXG4gIHNvcnQgYXMgZDNzb3J0XG59IGZyb20gJ2QzLWZ1bic7XG5cbi8qKlxuICogY2FsbCBjb21iaW5hdG9yIC0gY29tcG9zZXMgam9pbiB3aXRoIGQzIGNhbGwgbWV0aG9kXG4gKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHJlc3VsdGluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSBqb2luIGpvaW4gdG8gYmUgY29tcG9zZWQgYXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGwgPSBjdXJyeU4oMixcbiAgKGZuLCBqb2luKSA9PiBjb21wb3NlKGQzY2FsbChmbiksIGpvaW4pKTtcblxuLyoqXG4gKiB2YXJpYWJsZSBhcmd1bWVudCBsZW5ndGggY2FsbCBjb21iaW5hdG9yIC0gY29tcG9zZXMgc2VsZWN0aW9uIHRyYW5zZm9ybWF0aW9uIHdpdGggZDMgY2FsbCBtZXRob2RcbiAqICAgYWNjZXB0cyB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzIChpcyBub3QgY3VycmllZCBiZWNhdXNlIG9mIHRoaXMpXG4gKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHJlc3VsdGluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSBhcmdzIGFycmF5IG9mIHBhc3NlZCBhcmd1bWVudHMgdG8gZnVuY3Rpb24gZm5cbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGx2ID0gKGZuLCAuLi5hcmdzKSA9PlxuICAoeGYpID0+XG4gICAgKHNlbGVjdGlvbikgPT5cbiAgICAgIHhmKHNlbGVjdGlvbikuY2FsbChmbiwgLi4uYXJncyk7XG5cbi8qKlxuICogb24gY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCByZWdpc3RlcmluZyBoYW5kbGVyIG9uIGV2ZW50XG4gKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiBmb3IgZXZlbnRcbiAqIEBwYXJhbSBqb2luIEpvaW4gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IG9uID0gY3VycnlOKDMsXG4gIChldmVudCwgaGFuZGxlciwgam9pbikgPT4gY29tcG9zZShkM29uKGV2ZW50LCBoYW5kbGVyKSwgam9pbikpO1xuXG4vKipcbiAqIGNsYXNzZWQgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBzZXR0aW5nIGNsYXNzIHZhbHVlXG4gKiBAcGFyYW0gY2xhc3NMaXN0XG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBqb2luIEpvaW4gdG8gYmUgY29tcG9zZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGNsYXNzZWQgPSBjdXJyeU4oMyxcbiAgKGNsYXNzTGlzdCwgdmFsdWUsIGpvaW4pID0+IGNvbXBvc2UoZDNjbGFzc2VkKGNsYXNzTGlzdCwgdmFsdWUpLCBqb2luKSk7XG5cbi8qKlxuICogb3JkZXIgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBvcmRlcmluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSBqb2luXG4gKi9cbmV4cG9ydCBjb25zdCBvcmRlciA9IChqb2luKSA9PiBjb21wb3NlKGQzb3JkZXIsIGpvaW4pO1xuXG4vKipcbiAqIHNvcnQgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBzb3J0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyYXRvciBmdW5jdGlvbiB1c2VkIHRvIHNvcnQgZWxlbWVudHMgaW4gc2VsZWN0aW9uXG4gKiBAcGFyYW0gam9pblxuICovXG5leHBvcnQgY29uc3Qgc29ydCA9IGN1cnJ5TigyLFxuICAoY29tcGFyYXRvciwgam9pbikgPT4gY29tcG9zZShkM3NvcnQoY29tcGFyYXRvciksIGpvaW4pKTtcbiJdfQ==