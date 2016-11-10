'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textChildren = exports.constantChildren = exports.boundChildren = exports.constantStyle = exports.constantAttributes = exports.boundTextContent = exports.boundStyle = exports.boundAttributes = exports.h = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ramda = require('ramda');

var _thread = require('./thread');

var _thread2 = _interopRequireDefault(_thread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: it's dummy implementation
function parseSelector(selector) {
  var splitByHash = selector.split('#');
  var splitByDots = splitByHash[0].split('.');
  var tagName = splitByDots[0] === '' ? 'div' : splitByDots[0];
  var classList = splitByDots.slice(1);
  return { tagName: tagName, classList: classList, id: splitByHash[1] || null };
}

/**
 * hyperscript inspired virtual node constructor
 *
 * @param selector Selector string used for data binding and/or constructing node
 *  use css selectors syntax
 *  currently should have proper order, i.e. tagname, classlist, id
 *  examples: div; div.className.otherClass; div.class#id; div#id;
 * @param attributes Object representing node attributes
 *  due to d3 nature, attributes could be functions of
 *  data -> index -> attrValue form
 *  map keys should represent DOM attribute names
 *  also, 'textContent' attribute is supported for representing dynamic content of node
 * @param [children] Children of node.
 *  Strings will be concatenated and inserted as text node
 *  vNode definitions will be static children
 *  functions of parent selection will be evaluated dynamically
 * @returns {Object} vNode definition
 */
var h = exports.h = function h(selector) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var attributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return _extends({
    selector: selector
  }, parseSelector(selector), {
    attributes: attributes,
    children: children
  });
};

var isFn = (0, _ramda.is)(Function);
var isStr = (0, _ramda.is)(String);
var isScalar = (0, _ramda.complement)(isFn);
var nil = (0, _ramda.always)(null);

var functionPicker = (0, _ramda.pickBy)(isFn);
var functionOrNil = (0, _ramda.unless)(isFn, nil);

var scalarPicker = (0, _ramda.pickBy)(isScalar);

var attributes = (0, _ramda.prop)('attributes');
var textContentKey = 'textContent';
var styleKey = 'style';

var boundAttributes = exports.boundAttributes = (0, _ramda.pipe)(attributes, (0, _ramda.omit)([styleKey, textContentKey]), functionPicker);

var boundStyle = exports.boundStyle = (0, _ramda.pipe)(attributes, (0, _ramda.prop)(styleKey), functionPicker);

var boundTextContent = exports.boundTextContent = (0, _ramda.pipe)(attributes, (0, _ramda.prop)(textContentKey), functionOrNil);

var constantAttributes = exports.constantAttributes = (0, _ramda.pipe)(attributes, (0, _ramda.omit)([styleKey, textContentKey]), scalarPicker);

var constantStyle = exports.constantStyle = (0, _ramda.pipe)(attributes, (0, _ramda.prop)(styleKey), scalarPicker);

var children = (0, _ramda.prop)('children');

var boundChildren = exports.boundChildren = (0, _ramda.pipe)(children, (0, _ramda.filter)(isFn));

var constantChildren = exports.constantChildren = (0, _ramda.pipe)(children, (0, _ramda.reject)((0, _ramda.either)(isFn, isStr)));

var textChildren = exports.textChildren = (0, _ramda.pipe)(children, (0, _ramda.filter)(isStr));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92bm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFhQTs7Ozs7OztBQUdBLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQztBQUMvQixNQUFNLGNBQWMsU0FBUyxLQUFULENBQWUsR0FBZixDQUFkLENBRHlCO0FBRS9CLE1BQU0sY0FBYyxZQUFZLENBQVosRUFBZSxLQUFmLENBQXFCLEdBQXJCLENBQWQsQ0FGeUI7QUFHL0IsTUFBTSxVQUFVLFlBQVksQ0FBWixNQUFtQixFQUFuQixHQUF3QixLQUF4QixHQUFnQyxZQUFZLENBQVosQ0FBaEMsQ0FIZTtBQUkvQixNQUFNLFlBQVksWUFBWSxLQUFaLENBQWtCLENBQWxCLENBQVosQ0FKeUI7QUFLL0IsU0FBTyxFQUFDLGdCQUFELEVBQVUsb0JBQVYsRUFBcUIsSUFBSSxZQUFZLENBQVosS0FBa0IsSUFBbEIsRUFBaEMsQ0FMK0I7Q0FBakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJPLElBQU0sZ0JBQUksU0FBSixDQUFJLENBQUMsUUFBRDtvQ0FBK0I7Ozs7TUFBcEIsbUVBQWE7O0FBQ3ZDO0tBQ0csY0FBYyxRQUFkO0FBQ0g7QUFDQTs7Q0FKZTs7QUFPakIsSUFBTSxPQUFPLGVBQUcsUUFBSCxDQUFQO0FBQ04sSUFBTSxRQUFRLGVBQUcsTUFBSCxDQUFSO0FBQ04sSUFBTSxXQUFXLHVCQUFXLElBQVgsQ0FBWDtBQUNOLElBQU0sTUFBTSxtQkFBTyxJQUFQLENBQU47O0FBRU4sSUFBTSxpQkFBaUIsbUJBQU8sSUFBUCxDQUFqQjtBQUNOLElBQU0sZ0JBQWdCLG1CQUFPLElBQVAsRUFBYSxHQUFiLENBQWhCOztBQUVOLElBQU0sZUFBZSxtQkFBTyxRQUFQLENBQWY7O0FBRU4sSUFBTSxhQUFhLGlCQUFLLFlBQUwsQ0FBYjtBQUNOLElBQU0saUJBQWlCLGFBQWpCO0FBQ04sSUFBTSxXQUFXLE9BQVg7O0FBRUMsSUFBTSw0Q0FBa0IsaUJBQzdCLFVBRDZCLEVBRTdCLGlCQUFLLENBQUMsUUFBRCxFQUFXLGNBQVgsQ0FBTCxDQUY2QixFQUc3QixjQUg2QixDQUFsQjs7QUFLTixJQUFNLGtDQUFhLGlCQUN4QixVQUR3QixFQUV4QixpQkFBSyxRQUFMLENBRndCLEVBR3hCLGNBSHdCLENBQWI7O0FBS04sSUFBTSw4Q0FBbUIsaUJBQzlCLFVBRDhCLEVBRTlCLGlCQUFLLGNBQUwsQ0FGOEIsRUFHOUIsYUFIOEIsQ0FBbkI7O0FBS04sSUFBTSxrREFBcUIsaUJBQ2hDLFVBRGdDLEVBRWhDLGlCQUFLLENBQUMsUUFBRCxFQUFXLGNBQVgsQ0FBTCxDQUZnQyxFQUdoQyxZQUhnQyxDQUFyQjs7QUFLTixJQUFNLHdDQUFnQixpQkFDM0IsVUFEMkIsRUFFM0IsaUJBQUssUUFBTCxDQUYyQixFQUczQixZQUgyQixDQUFoQjs7QUFLYixJQUFNLFdBQVcsaUJBQUssVUFBTCxDQUFYOztBQUVDLElBQU0sd0NBQWdCLGlCQUMzQixRQUQyQixFQUUzQixtQkFBTyxJQUFQLENBRjJCLENBQWhCOztBQUlOLElBQU0sOENBQW1CLGlCQUM5QixRQUQ4QixFQUU5QixtQkFBTyxtQkFBTyxJQUFQLEVBQWEsS0FBYixDQUFQLENBRjhCLENBQW5COztBQUlOLElBQU0sc0NBQWUsaUJBQzFCLFFBRDBCLEVBRTFCLG1CQUFPLEtBQVAsQ0FGMEIsQ0FBZiIsImZpbGUiOiJ2bm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFsd2F5cyxcbiAgY29tcGxlbWVudCxcbiAgZWl0aGVyLFxuICBmaWx0ZXIsXG4gIGlzLFxuICBwaWNrQnksXG4gIG9taXQsXG4gIHBpcGUsXG4gIHByb3AsXG4gIHJlamVjdCxcbiAgdW5sZXNzXG59IGZyb20gJ3JhbWRhJztcbmltcG9ydCB0aHJlYWQgZnJvbSAnLi90aHJlYWQnO1xuXG4vLyBUT0RPOiBpdCdzIGR1bW15IGltcGxlbWVudGF0aW9uXG5mdW5jdGlvbiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IHNwbGl0QnlIYXNoID0gc2VsZWN0b3Iuc3BsaXQoJyMnKTtcbiAgY29uc3Qgc3BsaXRCeURvdHMgPSBzcGxpdEJ5SGFzaFswXS5zcGxpdCgnLicpO1xuICBjb25zdCB0YWdOYW1lID0gc3BsaXRCeURvdHNbMF0gPT09ICcnID8gJ2RpdicgOiBzcGxpdEJ5RG90c1swXTtcbiAgY29uc3QgY2xhc3NMaXN0ID0gc3BsaXRCeURvdHMuc2xpY2UoMSk7XG4gIHJldHVybiB7dGFnTmFtZSwgY2xhc3NMaXN0LCBpZDogc3BsaXRCeUhhc2hbMV0gfHwgbnVsbH07XG59XG5cbi8qKlxuICogaHlwZXJzY3JpcHQgaW5zcGlyZWQgdmlydHVhbCBub2RlIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyB1c2VkIGZvciBkYXRhIGJpbmRpbmcgYW5kL29yIGNvbnN0cnVjdGluZyBub2RlXG4gKiAgdXNlIGNzcyBzZWxlY3RvcnMgc3ludGF4XG4gKiAgY3VycmVudGx5IHNob3VsZCBoYXZlIHByb3BlciBvcmRlciwgaS5lLiB0YWduYW1lLCBjbGFzc2xpc3QsIGlkXG4gKiAgZXhhbXBsZXM6IGRpdjsgZGl2LmNsYXNzTmFtZS5vdGhlckNsYXNzOyBkaXYuY2xhc3MjaWQ7IGRpdiNpZDtcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzIE9iamVjdCByZXByZXNlbnRpbmcgbm9kZSBhdHRyaWJ1dGVzXG4gKiAgZHVlIHRvIGQzIG5hdHVyZSwgYXR0cmlidXRlcyBjb3VsZCBiZSBmdW5jdGlvbnMgb2ZcbiAqICBkYXRhIC0+IGluZGV4IC0+IGF0dHJWYWx1ZSBmb3JtXG4gKiAgbWFwIGtleXMgc2hvdWxkIHJlcHJlc2VudCBET00gYXR0cmlidXRlIG5hbWVzXG4gKiAgYWxzbywgJ3RleHRDb250ZW50JyBhdHRyaWJ1dGUgaXMgc3VwcG9ydGVkIGZvciByZXByZXNlbnRpbmcgZHluYW1pYyBjb250ZW50IG9mIG5vZGVcbiAqIEBwYXJhbSBbY2hpbGRyZW5dIENoaWxkcmVuIG9mIG5vZGUuXG4gKiAgU3RyaW5ncyB3aWxsIGJlIGNvbmNhdGVuYXRlZCBhbmQgaW5zZXJ0ZWQgYXMgdGV4dCBub2RlXG4gKiAgdk5vZGUgZGVmaW5pdGlvbnMgd2lsbCBiZSBzdGF0aWMgY2hpbGRyZW5cbiAqICBmdW5jdGlvbnMgb2YgcGFyZW50IHNlbGVjdGlvbiB3aWxsIGJlIGV2YWx1YXRlZCBkeW5hbWljYWxseVxuICogQHJldHVybnMge09iamVjdH0gdk5vZGUgZGVmaW5pdGlvblxuICovXG5leHBvcnQgY29uc3QgaCA9IChzZWxlY3RvciwgYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikgPT4gKHtcbiAgc2VsZWN0b3IsXG4gIC4uLnBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICBhdHRyaWJ1dGVzLFxuICBjaGlsZHJlblxufSk7XG5cbmNvbnN0IGlzRm4gPSBpcyhGdW5jdGlvbik7XG5jb25zdCBpc1N0ciA9IGlzKFN0cmluZyk7XG5jb25zdCBpc1NjYWxhciA9IGNvbXBsZW1lbnQoaXNGbik7XG5jb25zdCBuaWwgPSBhbHdheXMobnVsbCk7XG5cbmNvbnN0IGZ1bmN0aW9uUGlja2VyID0gcGlja0J5KGlzRm4pO1xuY29uc3QgZnVuY3Rpb25Pck5pbCA9IHVubGVzcyhpc0ZuLCBuaWwpO1xuXG5jb25zdCBzY2FsYXJQaWNrZXIgPSBwaWNrQnkoaXNTY2FsYXIpO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0gcHJvcCgnYXR0cmlidXRlcycpO1xuY29uc3QgdGV4dENvbnRlbnRLZXkgPSAndGV4dENvbnRlbnQnO1xuY29uc3Qgc3R5bGVLZXkgPSAnc3R5bGUnO1xuXG5leHBvcnQgY29uc3QgYm91bmRBdHRyaWJ1dGVzID0gcGlwZShcbiAgYXR0cmlidXRlcyxcbiAgb21pdChbc3R5bGVLZXksIHRleHRDb250ZW50S2V5XSksXG4gIGZ1bmN0aW9uUGlja2VyKTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kU3R5bGUgPSBwaXBlKFxuICBhdHRyaWJ1dGVzLFxuICBwcm9wKHN0eWxlS2V5KSxcbiAgZnVuY3Rpb25QaWNrZXIpO1xuXG5leHBvcnQgY29uc3QgYm91bmRUZXh0Q29udGVudCA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIHByb3AodGV4dENvbnRlbnRLZXkpLFxuICBmdW5jdGlvbk9yTmlsKTtcblxuZXhwb3J0IGNvbnN0IGNvbnN0YW50QXR0cmlidXRlcyA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIG9taXQoW3N0eWxlS2V5LCB0ZXh0Q29udGVudEtleV0pLFxuICBzY2FsYXJQaWNrZXIpO1xuXG5leHBvcnQgY29uc3QgY29uc3RhbnRTdHlsZSA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIHByb3Aoc3R5bGVLZXkpLFxuICBzY2FsYXJQaWNrZXIpO1xuXG5jb25zdCBjaGlsZHJlbiA9IHByb3AoJ2NoaWxkcmVuJyk7XG5cbmV4cG9ydCBjb25zdCBib3VuZENoaWxkcmVuID0gcGlwZShcbiAgY2hpbGRyZW4sXG4gIGZpbHRlcihpc0ZuKSk7XG5cbmV4cG9ydCBjb25zdCBjb25zdGFudENoaWxkcmVuID0gcGlwZShcbiAgY2hpbGRyZW4sXG4gIHJlamVjdChlaXRoZXIoaXNGbiwgaXNTdHIpKSk7XG5cbmV4cG9ydCBjb25zdCB0ZXh0Q2hpbGRyZW4gPSBwaXBlKFxuICBjaGlsZHJlbixcbiAgZmlsdGVyKGlzU3RyKSk7XG5cbiJdfQ==