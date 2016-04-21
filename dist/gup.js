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

    (0, _thread2.default)(selection, (0, _d3Fun.attr)(vNode.getBoundAttributes()), (0, _d3Fun.style)(vNode.getBoundStyles()));

    var textContent = vNode.getBoundTextContent();
    if (!(0, _ramda.isNil)(textContent)) {
      (0, _d3Fun.text)(textContent, selection);
    }

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