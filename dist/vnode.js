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

var attributes = (0, _ramda.prop)('attributes');

var functionPicker = (0, _ramda.pickBy)((0, _ramda.is)(Function));
var scalarPicker = (0, _ramda.pickBy)(function (v) {
  return !(0, _ramda.is)(Function, v);
});

var textContentKey = 'textContent';
var styleKey = 'style';

var boundAttributes = exports.boundAttributes = pipe(attributes, (0, _ramda.omit)(styleKey, textContentKey), functionPicker);

var boundStyle = exports.boundStyle = pipe(attributes, (0, _ramda.prop)(styleKey), functionPicker);

var boundTextContent = exports.boundTextContent = pipe(attributes, (0, _ramda.prop)(textContentKey), functionPicker);

var constantAttributes = exports.constantAttributes = pipe(attributes, (0, _ramda.omit)(styleKey, textContentKey), scalarPicker);

var constantStyle = exports.constantStyle = pipe(attributes, (0, _ramda.prop)(styleKey), scalarPicker);

var children = (0, _ramda.prop)('children');

var boundChildren = exports.boundChildren = pipe(children, filter((0, _ramda.is)(Function)));

var constantChildren = exports.constantChildren = pipe(children, filter(function (child) {
  return !(0, _ramda.is)(Function, child) && !(0, _ramda.is)(String, child);
}));

var textChildren = exports.textChildren = pipe(children, filter((0, _ramda.is)(String)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92bm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7OztBQUdBLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQztBQUMvQixNQUFNLGNBQWMsU0FBUyxLQUFULENBQWUsR0FBZixDQUFkLENBRHlCO0FBRS9CLE1BQU0sY0FBYyxZQUFZLENBQVosRUFBZSxLQUFmLENBQXFCLEdBQXJCLENBQWQsQ0FGeUI7QUFHL0IsTUFBTSxVQUFVLFlBQVksQ0FBWixNQUFtQixFQUFuQixHQUF3QixLQUF4QixHQUFnQyxZQUFZLENBQVosQ0FBaEMsQ0FIZTtBQUkvQixNQUFNLFlBQVksWUFBWSxLQUFaLENBQWtCLENBQWxCLENBQVosQ0FKeUI7QUFLL0IsU0FBTyxFQUFDLGdCQUFELEVBQVUsb0JBQVYsRUFBcUIsSUFBSSxZQUFZLENBQVosS0FBa0IsSUFBbEIsRUFBaEMsQ0FMK0I7Q0FBakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJPLElBQU0sZ0JBQUksU0FBSixDQUFJLENBQUMsUUFBRDtvQ0FBK0I7Ozs7TUFBcEIsbUVBQWE7O0FBQ3ZDO0tBQ0csY0FBYyxRQUFkO0FBQ0g7QUFDQTs7Q0FKZTs7QUFPakIsSUFBTSxhQUFhLGlCQUFLLFlBQUwsQ0FBYjs7QUFFTixJQUFNLGlCQUFpQixtQkFBTyxlQUFHLFFBQUgsQ0FBUCxDQUFqQjtBQUNOLElBQU0sZUFBZSxtQkFBTyxVQUFDLENBQUQ7U0FBTyxDQUFDLGVBQUcsUUFBSCxFQUFhLENBQWIsQ0FBRDtDQUFQLENBQXRCOztBQUVOLElBQU0saUJBQWlCLGFBQWpCO0FBQ04sSUFBTSxXQUFXLE9BQVg7O0FBRUMsSUFBTSw0Q0FBa0IsS0FDN0IsVUFENkIsRUFFN0IsaUJBQUssUUFBTCxFQUFlLGNBQWYsQ0FGNkIsRUFHN0IsY0FINkIsQ0FBbEI7O0FBS04sSUFBTSxrQ0FBYSxLQUN4QixVQUR3QixFQUV4QixpQkFBSyxRQUFMLENBRndCLEVBR3hCLGNBSHdCLENBQWI7O0FBS04sSUFBTSw4Q0FBbUIsS0FDOUIsVUFEOEIsRUFFOUIsaUJBQUssY0FBTCxDQUY4QixFQUc5QixjQUg4QixDQUFuQjs7QUFLTixJQUFNLGtEQUFxQixLQUNoQyxVQURnQyxFQUVoQyxpQkFBSyxRQUFMLEVBQWUsY0FBZixDQUZnQyxFQUdoQyxZQUhnQyxDQUFyQjs7QUFLTixJQUFNLHdDQUFnQixLQUMzQixVQUQyQixFQUUzQixpQkFBSyxRQUFMLENBRjJCLEVBRzNCLFlBSDJCLENBQWhCOztBQUtiLElBQU0sV0FBVyxpQkFBSyxVQUFMLENBQVg7O0FBRUMsSUFBTSx3Q0FBZ0IsS0FDM0IsUUFEMkIsRUFFM0IsT0FBTyxlQUFHLFFBQUgsQ0FBUCxDQUYyQixDQUFoQjs7QUFJTixJQUFNLDhDQUFtQixLQUM5QixRQUQ4QixFQUU5QixPQUFPLFVBQUMsS0FBRDtTQUFXLENBQUMsZUFBRyxRQUFILEVBQWEsS0FBYixDQUFELElBQXdCLENBQUMsZUFBRyxNQUFILEVBQVcsS0FBWCxDQUFEO0NBQW5DLENBRnVCLENBQW5COztBQUlOLElBQU0sc0NBQWUsS0FDMUIsUUFEMEIsRUFFMUIsT0FBTyxlQUFHLE1BQUgsQ0FBUCxDQUYwQixDQUFmIiwiZmlsZSI6InZub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcywgcGlja0J5LCBvbWl0LCBwcm9wfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgdGhyZWFkIGZyb20gJy4vdGhyZWFkJztcblxuLy8gVE9ETzogaXQncyBkdW1teSBpbXBsZW1lbnRhdGlvblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBzcGxpdEJ5SGFzaCA9IHNlbGVjdG9yLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHNwbGl0QnlEb3RzID0gc3BsaXRCeUhhc2hbMF0uc3BsaXQoJy4nKTtcbiAgY29uc3QgdGFnTmFtZSA9IHNwbGl0QnlEb3RzWzBdID09PSAnJyA/ICdkaXYnIDogc3BsaXRCeURvdHNbMF07XG4gIGNvbnN0IGNsYXNzTGlzdCA9IHNwbGl0QnlEb3RzLnNsaWNlKDEpO1xuICByZXR1cm4ge3RhZ05hbWUsIGNsYXNzTGlzdCwgaWQ6IHNwbGl0QnlIYXNoWzFdIHx8IG51bGx9O1xufVxuXG4vKipcbiAqIGh5cGVyc2NyaXB0IGluc3BpcmVkIHZpcnR1YWwgbm9kZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgdXNlZCBmb3IgZGF0YSBiaW5kaW5nIGFuZC9vciBjb25zdHJ1Y3Rpbmcgbm9kZVxuICogIHVzZSBjc3Mgc2VsZWN0b3JzIHN5bnRheFxuICogIGN1cnJlbnRseSBzaG91bGQgaGF2ZSBwcm9wZXIgb3JkZXIsIGkuZS4gdGFnbmFtZSwgY2xhc3NsaXN0LCBpZFxuICogIGV4YW1wbGVzOiBkaXY7IGRpdi5jbGFzc05hbWUub3RoZXJDbGFzczsgZGl2LmNsYXNzI2lkOyBkaXYjaWQ7XG4gKiBAcGFyYW0gYXR0cmlidXRlcyBPYmplY3QgcmVwcmVzZW50aW5nIG5vZGUgYXR0cmlidXRlc1xuICogIGR1ZSB0byBkMyBuYXR1cmUsIGF0dHJpYnV0ZXMgY291bGQgYmUgZnVuY3Rpb25zIG9mXG4gKiAgZGF0YSAtPiBpbmRleCAtPiBhdHRyVmFsdWUgZm9ybVxuICogIG1hcCBrZXlzIHNob3VsZCByZXByZXNlbnQgRE9NIGF0dHJpYnV0ZSBuYW1lc1xuICogIGFsc28sICd0ZXh0Q29udGVudCcgYXR0cmlidXRlIGlzIHN1cHBvcnRlZCBmb3IgcmVwcmVzZW50aW5nIGR5bmFtaWMgY29udGVudCBvZiBub2RlXG4gKiBAcGFyYW0gW2NoaWxkcmVuXSBDaGlsZHJlbiBvZiBub2RlLlxuICogIFN0cmluZ3Mgd2lsbCBiZSBjb25jYXRlbmF0ZWQgYW5kIGluc2VydGVkIGFzIHRleHQgbm9kZVxuICogIHZOb2RlIGRlZmluaXRpb25zIHdpbGwgYmUgc3RhdGljIGNoaWxkcmVuXG4gKiAgZnVuY3Rpb25zIG9mIHBhcmVudCBzZWxlY3Rpb24gd2lsbCBiZSBldmFsdWF0ZWQgZHluYW1pY2FsbHlcbiAqIEByZXR1cm5zIHtPYmplY3R9IHZOb2RlIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGggPSAoc2VsZWN0b3IsIGF0dHJpYnV0ZXMgPSB7fSwgLi4uY2hpbGRyZW4pID0+ICh7XG4gIHNlbGVjdG9yLFxuICAuLi5wYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgYXR0cmlidXRlcyxcbiAgY2hpbGRyZW5cbn0pO1xuXG5jb25zdCBhdHRyaWJ1dGVzID0gcHJvcCgnYXR0cmlidXRlcycpO1xuXG5jb25zdCBmdW5jdGlvblBpY2tlciA9IHBpY2tCeShpcyhGdW5jdGlvbikpO1xuY29uc3Qgc2NhbGFyUGlja2VyID0gcGlja0J5KCh2KSA9PiAhaXMoRnVuY3Rpb24sIHYpKTtcblxuY29uc3QgdGV4dENvbnRlbnRLZXkgPSAndGV4dENvbnRlbnQnO1xuY29uc3Qgc3R5bGVLZXkgPSAnc3R5bGUnO1xuXG5leHBvcnQgY29uc3QgYm91bmRBdHRyaWJ1dGVzID0gcGlwZShcbiAgYXR0cmlidXRlcyxcbiAgb21pdChzdHlsZUtleSwgdGV4dENvbnRlbnRLZXkpLFxuICBmdW5jdGlvblBpY2tlcik7XG5cbmV4cG9ydCBjb25zdCBib3VuZFN0eWxlID0gcGlwZShcbiAgYXR0cmlidXRlcyxcbiAgcHJvcChzdHlsZUtleSksXG4gIGZ1bmN0aW9uUGlja2VyKTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kVGV4dENvbnRlbnQgPSBwaXBlKFxuICBhdHRyaWJ1dGVzLFxuICBwcm9wKHRleHRDb250ZW50S2V5KSxcbiAgZnVuY3Rpb25QaWNrZXIpO1xuXG5leHBvcnQgY29uc3QgY29uc3RhbnRBdHRyaWJ1dGVzID0gcGlwZShcbiAgYXR0cmlidXRlcyxcbiAgb21pdChzdHlsZUtleSwgdGV4dENvbnRlbnRLZXkpLFxuICBzY2FsYXJQaWNrZXIpO1xuXG5leHBvcnQgY29uc3QgY29uc3RhbnRTdHlsZSA9IHBpcGUoXG4gIGF0dHJpYnV0ZXMsXG4gIHByb3Aoc3R5bGVLZXkpLFxuICBzY2FsYXJQaWNrZXIpO1xuXG5jb25zdCBjaGlsZHJlbiA9IHByb3AoJ2NoaWxkcmVuJyk7XG5cbmV4cG9ydCBjb25zdCBib3VuZENoaWxkcmVuID0gcGlwZShcbiAgY2hpbGRyZW4sXG4gIGZpbHRlcihpcyhGdW5jdGlvbikpKTtcblxuZXhwb3J0IGNvbnN0IGNvbnN0YW50Q2hpbGRyZW4gPSBwaXBlKFxuICBjaGlsZHJlbixcbiAgZmlsdGVyKChjaGlsZCkgPT4gIWlzKEZ1bmN0aW9uLCBjaGlsZCkgJiYgIWlzKFN0cmluZywgY2hpbGQpKSk7XG5cbmV4cG9ydCBjb25zdCB0ZXh0Q2hpbGRyZW4gPSBwaXBlKFxuICBjaGlsZHJlbixcbiAgZmlsdGVyKGlzKFN0cmluZykpKTtcblxuIl19