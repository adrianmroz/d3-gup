'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Fun = require('./d3-fun');

var _ramda = require('ramda');

var _vnode = require('./vnode');

var _thread = require('./thread');

var _thread2 = _interopRequireDefault(_thread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSelector = function setSelector(vNode) {
  return (0, _ramda.pipe)((0, _d3Fun.classed)((0, _ramda.prop)('classList', vNode).join(' '), true), (0, _d3Fun.attr2)('id', (0, _ramda.prop)('id', vNode)));
};

var appendVNode = function appendVNode(vNode) {
  return (0, _d3Fun.append)((0, _ramda.prop)('tagName', vNode));
};

var insertNode = function insertNode(vNode, insertSelector) {
  return insert((0, _ramda.prop)('tagName', vNode), insertSelector);
};

var setConstantProps = function setConstantProps(vNode) {
  return (0, _ramda.pipe)((0, _d3Fun.attr)((0, _vnode.constantAttributes)(vNode)), (0, _d3Fun.style)((0, _vnode.constantStyle)(vNode)), (0, _d3Fun.text)((0, _vnode.textChildren)(vNode).join('')));
};

/**
 * Joins data with vNode definition.
 * @param {Array|Function} joinData  - Data for join. Accepts any type that could be handled by d3
 * @param {Object} vNode - Node definition representing join
 * @param {Object} Options
 *   @param {Function} enterTransform  - transformation on enter selection
 *   @param {Function} exitTransform - transformation on exit selection
 *   @param {Function} updateTransform - transformation on update selection
 *   @param {Function} keySelector - function passed as data selector
 *   @param {String} insertSelector - css selector for inserting element on enter
 */

exports.default = function (joinData, vNode) {
  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var _ref$enterTransform = _ref.enterTransform;
  var enterTransform = _ref$enterTransform === undefined ? _ramda.identity : _ref$enterTransform;
  var _ref$exitTransform = _ref.exitTransform;
  var exitTransform = _ref$exitTransform === undefined ? _ramda.identity : _ref$exitTransform;
  var _ref$updateTransform = _ref.updateTransform;
  var updateTransform = _ref$updateTransform === undefined ? _ramda.identity : _ref$updateTransform;
  var _ref$keySelector = _ref.keySelector;
  var keySelector = _ref$keySelector === undefined ? null : _ref$keySelector;
  var _ref$insertSelector = _ref.insertSelector;
  var insertSelector = _ref$insertSelector === undefined ? null : _ref$insertSelector;
  return function (parent) {
    var selection = (0, _thread2.default)(parent, (0, _d3Fun.selectAll)((0, _ramda.prop)('selector', vNode)), (0, _ramda.is)(Function, keySelector) ? (0, _d3Fun.data2)(joinData, keySelector) : (0, _d3Fun.data)(joinData));

    var enterSelection = (0, _thread2.default)(selection, _d3Fun.enter, (0, _ramda.is)(String, insertSelector) ? insertNode(vNode, insertSelector) : appendVNode(vNode), setConstantProps(vNode), setSelector(vNode));

    enterTransform(enterSelection);

    (0, _thread2.default)(selection, (0, _d3Fun.attr)((0, _vnode.boundAttributes)(vNode)), (0, _d3Fun.style)((0, _vnode.boundStyle)(vNode)), updateTransform);

    var textContent = (0, _vnode.boundTextContent)(vNode);
    if (!(0, _ramda.isNil)(textContent)) {
      (0, _d3Fun.text)(textContent, selection);
    }

    (0, _vnode.constantChildren)(vNode).forEach(function (child) {
      return (0, _thread2.default)(enterSelection, appendVNode(child), setConstantProps(child), setSelector(child));
    });

    (0, _vnode.boundChildren)(vNode).forEach(function (child) {
      return child(selection);
    });

    (0, _thread2.default)(selection, _d3Fun.exit, exitTransform, _d3Fun.remove);

    return selection;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qb2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQWVBOztBQVFBOztBQVVBOzs7Ozs7QUFHQSxJQUFNLGNBQWMsU0FBZCxXQUFjLENBQUMsS0FBRDtTQUFXLGlCQUM3QixvQkFBUSxpQkFBSyxXQUFMLEVBQWtCLEtBQWxCLEVBQXlCLElBQXpCLENBQThCLEdBQTlCLENBQVIsRUFBNEMsSUFBNUMsQ0FENkIsRUFFN0Isa0JBQU0sSUFBTixFQUFZLGlCQUFLLElBQUwsRUFBVyxLQUFYLENBQVosQ0FGNkI7Q0FBWDs7QUFLcEIsSUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQ7U0FBVyxtQkFBTyxpQkFBSyxTQUFMLEVBQWdCLEtBQWhCLENBQVA7Q0FBWDs7QUFFcEIsSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQsRUFBUSxjQUFSO1NBQTJCLE9BQU8saUJBQUssU0FBTCxFQUFnQixLQUFoQixDQUFQLEVBQStCLGNBQS9CO0NBQTNCOztBQUVuQixJQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxLQUFEO1NBQVcsaUJBQ2xDLGlCQUFLLCtCQUFtQixLQUFuQixDQUFMLENBRGtDLEVBRWxDLGtCQUFNLDBCQUFjLEtBQWQsQ0FBTixDQUZrQyxFQUdsQyxpQkFBSyx5QkFBYSxLQUFiLEVBQW9CLElBQXBCLENBQXlCLEVBQXpCLENBQUwsQ0FIa0M7Q0FBWDs7Ozs7Ozs7Ozs7Ozs7a0JBZ0JWLFVBQUMsUUFBRCxFQUFXLEtBQVg7bUVBTVA7O2lDQUxKOztnQ0FDQTs7a0NBQ0E7OzhCQUNBO3FEQUFjO2lDQUNkOzJEQUFpQjtTQUVqQixVQUFTLE1BQVQsRUFBaUI7QUFDZixRQUFNLFlBQVksc0JBQ2hCLE1BRGdCLEVBRWhCLHNCQUFVLGlCQUFLLFVBQUwsRUFBaUIsS0FBakIsQ0FBVixDQUZnQixFQUdoQixlQUFHLFFBQUgsRUFBYSxXQUFiLElBQTRCLGtCQUFNLFFBQU4sRUFBZ0IsV0FBaEIsQ0FBNUIsR0FBMkQsaUJBQUssUUFBTCxDQUEzRCxDQUhJLENBRFM7O0FBT2YsUUFBTSxpQkFBaUIsc0JBQ3JCLFNBRHFCLGdCQUdyQixlQUFHLE1BQUgsRUFBVyxjQUFYLElBQTZCLFdBQVcsS0FBWCxFQUFrQixjQUFsQixDQUE3QixHQUFpRSxZQUFZLEtBQVosQ0FBakUsRUFDQSxpQkFBaUIsS0FBakIsQ0FKcUIsRUFLckIsWUFBWSxLQUFaLENBTHFCLENBQWpCLENBUFM7O0FBZWYsbUJBQWUsY0FBZixFQWZlOztBQWlCZiwwQkFDRSxTQURGLEVBRUUsaUJBQUssNEJBQWdCLEtBQWhCLENBQUwsQ0FGRixFQUdFLGtCQUFNLHVCQUFXLEtBQVgsQ0FBTixDQUhGLEVBSUUsZUFKRixFQWpCZTs7QUF3QmYsUUFBTSxjQUFjLDZCQUFpQixLQUFqQixDQUFkLENBeEJTO0FBeUJmLFFBQUcsQ0FBQyxrQkFBTSxXQUFOLENBQUQsRUFBcUI7QUFDdEIsdUJBQUssV0FBTCxFQUFrQixTQUFsQixFQURzQjtLQUF4Qjs7QUFJQSxpQ0FBaUIsS0FBakIsRUFDRyxPQURILENBQ1csVUFBQyxLQUFEO2FBQ1Asc0JBQ0UsY0FERixFQUVFLFlBQVksS0FBWixDQUZGLEVBR0UsaUJBQWlCLEtBQWpCLENBSEYsRUFJRSxZQUFZLEtBQVosQ0FKRjtLQURPLENBRFgsQ0E3QmU7O0FBdUNmLDhCQUFjLEtBQWQsRUFDRyxPQURILENBQ1csVUFBQyxLQUFEO2FBQVcsTUFBTSxTQUFOO0tBQVgsQ0FEWCxDQXZDZTs7QUEwQ2YsMEJBQ0UsU0FERixlQUdFLGFBSEYsaUJBMUNlOztBQWlEZixXQUFPLFNBQVAsQ0FqRGU7R0FBakI7Q0FQVyIsImZpbGUiOiJqb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXBwZW5kLFxuICBhdHRyLFxuICBhdHRyMixcbiAgY2xhc3NlZCxcbiAgZGF0YSxcbiAgZGF0YTIsXG4gIGVudGVyLFxuICBleGl0LFxuICByZW1vdmUsXG4gIHN0eWxlLFxuICBzZWxlY3RBbGwsXG4gIHRleHRcbn0gZnJvbSAnLi9kMy1mdW4nO1xuXG5pbXBvcnQge1xuICBpZGVudGl0eSxcbiAgaXNOaWwsXG4gIGlzLFxuICBwaXBlLFxuICBwcm9wXG59IGZyb20gJ3JhbWRhJztcblxuaW1wb3J0IHtcbiAgYm91bmRBdHRyaWJ1dGVzLFxuICBib3VuZENoaWxkcmVuLFxuICBib3VuZFN0eWxlLFxuICBib3VuZFRleHRDb250ZW50LFxuICBjb25zdGFudEF0dHJpYnV0ZXMsXG4gIGNvbnN0YW50Q2hpbGRyZW4sXG4gIGNvbnN0YW50U3R5bGUsXG4gIHRleHRDaGlsZHJlblxufSBmcm9tICcuL3Zub2RlJztcbmltcG9ydCB0aHJlYWQgZnJvbSAnLi90aHJlYWQnO1xuXG5cbmNvbnN0IHNldFNlbGVjdG9yID0gKHZOb2RlKSA9PiBwaXBlKFxuICBjbGFzc2VkKHByb3AoJ2NsYXNzTGlzdCcsIHZOb2RlKS5qb2luKCcgJyksIHRydWUpLFxuICBhdHRyMignaWQnLCBwcm9wKCdpZCcsIHZOb2RlKSlcbik7XG5cbmNvbnN0IGFwcGVuZFZOb2RlID0gKHZOb2RlKSA9PiBhcHBlbmQocHJvcCgndGFnTmFtZScsIHZOb2RlKSk7XG5cbmNvbnN0IGluc2VydE5vZGUgPSAodk5vZGUsIGluc2VydFNlbGVjdG9yKSA9PiBpbnNlcnQocHJvcCgndGFnTmFtZScsIHZOb2RlKSwgaW5zZXJ0U2VsZWN0b3IpO1xuXG5jb25zdCBzZXRDb25zdGFudFByb3BzID0gKHZOb2RlKSA9PiBwaXBlKFxuICBhdHRyKGNvbnN0YW50QXR0cmlidXRlcyh2Tm9kZSkpLFxuICBzdHlsZShjb25zdGFudFN0eWxlKHZOb2RlKSksXG4gIHRleHQodGV4dENoaWxkcmVuKHZOb2RlKS5qb2luKCcnKSkpO1xuXG4vKipcbiAqIEpvaW5zIGRhdGEgd2l0aCB2Tm9kZSBkZWZpbml0aW9uLlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gam9pbkRhdGEgIC0gRGF0YSBmb3Igam9pbi4gQWNjZXB0cyBhbnkgdHlwZSB0aGF0IGNvdWxkIGJlIGhhbmRsZWQgYnkgZDNcbiAqIEBwYXJhbSB7T2JqZWN0fSB2Tm9kZSAtIE5vZGUgZGVmaW5pdGlvbiByZXByZXNlbnRpbmcgam9pblxuICogQHBhcmFtIHtPYmplY3R9IE9wdGlvbnNcbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0gZW50ZXJUcmFuc2Zvcm0gIC0gdHJhbnNmb3JtYXRpb24gb24gZW50ZXIgc2VsZWN0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IGV4aXRUcmFuc2Zvcm0gLSB0cmFuc2Zvcm1hdGlvbiBvbiBleGl0IHNlbGVjdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSB1cGRhdGVUcmFuc2Zvcm0gLSB0cmFuc2Zvcm1hdGlvbiBvbiB1cGRhdGUgc2VsZWN0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IGtleVNlbGVjdG9yIC0gZnVuY3Rpb24gcGFzc2VkIGFzIGRhdGEgc2VsZWN0b3JcbiAqICAgQHBhcmFtIHtTdHJpbmd9IGluc2VydFNlbGVjdG9yIC0gY3NzIHNlbGVjdG9yIGZvciBpbnNlcnRpbmcgZWxlbWVudCBvbiBlbnRlclxuICovXG5leHBvcnQgZGVmYXVsdCAoam9pbkRhdGEsIHZOb2RlLCB7XG4gICAgZW50ZXJUcmFuc2Zvcm0gPSBpZGVudGl0eSxcbiAgICBleGl0VHJhbnNmb3JtID0gaWRlbnRpdHksXG4gICAgdXBkYXRlVHJhbnNmb3JtID0gaWRlbnRpdHksXG4gICAga2V5U2VsZWN0b3IgPSBudWxsLFxuICAgIGluc2VydFNlbGVjdG9yID0gbnVsbFxuICAgIH0gPSB7fSkgPT5cbiAgICBmdW5jdGlvbihwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRocmVhZChcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBzZWxlY3RBbGwocHJvcCgnc2VsZWN0b3InLCB2Tm9kZSkpLFxuICAgICAgICBpcyhGdW5jdGlvbiwga2V5U2VsZWN0b3IpID8gZGF0YTIoam9pbkRhdGEsIGtleVNlbGVjdG9yKSA6IGRhdGEoam9pbkRhdGEpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBlbnRlclNlbGVjdGlvbiA9IHRocmVhZChcbiAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICBlbnRlcixcbiAgICAgICAgaXMoU3RyaW5nLCBpbnNlcnRTZWxlY3RvcikgPyBpbnNlcnROb2RlKHZOb2RlLCBpbnNlcnRTZWxlY3RvcikgOiBhcHBlbmRWTm9kZSh2Tm9kZSksXG4gICAgICAgIHNldENvbnN0YW50UHJvcHModk5vZGUpLFxuICAgICAgICBzZXRTZWxlY3Rvcih2Tm9kZSlcbiAgICAgICk7XG5cbiAgICAgIGVudGVyVHJhbnNmb3JtKGVudGVyU2VsZWN0aW9uKTtcblxuICAgICAgdGhyZWFkKFxuICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgIGF0dHIoYm91bmRBdHRyaWJ1dGVzKHZOb2RlKSksXG4gICAgICAgIHN0eWxlKGJvdW5kU3R5bGUodk5vZGUpKSxcbiAgICAgICAgdXBkYXRlVHJhbnNmb3JtXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGJvdW5kVGV4dENvbnRlbnQodk5vZGUpO1xuICAgICAgaWYoIWlzTmlsKHRleHRDb250ZW50KSkge1xuICAgICAgICB0ZXh0KHRleHRDb250ZW50LCBzZWxlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBjb25zdGFudENoaWxkcmVuKHZOb2RlKVxuICAgICAgICAuZm9yRWFjaCgoY2hpbGQpID0+XG4gICAgICAgICAgdGhyZWFkKFxuICAgICAgICAgICAgZW50ZXJTZWxlY3Rpb24sXG4gICAgICAgICAgICBhcHBlbmRWTm9kZShjaGlsZCksXG4gICAgICAgICAgICBzZXRDb25zdGFudFByb3BzKGNoaWxkKSxcbiAgICAgICAgICAgIHNldFNlbGVjdG9yKGNoaWxkKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgYm91bmRDaGlsZHJlbih2Tm9kZSlcbiAgICAgICAgLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZChzZWxlY3Rpb24pKTtcblxuICAgICAgdGhyZWFkKFxuICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgIGV4aXQsXG4gICAgICAgIGV4aXRUcmFuc2Zvcm0sXG4gICAgICAgIHJlbW92ZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9O1xuXG4iXX0=