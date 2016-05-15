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
var scalarOrNill = (0, _ramda.unless)(isScalar, nil);

var attributes = (0, _ramda.prop)('attributes');
var textContentKey = 'textContent';
var styleKey = 'style';

var boundAttributes = exports.boundAttributes = (0, _ramda.pipe)(attributes, (0, _ramda.omit)([styleKey, textContentKey]), functionPicker);

var boundStyle = exports.boundStyle = (0, _ramda.pipe)(attributes, (0, _ramda.prop)(styleKey), functionOrNil);

var boundTextContent = exports.boundTextContent = (0, _ramda.pipe)(attributes, (0, _ramda.prop)(textContentKey), functionOrNil);

var constantAttributes = exports.constantAttributes = (0, _ramda.pipe)(attributes, (0, _ramda.omit)([styleKey, textContentKey]), scalarPicker);

var constantStyle = exports.constantStyle = (0, _ramda.pipe)(attributes, (0, _ramda.prop)(styleKey), scalarOrNill);

var children = (0, _ramda.prop)('children');

var boundChildren = exports.boundChildren = (0, _ramda.pipe)(children, (0, _ramda.filter)(isFn));

var constantChildren = exports.constantChildren = (0, _ramda.pipe)(children, (0, _ramda.reject)((0, _ramda.either)(isFn, isStr)));

var textChildren = exports.textChildren = (0, _ramda.pipe)(children, (0, _ramda.filter)(isStr));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92bm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFhQTs7Ozs7OztBQUdBLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQztBQUMvQixNQUFNLGNBQWMsU0FBUyxLQUFULENBQWUsR0FBZixDQUFkLENBRHlCO0FBRS9CLE1BQU0sY0FBYyxZQUFZLENBQVosRUFBZSxLQUFmLENBQXFCLEdBQXJCLENBQWQsQ0FGeUI7QUFHL0IsTUFBTSxVQUFVLFlBQVksQ0FBWixNQUFtQixFQUFuQixHQUF3QixLQUF4QixHQUFnQyxZQUFZLENBQVosQ0FBaEMsQ0FIZTtBQUkvQixNQUFNLFlBQVksWUFBWSxLQUFaLENBQWtCLENBQWxCLENBQVosQ0FKeUI7QUFLL0IsU0FBTyxFQUFDLGdCQUFELEVBQVUsb0JBQVYsRUFBcUIsSUFBSSxZQUFZLENBQVosS0FBa0IsSUFBbEIsRUFBaEMsQ0FMK0I7Q0FBakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJPLElBQU0sZ0JBQUksU0FBSixDQUFJLENBQUMsUUFBRDtvQ0FBK0I7Ozs7TUFBcEIsbUVBQWE7O0FBQ3ZDO0tBQ0csY0FBYyxRQUFkO0FBQ0g7QUFDQTs7Q0FKZTs7QUFPakIsSUFBTSxPQUFPLGVBQUcsUUFBSCxDQUFQO0FBQ04sSUFBTSxRQUFRLGVBQUcsTUFBSCxDQUFSO0FBQ04sSUFBTSxXQUFXLHVCQUFXLElBQVgsQ0FBWDtBQUNOLElBQU0sTUFBTSxtQkFBTyxJQUFQLENBQU47O0FBRU4sSUFBTSxpQkFBaUIsbUJBQU8sSUFBUCxDQUFqQjtBQUNOLElBQU0sZ0JBQWdCLG1CQUFPLElBQVAsRUFBYSxHQUFiLENBQWhCOztBQUVOLElBQU0sZUFBZSxtQkFBTyxRQUFQLENBQWY7QUFDTixJQUFNLGVBQWUsbUJBQU8sUUFBUCxFQUFpQixHQUFqQixDQUFmOztBQUVOLElBQU0sYUFBYSxpQkFBSyxZQUFMLENBQWI7QUFDTixJQUFNLGlCQUFpQixhQUFqQjtBQUNOLElBQU0sV0FBVyxPQUFYOztBQUVDLElBQU0sNENBQWtCLGlCQUM3QixVQUQ2QixFQUU3QixpQkFBSyxDQUFDLFFBQUQsRUFBVyxjQUFYLENBQUwsQ0FGNkIsRUFHN0IsY0FINkIsQ0FBbEI7O0FBS04sSUFBTSxrQ0FBYSxpQkFDeEIsVUFEd0IsRUFFeEIsaUJBQUssUUFBTCxDQUZ3QixFQUd4QixhQUh3QixDQUFiOztBQUtOLElBQU0sOENBQW1CLGlCQUM5QixVQUQ4QixFQUU5QixpQkFBSyxjQUFMLENBRjhCLEVBRzlCLGFBSDhCLENBQW5COztBQUtOLElBQU0sa0RBQXFCLGlCQUNoQyxVQURnQyxFQUVoQyxpQkFBSyxDQUFDLFFBQUQsRUFBVyxjQUFYLENBQUwsQ0FGZ0MsRUFHaEMsWUFIZ0MsQ0FBckI7O0FBS04sSUFBTSx3Q0FBZ0IsaUJBQzNCLFVBRDJCLEVBRTNCLGlCQUFLLFFBQUwsQ0FGMkIsRUFHM0IsWUFIMkIsQ0FBaEI7O0FBS2IsSUFBTSxXQUFXLGlCQUFLLFVBQUwsQ0FBWDs7QUFFQyxJQUFNLHdDQUFnQixpQkFDM0IsUUFEMkIsRUFFM0IsbUJBQU8sSUFBUCxDQUYyQixDQUFoQjs7QUFJTixJQUFNLDhDQUFtQixpQkFDOUIsUUFEOEIsRUFFOUIsbUJBQU8sbUJBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBUCxDQUY4QixDQUFuQjs7QUFJTixJQUFNLHNDQUFlLGlCQUMxQixRQUQwQixFQUUxQixtQkFBTyxLQUFQLENBRjBCLENBQWYiLCJmaWxlIjoidm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbHdheXMsXG4gIGNvbXBsZW1lbnQsXG4gIGVpdGhlcixcbiAgZmlsdGVyLFxuICBpcyxcbiAgcGlja0J5LFxuICBvbWl0LFxuICBwaXBlLFxuICBwcm9wLFxuICByZWplY3QsXG4gIHVubGVzc1xufSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgdGhyZWFkIGZyb20gJy4vdGhyZWFkJztcblxuLy8gVE9ETzogaXQncyBkdW1teSBpbXBsZW1lbnRhdGlvblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBzcGxpdEJ5SGFzaCA9IHNlbGVjdG9yLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHNwbGl0QnlEb3RzID0gc3BsaXRCeUhhc2hbMF0uc3BsaXQoJy4nKTtcbiAgY29uc3QgdGFnTmFtZSA9IHNwbGl0QnlEb3RzWzBdID09PSAnJyA/ICdkaXYnIDogc3BsaXRCeURvdHNbMF07XG4gIGNvbnN0IGNsYXNzTGlzdCA9IHNwbGl0QnlEb3RzLnNsaWNlKDEpO1xuICByZXR1cm4ge3RhZ05hbWUsIGNsYXNzTGlzdCwgaWQ6IHNwbGl0QnlIYXNoWzFdIHx8IG51bGx9O1xufVxuXG4vKipcbiAqIGh5cGVyc2NyaXB0IGluc3BpcmVkIHZpcnR1YWwgbm9kZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgdXNlZCBmb3IgZGF0YSBiaW5kaW5nIGFuZC9vciBjb25zdHJ1Y3Rpbmcgbm9kZVxuICogIHVzZSBjc3Mgc2VsZWN0b3JzIHN5bnRheFxuICogIGN1cnJlbnRseSBzaG91bGQgaGF2ZSBwcm9wZXIgb3JkZXIsIGkuZS4gdGFnbmFtZSwgY2xhc3NsaXN0LCBpZFxuICogIGV4YW1wbGVzOiBkaXY7IGRpdi5jbGFzc05hbWUub3RoZXJDbGFzczsgZGl2LmNsYXNzI2lkOyBkaXYjaWQ7XG4gKiBAcGFyYW0gYXR0cmlidXRlcyBPYmplY3QgcmVwcmVzZW50aW5nIG5vZGUgYXR0cmlidXRlc1xuICogIGR1ZSB0byBkMyBuYXR1cmUsIGF0dHJpYnV0ZXMgY291bGQgYmUgZnVuY3Rpb25zIG9mXG4gKiAgZGF0YSAtPiBpbmRleCAtPiBhdHRyVmFsdWUgZm9ybVxuICogIG1hcCBrZXlzIHNob3VsZCByZXByZXNlbnQgRE9NIGF0dHJpYnV0ZSBuYW1lc1xuICogIGFsc28sICd0ZXh0Q29udGVudCcgYXR0cmlidXRlIGlzIHN1cHBvcnRlZCBmb3IgcmVwcmVzZW50aW5nIGR5bmFtaWMgY29udGVudCBvZiBub2RlXG4gKiBAcGFyYW0gW2NoaWxkcmVuXSBDaGlsZHJlbiBvZiBub2RlLlxuICogIFN0cmluZ3Mgd2lsbCBiZSBjb25jYXRlbmF0ZWQgYW5kIGluc2VydGVkIGFzIHRleHQgbm9kZVxuICogIHZOb2RlIGRlZmluaXRpb25zIHdpbGwgYmUgc3RhdGljIGNoaWxkcmVuXG4gKiAgZnVuY3Rpb25zIG9mIHBhcmVudCBzZWxlY3Rpb24gd2lsbCBiZSBldmFsdWF0ZWQgZHluYW1pY2FsbHlcbiAqIEByZXR1cm5zIHtPYmplY3R9IHZOb2RlIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGggPSAoc2VsZWN0b3IsIGF0dHJpYnV0ZXMgPSB7fSwgLi4uY2hpbGRyZW4pID0+ICh7XG4gIHNlbGVjdG9yLFxuICAuLi5wYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgYXR0cmlidXRlcyxcbiAgY2hpbGRyZW5cbn0pO1xuXG5jb25zdCBpc0ZuID0gaXMoRnVuY3Rpb24pO1xuY29uc3QgaXNTdHIgPSBpcyhTdHJpbmcpO1xuY29uc3QgaXNTY2FsYXIgPSBjb21wbGVtZW50KGlzRm4pO1xuY29uc3QgbmlsID0gYWx3YXlzKG51bGwpO1xuXG5jb25zdCBmdW5jdGlvblBpY2tlciA9IHBpY2tCeShpc0ZuKTtcbmNvbnN0IGZ1bmN0aW9uT3JOaWwgPSB1bmxlc3MoaXNGbiwgbmlsKTtcblxuY29uc3Qgc2NhbGFyUGlja2VyID0gcGlja0J5KGlzU2NhbGFyKTtcbmNvbnN0IHNjYWxhck9yTmlsbCA9IHVubGVzcyhpc1NjYWxhciwgbmlsKTtcblxuY29uc3QgYXR0cmlidXRlcyA9IHByb3AoJ2F0dHJpYnV0ZXMnKTtcbmNvbnN0IHRleHRDb250ZW50S2V5ID0gJ3RleHRDb250ZW50JztcbmNvbnN0IHN0eWxlS2V5ID0gJ3N0eWxlJztcblxuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlcyA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIG9taXQoW3N0eWxlS2V5LCB0ZXh0Q29udGVudEtleV0pLFxuICBmdW5jdGlvblBpY2tlcik7XG5cbmV4cG9ydCBjb25zdCBib3VuZFN0eWxlID0gcGlwZShcbiAgYXR0cmlidXRlcyxcbiAgcHJvcChzdHlsZUtleSksXG4gIGZ1bmN0aW9uT3JOaWwpO1xuXG5leHBvcnQgY29uc3QgYm91bmRUZXh0Q29udGVudCA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIHByb3AodGV4dENvbnRlbnRLZXkpLFxuICBmdW5jdGlvbk9yTmlsKTtcblxuZXhwb3J0IGNvbnN0IGNvbnN0YW50QXR0cmlidXRlcyA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIG9taXQoW3N0eWxlS2V5LCB0ZXh0Q29udGVudEtleV0pLFxuICBzY2FsYXJQaWNrZXIpO1xuXG5leHBvcnQgY29uc3QgY29uc3RhbnRTdHlsZSA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIHByb3Aoc3R5bGVLZXkpLFxuICBzY2FsYXJPck5pbGwpO1xuXG5jb25zdCBjaGlsZHJlbiA9IHByb3AoJ2NoaWxkcmVuJyk7XG5cbmV4cG9ydCBjb25zdCBib3VuZENoaWxkcmVuID0gcGlwZShcbiAgY2hpbGRyZW4sXG4gIGZpbHRlcihpc0ZuKSk7XG5cbmV4cG9ydCBjb25zdCBjb25zdGFudENoaWxkcmVuID0gcGlwZShcbiAgY2hpbGRyZW4sXG4gIHJlamVjdChlaXRoZXIoaXNGbiwgaXNTdHIpKSk7XG5cbmV4cG9ydCBjb25zdCB0ZXh0Q2hpbGRyZW4gPSBwaXBlKFxuICBjaGlsZHJlbixcbiAgZmlsdGVyKGlzU3RyKSk7XG5cbiJdfQ==