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

var dataFn = function dataFn(joinData, keySelector) {
  return (0, _ramda.is)(Function, keySelector) ? (0, _d3Fun.data2)(joinData, keySelector) : (0, _d3Fun.data)(joinData);
};

var setConstantProps = function setConstantProps(vNode) {
  return (0, _ramda.pipe)((0, _d3Fun.classed)((0, _ramda.join)(' ', (0, _ramda.prop)('classList', vNode)), true), (0, _d3Fun.attr2)('id', (0, _ramda.prop)('id', vNode)), (0, _d3Fun.attr)((0, _vnode.constantAttributes)(vNode)), (0, _d3Fun.style)((0, _vnode.constantStyle)(vNode)), (0, _d3Fun.text)((0, _ramda.join)('', (0, _vnode.textChildren)(vNode))));
};

var tagName = (0, _ramda.prop)('tagName');
var addNode = function addNode(vNode, insertSelector) {
  return (0, _ramda.is)(String, insertSelector) ? insert(tagName(vNode), insertSelector) : (0, _d3Fun.append)(tagName(vNode));
};

var introduceNode = (0, _ramda.uncurryN)(3, function (vNode, keySelector) {
  return (0, _ramda.pipe)(addNode(vNode, keySelector), setConstantProps(vNode));
});

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
    var selection = (0, _thread2.default)(parent, (0, _d3Fun.selectAll)((0, _ramda.prop)('selector', vNode)), dataFn(joinData, keySelector));

    var enterSelection = (0, _thread2.default)(selection, _d3Fun.enter, introduceNode(vNode, keySelector), enterTransform);

    (0, _thread2.default)(selection, (0, _d3Fun.attr)((0, _vnode.boundAttributes)(vNode)), (0, _d3Fun.style)((0, _vnode.boundStyle)(vNode)), (0, _ramda.unless)((0, _ramda.always)((0, _ramda.isNil)((0, _vnode.boundTextContent)(vNode))), (0, _d3Fun.text)((0, _vnode.boundTextContent)(vNode))), updateTransform);

    (0, _thread2.default)(vNode, _vnode.constantChildren, (0, _ramda.forEach)((0, _ramda.partialRight)(introduceNode, [null, enterSelection])));

    (0, _thread2.default)(vNode, _vnode.boundChildren, (0, _ramda.forEach)(function (child) {
      return child(selection);
    }));

    (0, _thread2.default)(selection, _d3Fun.exit, exitTransform, _d3Fun.remove);

    return selection;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qb2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQWVBOztBQWNBOztBQVdBOzs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsUUFBRCxFQUFXLFdBQVg7U0FDYixlQUFHLFFBQUgsRUFBYSxXQUFiLElBQTRCLGtCQUFNLFFBQU4sRUFBZ0IsV0FBaEIsQ0FBNUIsR0FBMkQsaUJBQUssUUFBTCxDQUEzRDtDQURhOztBQUdmLElBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLEtBQUQ7U0FBVyxpQkFDbEMsb0JBQVEsaUJBQUssR0FBTCxFQUFVLGlCQUFLLFdBQUwsRUFBa0IsS0FBbEIsQ0FBVixDQUFSLEVBQTZDLElBQTdDLENBRGtDLEVBRWxDLGtCQUFNLElBQU4sRUFBWSxpQkFBSyxJQUFMLEVBQVcsS0FBWCxDQUFaLENBRmtDLEVBR2xDLGlCQUFLLCtCQUFtQixLQUFuQixDQUFMLENBSGtDLEVBSWxDLGtCQUFNLDBCQUFjLEtBQWQsQ0FBTixDQUprQyxFQUtsQyxpQkFBSyxpQkFBSyxFQUFMLEVBQVMseUJBQWEsS0FBYixDQUFULENBQUwsQ0FMa0M7Q0FBWDs7QUFPekIsSUFBTSxVQUFVLGlCQUFLLFNBQUwsQ0FBVjtBQUNOLElBQU0sVUFBVSxTQUFWLE9BQVUsQ0FBQyxLQUFELEVBQVEsY0FBUjtTQUNkLGVBQUcsTUFBSCxFQUFXLGNBQVgsSUFBNkIsT0FBTyxRQUFRLEtBQVIsQ0FBUCxFQUF1QixjQUF2QixDQUE3QixHQUFzRSxtQkFBTyxRQUFRLEtBQVIsQ0FBUCxDQUF0RTtDQURjOztBQUdoQixJQUFNLGdCQUFnQixxQkFBUyxDQUFULEVBQVksVUFBQyxLQUFELEVBQVEsV0FBUjtTQUF3QixpQkFDeEQsUUFBUSxLQUFSLEVBQWUsV0FBZixDQUR3RCxFQUV4RCxpQkFBaUIsS0FBakIsQ0FGd0Q7Q0FBeEIsQ0FBNUI7Ozs7Ozs7Ozs7Ozs7O2tCQWVTLFVBQUMsUUFBRCxFQUFXLEtBQVg7bUVBTVQ7O2lDQUxKOztnQ0FDQTs7a0NBQ0E7OzhCQUNBO3FEQUFjO2lDQUNkOzJEQUFpQjtTQUVqQixVQUFTLE1BQVQsRUFBaUI7QUFDZixRQUFNLFlBQVksc0JBQ2hCLE1BRGdCLEVBRWhCLHNCQUFVLGlCQUFLLFVBQUwsRUFBaUIsS0FBakIsQ0FBVixDQUZnQixFQUdoQixPQUFPLFFBQVAsRUFBaUIsV0FBakIsQ0FIZ0IsQ0FBWixDQURTOztBQU1mLFFBQU0saUJBQWlCLHNCQUNyQixTQURxQixnQkFHckIsY0FBYyxLQUFkLEVBQXFCLFdBQXJCLENBSHFCLEVBSXJCLGNBSnFCLENBQWpCLENBTlM7O0FBWWYsMEJBQ0UsU0FERixFQUVFLGlCQUFLLDRCQUFnQixLQUFoQixDQUFMLENBRkYsRUFHRSxrQkFBTSx1QkFBVyxLQUFYLENBQU4sQ0FIRixFQUlFLG1CQUFPLG1CQUFPLGtCQUFNLDZCQUFpQixLQUFqQixDQUFOLENBQVAsQ0FBUCxFQUErQyxpQkFBSyw2QkFBaUIsS0FBakIsQ0FBTCxDQUEvQyxDQUpGLEVBS0UsZUFMRixFQVplOztBQW1CZiwwQkFDRSxLQURGLDJCQUdFLG9CQUFRLHlCQUFhLGFBQWIsRUFBNEIsQ0FBQyxJQUFELEVBQU8sY0FBUCxDQUE1QixDQUFSLENBSEYsRUFuQmU7O0FBd0JmLDBCQUNFLEtBREYsd0JBR0Usb0JBQVE7YUFBUyxNQUFNLFNBQU47S0FBVCxDQUhWLEVBeEJlOztBQTZCZiwwQkFDRSxTQURGLGVBR0UsYUFIRixpQkE3QmU7O0FBbUNmLFdBQU8sU0FBUCxDQW5DZTtHQUFqQjtDQVBhIiwiZmlsZSI6ImpvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhcHBlbmQsXG4gIGF0dHIsXG4gIGF0dHIyLFxuICBjbGFzc2VkLFxuICBkYXRhLFxuICBkYXRhMixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIHJlbW92ZSxcbiAgc3R5bGUsXG4gIHNlbGVjdEFsbCxcbiAgdGV4dFxufSBmcm9tICcuL2QzLWZ1bic7XG5cbmltcG9ydCB7XG4gIGFsd2F5cyxcbiAgZm9yRWFjaCxcbiAgaWRlbnRpdHksXG4gIGlzTmlsLFxuICBpcyxcbiAgam9pbixcbiAgcGFydGlhbFJpZ2h0LFxuICBwaXBlLFxuICBwcm9wLFxuICB1bmN1cnJ5TixcbiAgdW5sZXNzXG59IGZyb20gJ3JhbWRhJztcblxuaW1wb3J0IHtcbiAgYm91bmRBdHRyaWJ1dGVzLFxuICBib3VuZENoaWxkcmVuLFxuICBib3VuZFN0eWxlLFxuICBib3VuZFRleHRDb250ZW50LFxuICBjb25zdGFudEF0dHJpYnV0ZXMsXG4gIGNvbnN0YW50Q2hpbGRyZW4sXG4gIGNvbnN0YW50U3R5bGUsXG4gIHRleHRDaGlsZHJlblxufSBmcm9tICcuL3Zub2RlJztcblxuaW1wb3J0IHRocmVhZCBmcm9tICcuL3RocmVhZCc7XG5cbmNvbnN0IGRhdGFGbiA9IChqb2luRGF0YSwga2V5U2VsZWN0b3IpID0+XG4gIGlzKEZ1bmN0aW9uLCBrZXlTZWxlY3RvcikgPyBkYXRhMihqb2luRGF0YSwga2V5U2VsZWN0b3IpIDogZGF0YShqb2luRGF0YSk7XG5cbmNvbnN0IHNldENvbnN0YW50UHJvcHMgPSAodk5vZGUpID0+IHBpcGUoXG4gIGNsYXNzZWQoam9pbignICcsIHByb3AoJ2NsYXNzTGlzdCcsIHZOb2RlKSksIHRydWUpLFxuICBhdHRyMignaWQnLCBwcm9wKCdpZCcsIHZOb2RlKSksXG4gIGF0dHIoY29uc3RhbnRBdHRyaWJ1dGVzKHZOb2RlKSksXG4gIHN0eWxlKGNvbnN0YW50U3R5bGUodk5vZGUpKSxcbiAgdGV4dChqb2luKCcnLCB0ZXh0Q2hpbGRyZW4odk5vZGUpKSkpO1xuXG5jb25zdCB0YWdOYW1lID0gcHJvcCgndGFnTmFtZScpO1xuY29uc3QgYWRkTm9kZSA9ICh2Tm9kZSwgaW5zZXJ0U2VsZWN0b3IpID0+XG4gIGlzKFN0cmluZywgaW5zZXJ0U2VsZWN0b3IpID8gaW5zZXJ0KHRhZ05hbWUodk5vZGUpLCBpbnNlcnRTZWxlY3RvcikgOiBhcHBlbmQodGFnTmFtZSh2Tm9kZSkpO1xuXG5jb25zdCBpbnRyb2R1Y2VOb2RlID0gdW5jdXJyeU4oMywgKHZOb2RlLCBrZXlTZWxlY3RvcikgPT4gcGlwZShcbiAgYWRkTm9kZSh2Tm9kZSwga2V5U2VsZWN0b3IpLFxuICBzZXRDb25zdGFudFByb3BzKHZOb2RlKSkpO1xuXG4vKipcbiAqIEpvaW5zIGRhdGEgd2l0aCB2Tm9kZSBkZWZpbml0aW9uLlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gam9pbkRhdGEgIC0gRGF0YSBmb3Igam9pbi4gQWNjZXB0cyBhbnkgdHlwZSB0aGF0IGNvdWxkIGJlIGhhbmRsZWQgYnkgZDNcbiAqIEBwYXJhbSB7T2JqZWN0fSB2Tm9kZSAtIE5vZGUgZGVmaW5pdGlvbiByZXByZXNlbnRpbmcgam9pblxuICogQHBhcmFtIHtPYmplY3R9IE9wdGlvbnNcbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0gZW50ZXJUcmFuc2Zvcm0gIC0gdHJhbnNmb3JtYXRpb24gb24gZW50ZXIgc2VsZWN0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IGV4aXRUcmFuc2Zvcm0gLSB0cmFuc2Zvcm1hdGlvbiBvbiBleGl0IHNlbGVjdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSB1cGRhdGVUcmFuc2Zvcm0gLSB0cmFuc2Zvcm1hdGlvbiBvbiB1cGRhdGUgc2VsZWN0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IGtleVNlbGVjdG9yIC0gZnVuY3Rpb24gcGFzc2VkIGFzIGRhdGEgc2VsZWN0b3JcbiAqICAgQHBhcmFtIHtTdHJpbmd9IGluc2VydFNlbGVjdG9yIC0gY3NzIHNlbGVjdG9yIGZvciBpbnNlcnRpbmcgZWxlbWVudCBvbiBlbnRlclxuICovXG5leHBvcnQgZGVmYXVsdCAoam9pbkRhdGEsIHZOb2RlLCB7XG4gIGVudGVyVHJhbnNmb3JtID0gaWRlbnRpdHksXG4gIGV4aXRUcmFuc2Zvcm0gPSBpZGVudGl0eSxcbiAgdXBkYXRlVHJhbnNmb3JtID0gaWRlbnRpdHksXG4gIGtleVNlbGVjdG9yID0gbnVsbCxcbiAgaW5zZXJ0U2VsZWN0b3IgPSBudWxsXG4gIH0gPSB7fSkgPT5cbiAgZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhyZWFkKFxuICAgICAgcGFyZW50LFxuICAgICAgc2VsZWN0QWxsKHByb3AoJ3NlbGVjdG9yJywgdk5vZGUpKSxcbiAgICAgIGRhdGFGbihqb2luRGF0YSwga2V5U2VsZWN0b3IpKTtcblxuICAgIGNvbnN0IGVudGVyU2VsZWN0aW9uID0gdGhyZWFkKFxuICAgICAgc2VsZWN0aW9uLFxuICAgICAgZW50ZXIsXG4gICAgICBpbnRyb2R1Y2VOb2RlKHZOb2RlLCBrZXlTZWxlY3RvciksXG4gICAgICBlbnRlclRyYW5zZm9ybSk7XG5cbiAgICB0aHJlYWQoXG4gICAgICBzZWxlY3Rpb24sXG4gICAgICBhdHRyKGJvdW5kQXR0cmlidXRlcyh2Tm9kZSkpLFxuICAgICAgc3R5bGUoYm91bmRTdHlsZSh2Tm9kZSkpLFxuICAgICAgdW5sZXNzKGFsd2F5cyhpc05pbChib3VuZFRleHRDb250ZW50KHZOb2RlKSkpLCB0ZXh0KGJvdW5kVGV4dENvbnRlbnQodk5vZGUpKSksXG4gICAgICB1cGRhdGVUcmFuc2Zvcm0pO1xuXG4gICAgdGhyZWFkKFxuICAgICAgdk5vZGUsXG4gICAgICBjb25zdGFudENoaWxkcmVuLFxuICAgICAgZm9yRWFjaChwYXJ0aWFsUmlnaHQoaW50cm9kdWNlTm9kZSwgW251bGwsIGVudGVyU2VsZWN0aW9uXSkpKTtcblxuICAgIHRocmVhZChcbiAgICAgIHZOb2RlLFxuICAgICAgYm91bmRDaGlsZHJlbixcbiAgICAgIGZvckVhY2goY2hpbGQgPT4gY2hpbGQoc2VsZWN0aW9uKSkpO1xuXG4gICAgdGhyZWFkKFxuICAgICAgc2VsZWN0aW9uLFxuICAgICAgZXhpdCxcbiAgICAgIGV4aXRUcmFuc2Zvcm0sXG4gICAgICByZW1vdmUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfTtcblxuIl19