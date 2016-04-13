'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ul = exports.span = exports.p = exports.ol = exports.li = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.div = exports.a = undefined;

var _vnode = require('./vnode');

var a = exports.a = function a(selector, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return _vnode.h.apply(undefined, ['a' + selector, attrs].concat(children));
};

var div = exports.div = function div(selector, attrs) {
  for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }

  return _vnode.h.apply(undefined, ['div' + selector, attrs].concat(children));
};

var h1 = exports.h1 = function h1(selector, attrs) {
  for (var _len3 = arguments.length, children = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    children[_key3 - 2] = arguments[_key3];
  }

  return _vnode.h.apply(undefined, ['h1' + selector, attrs].concat(children));
};

var h2 = exports.h2 = function h2(selector, attrs) {
  for (var _len4 = arguments.length, children = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    children[_key4 - 2] = arguments[_key4];
  }

  return _vnode.h.apply(undefined, ['h2' + selector, attrs].concat(children));
};

var h3 = exports.h3 = function h3(selector, attrs) {
  for (var _len5 = arguments.length, children = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    children[_key5 - 2] = arguments[_key5];
  }

  return _vnode.h.apply(undefined, ['h3' + selector, attrs].concat(children));
};

var h4 = exports.h4 = function h4(selector, attrs) {
  for (var _len6 = arguments.length, children = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    children[_key6 - 2] = arguments[_key6];
  }

  return _vnode.h.apply(undefined, ['h4' + selector, attrs].concat(children));
};

var h5 = exports.h5 = function h5(selector, attrs) {
  for (var _len7 = arguments.length, children = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    children[_key7 - 2] = arguments[_key7];
  }

  return _vnode.h.apply(undefined, ['h5' + selector, attrs].concat(children));
};

var h6 = exports.h6 = function h6(selector, attrs) {
  for (var _len8 = arguments.length, children = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    children[_key8 - 2] = arguments[_key8];
  }

  return _vnode.h.apply(undefined, ['h6' + selector, attrs].concat(children));
};

var li = exports.li = function li(selector, attrs) {
  for (var _len9 = arguments.length, children = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    children[_key9 - 2] = arguments[_key9];
  }

  return _vnode.h.apply(undefined, ['li' + selector, attrs].concat(children));
};

var ol = exports.ol = function ol(selector, attrs) {
  for (var _len10 = arguments.length, children = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
    children[_key10 - 2] = arguments[_key10];
  }

  return _vnode.h.apply(undefined, ['ol' + selector, attrs].concat(children));
};

var p = exports.p = function p(selector, attrs) {
  for (var _len11 = arguments.length, children = Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
    children[_key11 - 2] = arguments[_key11];
  }

  return _vnode.h.apply(undefined, ['p' + selector, attrs].concat(children));
};

var span = exports.span = function span(selector, attrs) {
  for (var _len12 = arguments.length, children = Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
    children[_key12 - 2] = arguments[_key12];
  }

  return _vnode.h.apply(undefined, ['span' + selector, attrs].concat(children));
};

var ul = exports.ul = function ul(selector, attrs) {
  for (var _len13 = arguments.length, children = Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
    children[_key13 - 2] = arguments[_key13];
  }

  return _vnode.h.apply(undefined, ['ul' + selector, attrs].concat(children));
};