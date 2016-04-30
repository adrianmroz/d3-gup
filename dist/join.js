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
  return (0, _ramda.pipe)(classed((0, _ramda.prop)('classList', vNode).join(' '), true), (0, _d3Fun.attr2)('id', (0, _ramda.prop)('id', vNode)));
};

var appendVNode = function appendVNode(vNode) {
  return (0, _d3Fun.append)((0, _ramda.prop)('tagName', vNode));
};

var insertNode = function insertNode(vNode, insertSelector) {
  return insert((0, _ramda.prop)('tagName', vNode), insertSelector);
};

var setConstantProps = function setConstantProps(vNode) {
  return (0, _ramda.pipe)((0, _d3Fun.attr)((0, _vnode.constantAttributes)(vNode)), (0, _d3Fun.style)((0, _vnode.constantStyle)(vNode)), (0, _d3Fun.text)((0, _vnode.textChildren)(vNode)));
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
      return (0, _thread2.default)(enterSelection, appendVNode(child), setConstantProps(vNode), setSelector(child));
    });

    (0, _vnode.boundChildren)(vNode).forEach(function (child) {
      return child(selection);
    });

    (0, _thread2.default)(selection, _d3Fun.exit, exitTransform, _d3Fun.remove);

    return selection;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qb2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQWNBOztBQVFBOztBQVVBOzs7Ozs7QUFHQSxJQUFNLGNBQWMsU0FBZCxXQUFjLENBQUMsS0FBRDtTQUFXLGlCQUM3QixRQUFRLGlCQUFLLFdBQUwsRUFBa0IsS0FBbEIsRUFBeUIsSUFBekIsQ0FBOEIsR0FBOUIsQ0FBUixFQUE0QyxJQUE1QyxDQUQ2QixFQUU3QixrQkFBTSxJQUFOLEVBQVksaUJBQUssSUFBTCxFQUFXLEtBQVgsQ0FBWixDQUY2QjtDQUFYOztBQUtwQixJQUFNLGNBQWMsU0FBZCxXQUFjLENBQUMsS0FBRDtTQUFXLG1CQUFPLGlCQUFLLFNBQUwsRUFBZ0IsS0FBaEIsQ0FBUDtDQUFYOztBQUVwQixJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsS0FBRCxFQUFRLGNBQVI7U0FBMkIsT0FBTyxpQkFBSyxTQUFMLEVBQWdCLEtBQWhCLENBQVAsRUFBK0IsY0FBL0I7Q0FBM0I7O0FBRW5CLElBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLEtBQUQ7U0FBVyxpQkFDbEMsaUJBQUssK0JBQW1CLEtBQW5CLENBQUwsQ0FEa0MsRUFFbEMsa0JBQU0sMEJBQWMsS0FBZCxDQUFOLENBRmtDLEVBR2xDLGlCQUFLLHlCQUFhLEtBQWIsQ0FBTCxDQUhrQztDQUFYOzs7Ozs7Ozs7Ozs7OztrQkFnQlYsVUFBQyxRQUFELEVBQVcsS0FBWDttRUFNUDs7aUNBTEo7O2dDQUNBOztrQ0FDQTs7OEJBQ0E7cURBQWM7aUNBQ2Q7MkRBQWlCO1NBRWpCLFVBQVMsTUFBVCxFQUFpQjtBQUNmLFFBQU0sWUFBWSxzQkFDaEIsTUFEZ0IsRUFFaEIsc0JBQVUsaUJBQUssVUFBTCxFQUFpQixLQUFqQixDQUFWLENBRmdCLEVBR2hCLGVBQUcsUUFBSCxFQUFhLFdBQWIsSUFBNEIsa0JBQU0sUUFBTixFQUFnQixXQUFoQixDQUE1QixHQUEyRCxpQkFBSyxRQUFMLENBQTNELENBSEksQ0FEUzs7QUFPZixRQUFNLGlCQUFpQixzQkFDckIsU0FEcUIsZ0JBR3JCLGVBQUcsTUFBSCxFQUFXLGNBQVgsSUFBNkIsV0FBVyxLQUFYLEVBQWtCLGNBQWxCLENBQTdCLEdBQWlFLFlBQVksS0FBWixDQUFqRSxFQUNBLGlCQUFpQixLQUFqQixDQUpxQixFQUtyQixZQUFZLEtBQVosQ0FMcUIsQ0FBakIsQ0FQUzs7QUFlZixtQkFBZSxjQUFmLEVBZmU7O0FBaUJmLDBCQUNFLFNBREYsRUFFRSxpQkFBSyw0QkFBZ0IsS0FBaEIsQ0FBTCxDQUZGLEVBR0Usa0JBQU0sdUJBQVcsS0FBWCxDQUFOLENBSEYsRUFJRSxlQUpGLEVBakJlOztBQXdCZixRQUFNLGNBQWMsNkJBQWlCLEtBQWpCLENBQWQsQ0F4QlM7QUF5QmYsUUFBRyxDQUFDLGtCQUFNLFdBQU4sQ0FBRCxFQUFxQjtBQUN0Qix1QkFBSyxXQUFMLEVBQWtCLFNBQWxCLEVBRHNCO0tBQXhCOztBQUlBLGlDQUFpQixLQUFqQixFQUNHLE9BREgsQ0FDVyxVQUFDLEtBQUQ7YUFDUCxzQkFDRSxjQURGLEVBRUUsWUFBWSxLQUFaLENBRkYsRUFHRSxpQkFBaUIsS0FBakIsQ0FIRixFQUlFLFlBQVksS0FBWixDQUpGO0tBRE8sQ0FEWCxDQTdCZTs7QUF1Q2YsOEJBQWMsS0FBZCxFQUNHLE9BREgsQ0FDVyxVQUFDLEtBQUQ7YUFBVyxNQUFNLFNBQU47S0FBWCxDQURYLENBdkNlOztBQTBDZiwwQkFDRSxTQURGLGVBR0UsYUFIRixpQkExQ2U7O0FBaURmLFdBQU8sU0FBUCxDQWpEZTtHQUFqQjtDQVBXIiwiZmlsZSI6ImpvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhcHBlbmQsXG4gIGF0dHIsXG4gIGF0dHIyLFxuICBkYXRhLFxuICBkYXRhMixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIHJlbW92ZSxcbiAgc3R5bGUsXG4gIHNlbGVjdEFsbCxcbiAgdGV4dFxufSBmcm9tICcuL2QzLWZ1bic7XG5cbmltcG9ydCB7XG4gIGlkZW50aXR5LFxuICBpc05pbCxcbiAgaXMsXG4gIHBpcGUsXG4gIHByb3Bcbn0gZnJvbSAncmFtZGEnO1xuXG5pbXBvcnQge1xuICBib3VuZEF0dHJpYnV0ZXMsXG4gIGJvdW5kQ2hpbGRyZW4sXG4gIGJvdW5kU3R5bGUsXG4gIGJvdW5kVGV4dENvbnRlbnQsXG4gIGNvbnN0YW50QXR0cmlidXRlcyxcbiAgY29uc3RhbnRDaGlsZHJlbixcbiAgY29uc3RhbnRTdHlsZSxcbiAgdGV4dENoaWxkcmVuXG59IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHRocmVhZCBmcm9tICcuL3RocmVhZCc7XG5cblxuY29uc3Qgc2V0U2VsZWN0b3IgPSAodk5vZGUpID0+IHBpcGUoXG4gIGNsYXNzZWQocHJvcCgnY2xhc3NMaXN0Jywgdk5vZGUpLmpvaW4oJyAnKSwgdHJ1ZSksXG4gIGF0dHIyKCdpZCcsIHByb3AoJ2lkJywgdk5vZGUpKVxuKTtcblxuY29uc3QgYXBwZW5kVk5vZGUgPSAodk5vZGUpID0+IGFwcGVuZChwcm9wKCd0YWdOYW1lJywgdk5vZGUpKTtcblxuY29uc3QgaW5zZXJ0Tm9kZSA9ICh2Tm9kZSwgaW5zZXJ0U2VsZWN0b3IpID0+IGluc2VydChwcm9wKCd0YWdOYW1lJywgdk5vZGUpLCBpbnNlcnRTZWxlY3Rvcik7XG5cbmNvbnN0IHNldENvbnN0YW50UHJvcHMgPSAodk5vZGUpID0+IHBpcGUoXG4gIGF0dHIoY29uc3RhbnRBdHRyaWJ1dGVzKHZOb2RlKSksXG4gIHN0eWxlKGNvbnN0YW50U3R5bGUodk5vZGUpKSxcbiAgdGV4dCh0ZXh0Q2hpbGRyZW4odk5vZGUpKSk7XG5cbi8qKlxuICogSm9pbnMgZGF0YSB3aXRoIHZOb2RlIGRlZmluaXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBqb2luRGF0YSAgLSBEYXRhIGZvciBqb2luLiBBY2NlcHRzIGFueSB0eXBlIHRoYXQgY291bGQgYmUgaGFuZGxlZCBieSBkM1xuICogQHBhcmFtIHtPYmplY3R9IHZOb2RlIC0gTm9kZSBkZWZpbml0aW9uIHJlcHJlc2VudGluZyBqb2luXG4gKiBAcGFyYW0ge09iamVjdH0gT3B0aW9uc1xuICogICBAcGFyYW0ge0Z1bmN0aW9ufSBlbnRlclRyYW5zZm9ybSAgLSB0cmFuc2Zvcm1hdGlvbiBvbiBlbnRlciBzZWxlY3Rpb25cbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0gZXhpdFRyYW5zZm9ybSAtIHRyYW5zZm9ybWF0aW9uIG9uIGV4aXQgc2VsZWN0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZVRyYW5zZm9ybSAtIHRyYW5zZm9ybWF0aW9uIG9uIHVwZGF0ZSBzZWxlY3Rpb25cbiAqICAgQHBhcmFtIHtGdW5jdGlvbn0ga2V5U2VsZWN0b3IgLSBmdW5jdGlvbiBwYXNzZWQgYXMgZGF0YSBzZWxlY3RvclxuICogICBAcGFyYW0ge1N0cmluZ30gaW5zZXJ0U2VsZWN0b3IgLSBjc3Mgc2VsZWN0b3IgZm9yIGluc2VydGluZyBlbGVtZW50IG9uIGVudGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChqb2luRGF0YSwgdk5vZGUsIHtcbiAgICBlbnRlclRyYW5zZm9ybSA9IGlkZW50aXR5LFxuICAgIGV4aXRUcmFuc2Zvcm0gPSBpZGVudGl0eSxcbiAgICB1cGRhdGVUcmFuc2Zvcm0gPSBpZGVudGl0eSxcbiAgICBrZXlTZWxlY3RvciA9IG51bGwsXG4gICAgaW5zZXJ0U2VsZWN0b3IgPSBudWxsXG4gICAgfSA9IHt9KSA9PlxuICAgIGZ1bmN0aW9uKHBhcmVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhyZWFkKFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIHNlbGVjdEFsbChwcm9wKCdzZWxlY3RvcicsIHZOb2RlKSksXG4gICAgICAgIGlzKEZ1bmN0aW9uLCBrZXlTZWxlY3RvcikgPyBkYXRhMihqb2luRGF0YSwga2V5U2VsZWN0b3IpIDogZGF0YShqb2luRGF0YSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGVudGVyU2VsZWN0aW9uID0gdGhyZWFkKFxuICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgIGVudGVyLFxuICAgICAgICBpcyhTdHJpbmcsIGluc2VydFNlbGVjdG9yKSA/IGluc2VydE5vZGUodk5vZGUsIGluc2VydFNlbGVjdG9yKSA6IGFwcGVuZFZOb2RlKHZOb2RlKSxcbiAgICAgICAgc2V0Q29uc3RhbnRQcm9wcyh2Tm9kZSksXG4gICAgICAgIHNldFNlbGVjdG9yKHZOb2RlKVxuICAgICAgKTtcblxuICAgICAgZW50ZXJUcmFuc2Zvcm0oZW50ZXJTZWxlY3Rpb24pO1xuXG4gICAgICB0aHJlYWQoXG4gICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgYXR0cihib3VuZEF0dHJpYnV0ZXModk5vZGUpKSxcbiAgICAgICAgc3R5bGUoYm91bmRTdHlsZSh2Tm9kZSkpLFxuICAgICAgICB1cGRhdGVUcmFuc2Zvcm1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gYm91bmRUZXh0Q29udGVudCh2Tm9kZSk7XG4gICAgICBpZighaXNOaWwodGV4dENvbnRlbnQpKSB7XG4gICAgICAgIHRleHQodGV4dENvbnRlbnQsIHNlbGVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0YW50Q2hpbGRyZW4odk5vZGUpXG4gICAgICAgIC5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgICB0aHJlYWQoXG4gICAgICAgICAgICBlbnRlclNlbGVjdGlvbixcbiAgICAgICAgICAgIGFwcGVuZFZOb2RlKGNoaWxkKSxcbiAgICAgICAgICAgIHNldENvbnN0YW50UHJvcHModk5vZGUpLFxuICAgICAgICAgICAgc2V0U2VsZWN0b3IoY2hpbGQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICBib3VuZENoaWxkcmVuKHZOb2RlKVxuICAgICAgICAuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkKHNlbGVjdGlvbikpO1xuXG4gICAgICB0aHJlYWQoXG4gICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgZXhpdCxcbiAgICAgICAgZXhpdFRyYW5zZm9ybSxcbiAgICAgICAgcmVtb3ZlXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH07XG5cbiJdfQ==