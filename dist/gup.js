'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gup = exports.join2 = exports.join = undefined;

var _vnode = require('./vnode');

var _ramda = require('ramda');

var _d3Fun = require('./d3-fun');

var _thread = require('./thread');

var _thread2 = _interopRequireDefault(_thread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSelector = (0, _ramda.curry)(function (vNode, selection) {
  return (0, _thread2.default)(selection, (0, _d3Fun.classed)(vNode.getClassList().join(' '), true), (0, _d3Fun.attr2)('id', vNode.getId()));
});

var appendVNode = function appendVNode(vNode) {
  return function (selection) {
    return (0, _thread2.default)(selection, (0, _d3Fun.append)(vNode.getTagName()), (0, _d3Fun.attr)(vNode.getConstantAttributes()), (0, _d3Fun.style)(vNode.getConstantStyles()), (0, _d3Fun.text)(vNode.getTextChildren().join('')));
  };
};

var _join = function _join(dataFn, vNode) {
  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var _ref$enterTransform = _ref.enterTransform;
  var enterTransform = _ref$enterTransform === undefined ? _ramda.identity : _ref$enterTransform;
  var _ref$exitTransform = _ref.exitTransform;
  var exitTransform = _ref$exitTransform === undefined ? _ramda.identity : _ref$exitTransform;
  return function (parent) {
    var selection = (0, _thread2.default)(parent, (0, _d3Fun.selectAll)(vNode.getSelector()), dataFn);

    var enterSelection = (0, _thread2.default)(selection, _d3Fun.enter, appendVNode(vNode), setSelector(vNode));

    enterTransform(enterSelection);

    (0, _thread2.default)(selection, (0, _d3Fun.attr)(vNode.getBoundAttributes()), (0, _d3Fun.style)(vNode.getBoundStyles()), (0, _d3Fun.text)(vNode.getBoundTextContent()));

    vNode.getConstantChildren().forEach(function (child) {
      return (0, _thread2.default)(enterSelection, appendVNode(child), setSelector(child));
    });

    vNode.getBoundChildren().forEach(function (child) {
      return child(selection);
    });

    (0, _thread2.default)(selection, _d3Fun.exit, exitTransform, _d3Fun.remove);

    return selection;
  };
};

/**
 * Joins data with vNode definition.
 * @param nodeData Data for join. Accepts any type that could be handled by d3
 * @param vNode Node definition representing join
 * @param xf Optional definition of enter/exit selections transformations
 */
var join = exports.join = function join(nodeData, vNode, xf) {
  return _join((0, _d3Fun.data)(nodeData), vNode, xf);
};

/**
 * Joins data with vNode definition using data keySelector
 * @param nodeData Data for join. Accepts any type that could be handled by d3
 * @param keySelector Function used by d3 to join data elements with nodes
 * @param vNode Node definition representing join
 * @param xf Optional definition of enter/exit selections transformations
 */
var join2 = exports.join2 = function join2(nodeData, keySelector, vNode, xf) {
  return _join((0, _d3Fun.data2)(nodeData, keySelector), vNode, xf);
};

/**
 * Runs in sequence functions on d3 selection
 * D3Selection -> (D3Selection -> a) -> (D3Selection -> b) ...
 * @param parent D3Selection representing parent node
 * @param fns Functions of D3Selection to run
 */
var gup = exports.gup = function gup(parent) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return fns.forEach(function (fn) {
    return fn(parent);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQWNBOzs7Ozs7QUFFQSxJQUFNLGNBQWMsa0JBQ2xCLFVBQUMsS0FBRCxFQUFRLFNBQVI7U0FBc0Isc0JBQ3BCLFNBRG9CLEVBRXBCLG9CQUFRLE1BQU0sWUFBTixHQUFxQixJQUFyQixDQUEwQixHQUExQixDQUFSLEVBQXdDLElBQXhDLENBRm9CLEVBR3BCLGtCQUFNLElBQU4sRUFBWSxNQUFNLEtBQU4sRUFBWixDQUhvQjtDQUF0QixDQURJOztBQVFOLElBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxLQUFEO1NBQ2xCLFVBQUMsU0FBRDtXQUNFLHNCQUNFLFNBREYsRUFFRSxtQkFBTyxNQUFNLFVBQU4sRUFBUCxDQUZGLEVBR0UsaUJBQUssTUFBTSxxQkFBTixFQUFMLENBSEYsRUFJRSxrQkFBTSxNQUFNLGlCQUFOLEVBQU4sQ0FKRixFQUtFLGlCQUFLLE1BQU0sZUFBTixHQUF3QixJQUF4QixDQUE2QixFQUE3QixDQUFMLENBTEY7R0FERjtDQURrQjs7QUFVcEIsSUFBTSxRQUNKLFNBREksS0FDSixDQUFDLE1BQUQsRUFBUyxLQUFUO21FQUF3RTs7aUNBQXZEOztnQ0FBMkI7O1NBQzFDLFVBQVMsTUFBVCxFQUFpQjtBQUNmLFFBQU0sWUFBWSxzQkFDaEIsTUFEZ0IsRUFFaEIsc0JBQVUsTUFBTSxXQUFOLEVBQVYsQ0FGZ0IsRUFHaEIsTUFIZ0IsQ0FBWixDQURTOztBQU9mLFFBQU0saUJBQWlCLHNCQUNyQixTQURxQixnQkFHckIsWUFBWSxLQUFaLENBSHFCLEVBSXJCLFlBQVksS0FBWixDQUpxQixDQUFqQixDQVBTOztBQWNmLG1CQUFlLGNBQWYsRUFkZTs7QUFnQmYsMEJBQ0UsU0FERixFQUVFLGlCQUFLLE1BQU0sa0JBQU4sRUFBTCxDQUZGLEVBR0Usa0JBQU0sTUFBTSxjQUFOLEVBQU4sQ0FIRixFQUlFLGlCQUFLLE1BQU0sbUJBQU4sRUFBTCxDQUpGLEVBaEJlOztBQXVCZixVQUFNLG1CQUFOLEdBQ0csT0FESCxDQUNXLFVBQUMsS0FBRDthQUNQLHNCQUNFLGNBREYsRUFFRSxZQUFZLEtBQVosQ0FGRixFQUdFLFlBQVksS0FBWixDQUhGO0tBRE8sQ0FEWCxDQXZCZTs7QUFnQ2YsVUFBTSxnQkFBTixHQUNHLE9BREgsQ0FDVyxVQUFDLEtBQUQ7YUFBVyxNQUFNLFNBQU47S0FBWCxDQURYLENBaENlOztBQW1DZiwwQkFDRSxTQURGLGVBR0UsYUFIRixpQkFuQ2U7O0FBMENmLFdBQU8sU0FBUCxDQTFDZTtHQUFqQjtDQURGOzs7Ozs7OztBQW9ESyxJQUFNLHNCQUFPLFNBQVAsSUFBTyxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEVBQWxCO1NBQ2xCLE1BQU0saUJBQUssUUFBTCxDQUFOLEVBQXNCLEtBQXRCLEVBQTZCLEVBQTdCO0NBRGtCOzs7Ozs7Ozs7QUFVYixJQUFNLHdCQUFRLFNBQVIsS0FBUSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLEtBQXhCLEVBQStCLEVBQS9CO1NBQ25CLE1BQU0sa0JBQU0sUUFBTixFQUFnQixXQUFoQixDQUFOLEVBQW9DLEtBQXBDLEVBQTJDLEVBQTNDO0NBRG1COzs7Ozs7OztBQVNkLElBQU0sb0JBQU0sU0FBTixHQUFNLENBQUMsTUFBRDtvQ0FBWTs7OztTQUM3QixJQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQ7V0FBUSxHQUFHLE1BQUg7R0FBUjtDQURLIiwiZmlsZSI6Imd1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aH0gZnJvbSAnLi92bm9kZSc7XG5pbXBvcnQge2N1cnJ5LCBpZGVudGl0eSwgaXN9IGZyb20gJ3JhbWRhJztcbmltcG9ydCB7XG4gIHNlbGVjdEFsbCxcbiAgZGF0YSxcbiAgZGF0YTIsXG4gIGVudGVyLFxuICBleGl0LFxuICBhcHBlbmQsXG4gIGNsYXNzZWQsXG4gIGF0dHIsXG4gIGF0dHIyLFxuICBzdHlsZSxcbiAgdGV4dCxcbiAgcmVtb3ZlXG59IGZyb20gJy4vZDMtZnVuJztcbmltcG9ydCB0aHJlYWQgZnJvbSAnLi90aHJlYWQnO1xuXG5jb25zdCBzZXRTZWxlY3RvciA9IGN1cnJ5KFxuICAodk5vZGUsIHNlbGVjdGlvbikgPT4gdGhyZWFkKFxuICAgIHNlbGVjdGlvbixcbiAgICBjbGFzc2VkKHZOb2RlLmdldENsYXNzTGlzdCgpLmpvaW4oJyAnKSwgdHJ1ZSksXG4gICAgYXR0cjIoJ2lkJywgdk5vZGUuZ2V0SWQoKSlcbiAgKVxuKTtcblxuY29uc3QgYXBwZW5kVk5vZGUgPSAodk5vZGUpID0+XG4gIChzZWxlY3Rpb24pID0+XG4gICAgdGhyZWFkKFxuICAgICAgc2VsZWN0aW9uLFxuICAgICAgYXBwZW5kKHZOb2RlLmdldFRhZ05hbWUoKSksXG4gICAgICBhdHRyKHZOb2RlLmdldENvbnN0YW50QXR0cmlidXRlcygpKSxcbiAgICAgIHN0eWxlKHZOb2RlLmdldENvbnN0YW50U3R5bGVzKCkpLFxuICAgICAgdGV4dCh2Tm9kZS5nZXRUZXh0Q2hpbGRyZW4oKS5qb2luKCcnKSlcbiAgICApO1xuXG5jb25zdCBfam9pbiA9XG4gIChkYXRhRm4sIHZOb2RlLCB7ZW50ZXJUcmFuc2Zvcm0gPSBpZGVudGl0eSwgZXhpdFRyYW5zZm9ybSA9IGlkZW50aXR5fSA9IHt9KSA9PlxuICAgIGZ1bmN0aW9uKHBhcmVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhyZWFkKFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIHNlbGVjdEFsbCh2Tm9kZS5nZXRTZWxlY3RvcigpKSxcbiAgICAgICAgZGF0YUZuXG4gICAgICApO1xuXG4gICAgICBjb25zdCBlbnRlclNlbGVjdGlvbiA9IHRocmVhZChcbiAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICBlbnRlcixcbiAgICAgICAgYXBwZW5kVk5vZGUodk5vZGUpLFxuICAgICAgICBzZXRTZWxlY3Rvcih2Tm9kZSlcbiAgICAgICk7XG5cbiAgICAgIGVudGVyVHJhbnNmb3JtKGVudGVyU2VsZWN0aW9uKTtcblxuICAgICAgdGhyZWFkKFxuICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgIGF0dHIodk5vZGUuZ2V0Qm91bmRBdHRyaWJ1dGVzKCkpLFxuICAgICAgICBzdHlsZSh2Tm9kZS5nZXRCb3VuZFN0eWxlcygpKSxcbiAgICAgICAgdGV4dCh2Tm9kZS5nZXRCb3VuZFRleHRDb250ZW50KCkpXG4gICAgICApO1xuXG4gICAgICB2Tm9kZS5nZXRDb25zdGFudENoaWxkcmVuKClcbiAgICAgICAgLmZvckVhY2goKGNoaWxkKSA9PlxuICAgICAgICAgIHRocmVhZChcbiAgICAgICAgICAgIGVudGVyU2VsZWN0aW9uLFxuICAgICAgICAgICAgYXBwZW5kVk5vZGUoY2hpbGQpLFxuICAgICAgICAgICAgc2V0U2VsZWN0b3IoY2hpbGQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICB2Tm9kZS5nZXRCb3VuZENoaWxkcmVuKClcbiAgICAgICAgLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZChzZWxlY3Rpb24pKTtcblxuICAgICAgdGhyZWFkKFxuICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgIGV4aXQsXG4gICAgICAgIGV4aXRUcmFuc2Zvcm0sXG4gICAgICAgIHJlbW92ZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9O1xuXG4vKipcbiAqIEpvaW5zIGRhdGEgd2l0aCB2Tm9kZSBkZWZpbml0aW9uLlxuICogQHBhcmFtIG5vZGVEYXRhIERhdGEgZm9yIGpvaW4uIEFjY2VwdHMgYW55IHR5cGUgdGhhdCBjb3VsZCBiZSBoYW5kbGVkIGJ5IGQzXG4gKiBAcGFyYW0gdk5vZGUgTm9kZSBkZWZpbml0aW9uIHJlcHJlc2VudGluZyBqb2luXG4gKiBAcGFyYW0geGYgT3B0aW9uYWwgZGVmaW5pdGlvbiBvZiBlbnRlci9leGl0IHNlbGVjdGlvbnMgdHJhbnNmb3JtYXRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBqb2luID0gKG5vZGVEYXRhLCB2Tm9kZSwgeGYpID0+XG4gIF9qb2luKGRhdGEobm9kZURhdGEpLCB2Tm9kZSwgeGYpO1xuXG4vKipcbiAqIEpvaW5zIGRhdGEgd2l0aCB2Tm9kZSBkZWZpbml0aW9uIHVzaW5nIGRhdGEga2V5U2VsZWN0b3JcbiAqIEBwYXJhbSBub2RlRGF0YSBEYXRhIGZvciBqb2luLiBBY2NlcHRzIGFueSB0eXBlIHRoYXQgY291bGQgYmUgaGFuZGxlZCBieSBkM1xuICogQHBhcmFtIGtleVNlbGVjdG9yIEZ1bmN0aW9uIHVzZWQgYnkgZDMgdG8gam9pbiBkYXRhIGVsZW1lbnRzIHdpdGggbm9kZXNcbiAqIEBwYXJhbSB2Tm9kZSBOb2RlIGRlZmluaXRpb24gcmVwcmVzZW50aW5nIGpvaW5cbiAqIEBwYXJhbSB4ZiBPcHRpb25hbCBkZWZpbml0aW9uIG9mIGVudGVyL2V4aXQgc2VsZWN0aW9ucyB0cmFuc2Zvcm1hdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4yID0gKG5vZGVEYXRhLCBrZXlTZWxlY3Rvciwgdk5vZGUsIHhmKSA9PlxuICBfam9pbihkYXRhMihub2RlRGF0YSwga2V5U2VsZWN0b3IpLCB2Tm9kZSwgeGYpO1xuXG4vKipcbiAqIFJ1bnMgaW4gc2VxdWVuY2UgZnVuY3Rpb25zIG9uIGQzIHNlbGVjdGlvblxuICogRDNTZWxlY3Rpb24gLT4gKEQzU2VsZWN0aW9uIC0+IGEpIC0+IChEM1NlbGVjdGlvbiAtPiBiKSAuLi5cbiAqIEBwYXJhbSBwYXJlbnQgRDNTZWxlY3Rpb24gcmVwcmVzZW50aW5nIHBhcmVudCBub2RlXG4gKiBAcGFyYW0gZm5zIEZ1bmN0aW9ucyBvZiBEM1NlbGVjdGlvbiB0byBydW5cbiAqL1xuZXhwb3J0IGNvbnN0IGd1cCA9IChwYXJlbnQsIC4uLmZucykgPT5cbiAgZm5zLmZvckVhY2goKGZuKSA9PiBmbihwYXJlbnQpKTtcblxuIl19