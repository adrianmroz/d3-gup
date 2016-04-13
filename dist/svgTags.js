'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tspan = exports.text = exports.rect = exports.path = exports.line = exports.g = exports.ellipse = exports.clipPath = undefined;

var _vnode = require('./vnode');

var clipPath = exports.clipPath = function clipPath(selector, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return _vnode.h.apply(undefined, ['clipPath' + selector, attrs].concat(children));
};

var ellipse = exports.ellipse = function ellipse(selector, attrs) {
  for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }

  return _vnode.h.apply(undefined, ['ellipse' + selector, attrs].concat(children));
};

var g = exports.g = function g(selector, attrs) {
  for (var _len3 = arguments.length, children = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    children[_key3 - 2] = arguments[_key3];
  }

  return _vnode.h.apply(undefined, ['g' + selector, attrs].concat(children));
};

var line = exports.line = function line(selector, attrs) {
  for (var _len4 = arguments.length, children = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    children[_key4 - 2] = arguments[_key4];
  }

  return _vnode.h.apply(undefined, ['line' + selector, attrs].concat(children));
};

var path = exports.path = function path(selector, attrs) {
  for (var _len5 = arguments.length, children = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    children[_key5 - 2] = arguments[_key5];
  }

  return _vnode.h.apply(undefined, ['path' + selector, attrs].concat(children));
};

var rect = exports.rect = function rect(selector, attrs) {
  for (var _len6 = arguments.length, children = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    children[_key6 - 2] = arguments[_key6];
  }

  return _vnode.h.apply(undefined, ['rect' + selector, attrs].concat(children));
};

var text = exports.text = function text(selector, attrs) {
  for (var _len7 = arguments.length, children = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    children[_key7 - 2] = arguments[_key7];
  }

  return _vnode.h.apply(undefined, ['text' + selector, attrs].concat(children));
};

var tspan = exports.tspan = function tspan(selector, attrs) {
  for (var _len8 = arguments.length, children = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    children[_key8 - 2] = arguments[_key8];
  }

  return _vnode.h.apply(undefined, ['tspan' + selector, attrs].concat(children));
};