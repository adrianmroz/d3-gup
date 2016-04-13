'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ramda = require('ramda');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VNode = function () {
  function VNode(selector, attributes, children) {
    _classCallCheck(this, VNode);

    Object.assign(this, { selector: selector }, parseSelector(selector), parseAttributes(attributes), parseChildren(children));
  }

  _createClass(VNode, [{
    key: 'getTagName',
    value: function getTagName() {
      return this.tagName;
    }
  }, {
    key: 'getSelector',
    value: function getSelector() {
      return this.selector;
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this.id;
    }
  }, {
    key: 'getClassList',
    value: function getClassList() {
      return this.classList;
    }
  }, {
    key: 'getConstantAttributes',
    value: function getConstantAttributes() {
      return this.constantAttributes.attributes;
    }
  }, {
    key: 'getBoundAttributes',
    value: function getBoundAttributes() {
      return this.boundAttributes.attributes;
    }
  }, {
    key: 'getConstantStyles',
    value: function getConstantStyles() {
      return this.constantAttributes.style;
    }
  }, {
    key: 'getBoundStyles',
    value: function getBoundStyles() {
      return this.boundAttributes.style;
    }
  }, {
    key: 'getBoundTextContent',
    value: function getBoundTextContent() {
      return this.boundAttributes.textContent;
    }
  }, {
    key: 'getConstantChildren',
    value: function getConstantChildren() {
      return this.constantChildren;
    }
  }, {
    key: 'getBoundChildren',
    value: function getBoundChildren() {
      return this.boundChildren;
    }
  }, {
    key: 'getTextChildren',
    value: function getTextChildren() {
      return this.textChildren;
    }
  }]);

  return VNode;
}();

var isVNode = (0, _ramda.is)(VNode);
var isFunction = (0, _ramda.is)(Function);

function parseAttributes(attributes) {
  var functionPicker = (0, _ramda.pickBy)(function (v) {
    return isFunction(v);
  });
  var scalarPicker = (0, _ramda.pickBy)(function (v) {
    return !isFunction(v);
  });

  var style = attributes.style;
  var textContent = attributes.textContent;

  var attrs = (0, _ramda.omit)(['style', 'textContent'], attributes);

  return {
    boundAttributes: {
      attributes: functionPicker(attrs),
      style: functionPicker(style || {}),
      textContent: isFunction(textContent) ? textContent : undefined
    },
    constantAttributes: {
      attributes: scalarPicker(attrs),
      style: scalarPicker(style || {})
    }
  };
}

// TODO: it's dummy implementation
function parseSelector(selector) {
  var splitByHash = selector.split('#');
  var splitByDots = splitByHash[0].split('.');
  var tagName = splitByDots[0] === '' ? 'div' : splitByDots[0];
  var classList = splitByDots.slice(1);
  return { tagName: tagName, classList: classList, id: splitByHash[1] || null };
}

var parseChildren = function parseChildren(children) {
  return {
    boundChildren: children.filter(function (child) {
      return !isVNode(child);
    }),
    constantChildren: children.filter(function (child) {
      return isVNode(child);
    }),
    textChildren: children.filter((0, _ramda.is)(String))
  };
};

/**
 * hyperscript inspired virtual node constructor
 *
 * @param selector Selector string used for data binding and/or constructing node
 *  use css selectors syntax
 *  currently should have proper order, i.e. tagname, classlist, id
 *  examples: div; div.className.otherClass; div.class#id; div#id;
 * @param attributes Optional object representing node attributes
 *  due to d3 nature, attributes could be functions of
 *  data -> index -> attrValue form
 *  map keys should represent DOM attribute names
 *  also, 'textContent' attribute is supported for representing dynamic content of node
 * @param [content] Children of node.
 *  Strings will be concatenated and inserted as text node
 *  vNode definitions will be static children
 *  functions of parent selection will be evaluated dynamically
 * @returns {VNode} vNode definition
 */
var h = exports.h = function h(selector, attributes) {
  for (var _len = arguments.length, content = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    content[_key - 2] = arguments[_key];
  }

  var hasAttrs = !isFunction(attributes) && !isVNode(attributes);
  return new VNode(selector, hasAttrs ? attributes : {}, hasAttrs ? content : [attributes].concat(content));
};