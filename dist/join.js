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

var introduceNode = (0, _ramda.uncurryN)(3, function (vNode, insertSelector) {
  return (0, _ramda.pipe)(addNode(vNode, insertSelector), setConstantProps(vNode));
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

    var enterSelection = (0, _thread2.default)(selection, _d3Fun.enter, introduceNode(vNode, insertSelector), enterTransform);

    (0, _thread2.default)(selection, (0, _d3Fun.attr)((0, _vnode.boundAttributes)(vNode)), (0, _d3Fun.style)((0, _vnode.boundStyle)(vNode)), (0, _ramda.unless)((0, _ramda.always)((0, _ramda.isNil)((0, _vnode.boundTextContent)(vNode))), (0, _d3Fun.text)((0, _vnode.boundTextContent)(vNode))), updateTransform);

    (0, _thread2.default)(vNode, _vnode.constantChildren, (0, _ramda.forEach)((0, _ramda.partialRight)(introduceNode, [null, enterSelection])));

    (0, _thread2.default)(vNode, _vnode.boundChildren, (0, _ramda.forEach)(function (child) {
      return child(selection);
    }));

    (0, _thread2.default)(selection, _d3Fun.exit, exitTransform, _d3Fun.remove);

    return selection;
  };
};