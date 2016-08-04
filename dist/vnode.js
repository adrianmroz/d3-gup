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