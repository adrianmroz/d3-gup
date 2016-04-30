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

var parallelClassed = function parallelClassed(classDefinitions) {
  return function (selection) {
    return Object.keys(classDefinitions).reduce(function (className, node) {
      return node.classed(className, classDefinitions[className]);
    }, selection);
  };
};

/**
 * classed combinator - composes join with setting class value
 * @param classDefinition Object
 *    keys are classNames, values are d3 classed function value attribute, bool or data -> bool
 * @param join Join to be composed
 */
var classed = exports.classed = (0, _ramda.curryN)(2, function (classDefinition, join) {
  return (0, _ramda.compose)(parallelClassed(classDefinition), join);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7QUFPTyxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxFQUFELEVBQUssSUFBTDtTQUFjLG9CQUFRLGlCQUFPLEVBQVAsQ0FBUixFQUFvQixJQUFwQjtDQUFkLENBRFc7Ozs7Ozs7O0FBU04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO29DQUFROzs7O1NBQzNCLFVBQUMsRUFBRDtXQUNFLFVBQUMsU0FBRDs7O2FBQ0UsVUFBRyxTQUFILEdBQWMsSUFBZCxhQUFtQixXQUFPLEtBQTFCO0tBREY7R0FERjtDQURtQjs7Ozs7Ozs7QUFXZCxJQUFNLGtCQUFLLG1CQUFPLENBQVAsRUFDaEIsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixJQUFqQjtTQUEwQixvQkFBUSxlQUFLLEtBQUwsRUFBWSxPQUFaLENBQVIsRUFBOEIsSUFBOUI7Q0FBMUIsQ0FEVzs7QUFHYixJQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFDLGdCQUFEO1NBQ3RCLFVBQUMsU0FBRDtXQUNFLE9BQU8sSUFBUCxDQUFZLGdCQUFaLEVBQ0csTUFESCxDQUNVLFVBQUMsU0FBRCxFQUFZLElBQVo7YUFDTixLQUFLLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLGlCQUFpQixTQUFqQixDQUF4QjtLQURNLEVBQ2dELFNBRjFEO0dBREY7Q0FEc0I7Ozs7Ozs7O0FBWWpCLElBQU0sNEJBQVUsbUJBQU8sQ0FBUCxFQUNyQixVQUFDLGVBQUQsRUFBa0IsSUFBbEI7U0FBMkIsb0JBQVEsZ0JBQWdCLGVBQWhCLENBQVIsRUFBMEMsSUFBMUM7Q0FBM0IsQ0FEVzs7Ozs7O0FBT04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxJQUFEO1NBQVUsa0NBQWlCLElBQWpCO0NBQVY7Ozs7Ozs7QUFPZCxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxVQUFELEVBQWEsSUFBYjtTQUFzQixvQkFBUSxpQkFBTyxVQUFQLENBQVIsRUFBNEIsSUFBNUI7Q0FBdEIsQ0FEVyIsImZpbGUiOiJjb21iaW5hdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcG9zZSwgY3VycnlOfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQge2NhbGwgYXMgZDNjYWxsLCBvbiBhcyBkM29uLCBvcmRlciBhcyBkM29yZGVyLCBzb3J0IGFzIGQzc29ydH0gZnJvbSAnZDMtZnVuJztcblxuLyoqXG4gKiBjYWxsIGNvbWJpbmF0b3IgLSBjb21wb3NlcyBqb2luIHdpdGggZDMgY2FsbCBtZXRob2RcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gcmVzdWx0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIGpvaW4gam9pbiB0byBiZSBjb21wb3NlZCBhdFxuICovXG5leHBvcnQgY29uc3QgY2FsbCA9IGN1cnJ5TigyLFxuICAoZm4sIGpvaW4pID0+IGNvbXBvc2UoZDNjYWxsKGZuKSwgam9pbikpO1xuXG4vKipcbiAqIHZhcmlhYmxlIGFyZ3VtZW50IGxlbmd0aCBjYWxsIGNvbWJpbmF0b3IgLSBjb21wb3NlcyBzZWxlY3Rpb24gdHJhbnNmb3JtYXRpb24gd2l0aCBkMyBjYWxsIG1ldGhvZFxuICogICBhY2NlcHRzIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMgKGlzIG5vdCBjdXJyaWVkIGJlY2F1c2Ugb2YgdGhpcylcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gcmVzdWx0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIGFyZ3MgYXJyYXkgb2YgcGFzc2VkIGFyZ3VtZW50cyB0byBmdW5jdGlvbiBmblxuICovXG5leHBvcnQgY29uc3QgY2FsbHYgPSAoZm4sIC4uLmFyZ3MpID0+XG4gICh4ZikgPT5cbiAgICAoc2VsZWN0aW9uKSA9PlxuICAgICAgeGYoc2VsZWN0aW9uKS5jYWxsKGZuLCAuLi5hcmdzKTtcblxuLyoqXG4gKiBvbiBjb21iaW5hdG9yIC0gY29tcG9zZXMgam9pbiB3aXRoIHJlZ2lzdGVyaW5nIGhhbmRsZXIgb24gZXZlbnRcbiAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIGZvciBldmVudFxuICogQHBhcmFtIGpvaW4gSm9pbiB0byBiZSBjb21wb3NlZFxuICovXG5leHBvcnQgY29uc3Qgb24gPSBjdXJyeU4oMyxcbiAgKGV2ZW50LCBoYW5kbGVyLCBqb2luKSA9PiBjb21wb3NlKGQzb24oZXZlbnQsIGhhbmRsZXIpLCBqb2luKSk7XG5cbmNvbnN0IHBhcmFsbGVsQ2xhc3NlZCA9IChjbGFzc0RlZmluaXRpb25zKSA9PlxuICAoc2VsZWN0aW9uKSA9PlxuICAgIE9iamVjdC5rZXlzKGNsYXNzRGVmaW5pdGlvbnMpXG4gICAgICAucmVkdWNlKChjbGFzc05hbWUsIG5vZGUpID0+XG4gICAgICAgIG5vZGUuY2xhc3NlZChjbGFzc05hbWUsIGNsYXNzRGVmaW5pdGlvbnNbY2xhc3NOYW1lXSksIHNlbGVjdGlvbik7XG5cbi8qKlxuICogY2xhc3NlZCBjb21iaW5hdG9yIC0gY29tcG9zZXMgam9pbiB3aXRoIHNldHRpbmcgY2xhc3MgdmFsdWVcbiAqIEBwYXJhbSBjbGFzc0RlZmluaXRpb24gT2JqZWN0XG4gKiAgICBrZXlzIGFyZSBjbGFzc05hbWVzLCB2YWx1ZXMgYXJlIGQzIGNsYXNzZWQgZnVuY3Rpb24gdmFsdWUgYXR0cmlidXRlLCBib29sIG9yIGRhdGEgLT4gYm9vbFxuICogQHBhcmFtIGpvaW4gSm9pbiB0byBiZSBjb21wb3NlZFxuICovXG5leHBvcnQgY29uc3QgY2xhc3NlZCA9IGN1cnJ5TigyLFxuICAoY2xhc3NEZWZpbml0aW9uLCBqb2luKSA9PiBjb21wb3NlKHBhcmFsbGVsQ2xhc3NlZChjbGFzc0RlZmluaXRpb24pLCBqb2luKSk7XG5cbi8qKlxuICogb3JkZXIgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBvcmRlcmluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSBqb2luXG4gKi9cbmV4cG9ydCBjb25zdCBvcmRlciA9IChqb2luKSA9PiBjb21wb3NlKGQzb3JkZXIsIGpvaW4pO1xuXG4vKipcbiAqIHNvcnQgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBzb3J0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyYXRvciBmdW5jdGlvbiB1c2VkIHRvIHNvcnQgZWxlbWVudHMgaW4gc2VsZWN0aW9uXG4gKiBAcGFyYW0gam9pblxuICovXG5leHBvcnQgY29uc3Qgc29ydCA9IGN1cnJ5TigyLFxuICAoY29tcGFyYXRvciwgam9pbikgPT4gY29tcG9zZShkM3NvcnQoY29tcGFyYXRvciksIGpvaW4pKTtcbiJdfQ==