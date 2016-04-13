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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7QUFPTyxJQUFNLHNCQUFPLG1CQUFPLENBQVAsRUFDbEIsVUFBQyxFQUFELEVBQUssSUFBTDtTQUNFLFVBQUMsU0FBRDtXQUNFLEtBQUssU0FBTCxFQUFnQixJQUFoQixDQUFxQixFQUFyQjtHQURGO0NBREYsQ0FEVzs7Ozs7Ozs7QUFXTixJQUFNLGtCQUFLLG1CQUFPLENBQVAsRUFDaEIsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixJQUFqQjtTQUNFLFVBQUMsU0FBRDtXQUNFLEtBQUssU0FBTCxFQUFnQixFQUFoQixDQUFtQixLQUFuQixFQUEwQixPQUExQjtHQURGO0NBREYsQ0FEVzs7Ozs7Ozs7QUFXTixJQUFNLDRCQUFVLG1CQUFPLENBQVAsRUFDckIsVUFBQyxTQUFELEVBQVksS0FBWixFQUFtQixJQUFuQjtTQUNFLFVBQUMsU0FBRDtXQUNFLEtBQUssU0FBTCxFQUFnQixPQUFoQixDQUF3QixTQUF4QixFQUFtQyxLQUFuQztHQURGO0NBREYsQ0FEVzs7Ozs7O0FBU04sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxJQUFEO1NBQ25CLFVBQUMsU0FBRDtXQUNFLEtBQUssU0FBTCxFQUFnQixLQUFoQjtHQURGO0NBRG1COzs7Ozs7O0FBU2QsSUFBTSxzQkFBTyxtQkFBTyxDQUFQLEVBQ2xCLFVBQUMsVUFBRCxFQUFhLElBQWI7U0FDRSxVQUFDLFNBQUQ7V0FDRSxLQUFLLFNBQUwsRUFBZ0IsSUFBaEIsQ0FBcUIsVUFBckI7R0FERjtDQURGLENBRFciLCJmaWxlIjoiY29tYmluYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1cnJ5Tn0gZnJvbSAncmFtZGEnO1xuXG4vKipcbiAqIGNhbGwgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBkMyBjYWxsIG1ldGhvZFxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiByZXN1bHRpbmcgc2VsZWN0aW9uXG4gKiBAcGFyYW0gam9pbiBqb2luIHRvIGJlIGNvbXBvc2VkIGF0XG4gKi9cbmV4cG9ydCBjb25zdCBjYWxsID0gY3VycnlOKDIsXG4gIChmbiwgam9pbikgPT5cbiAgICAoc2VsZWN0aW9uKSA9PlxuICAgICAgam9pbihzZWxlY3Rpb24pLmNhbGwoZm4pKTtcblxuLyoqXG4gKiBvbiBjb21iaW5hdG9yIC0gY29tcG9zZXMgam9pbiB3aXRoIHJlZ2lzdGVyaW5nIGhhbmRsZXIgb24gZXZlbnRcbiAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIGZvciBldmVudFxuICogQHBhcmFtIGpvaW4gSm9pbiB0byBiZSBjb21wb3NlZFxuICovXG5leHBvcnQgY29uc3Qgb24gPSBjdXJyeU4oMyxcbiAgKGV2ZW50LCBoYW5kbGVyLCBqb2luKSA9PlxuICAgIChzZWxlY3Rpb24pID0+XG4gICAgICBqb2luKHNlbGVjdGlvbikub24oZXZlbnQsIGhhbmRsZXIpKTtcblxuLyoqXG4gKiBjbGFzc2VkIGNvbWJpbmF0b3IgLSBjb21wb3NlcyBqb2luIHdpdGggc2V0dGluZyBjbGFzcyB2YWx1ZVxuICogQHBhcmFtIGNsYXNzTGlzdCBTdHJpbmcgcmVwcmVzZW50aW5nIGNsYXNzZXMgb2YgZWxlbWVudCB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gdmFsdWUgZDMgY2xhc3NlZCBmdW5jdGlvbiB2YWx1ZSBhdHRyaWJ1dGUsIGJvb2wgb3IgZGF0YSAtPiBib29sXG4gKiBAcGFyYW0gam9pbiBKb2luIHRvIGJlIGNvbXBvc2VkXG4gKi9cbmV4cG9ydCBjb25zdCBjbGFzc2VkID0gY3VycnlOKDMsXG4gIChjbGFzc0xpc3QsIHZhbHVlLCBqb2luKSA9PlxuICAgIChzZWxlY3Rpb24pID0+XG4gICAgICBqb2luKHNlbGVjdGlvbikuY2xhc3NlZChjbGFzc0xpc3QsIHZhbHVlKSk7XG5cbi8qKlxuICogb3JkZXIgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBvcmRlcmluZyBzZWxlY3Rpb25cbiAqIEBwYXJhbSBqb2luXG4gKi9cbmV4cG9ydCBjb25zdCBvcmRlciA9IChqb2luKSA9PlxuICAoc2VsZWN0aW9uKSA9PlxuICAgIGpvaW4oc2VsZWN0aW9uKS5vcmRlcigpO1xuXG4vKipcbiAqIHNvcnQgY29tYmluYXRvciAtIGNvbXBvc2VzIGpvaW4gd2l0aCBzb3J0aW5nIHNlbGVjdGlvblxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyYXRvciBmdW5jdGlvbiB1c2VkIHRvIHNvcnQgZWxlbWVudHMgaW4gc2VsZWN0aW9uXG4gKiBAcGFyYW0gam9pblxuICovXG5leHBvcnQgY29uc3Qgc29ydCA9IGN1cnJ5TigyLFxuICAoY29tcGFyYXRvciwgam9pbikgPT5cbiAgICAoc2VsZWN0aW9uKSA9PlxuICAgICAgam9pbihzZWxlY3Rpb24pLnNvcnQoY29tcGFyYXRvcikpO1xuIl19