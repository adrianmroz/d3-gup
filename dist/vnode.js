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
//# sourceMappingURL=data:application/json;base64,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QVIsQ0FBRDtLQUFYLENBQS9CO0FBQ0Esc0JBQWtCLFNBQVMsTUFBVCxDQUFnQixVQUFDLEtBQUQ7YUFBVyxRQUFRLEtBQVI7S0FBWCxDQUFsQztBQUNBLGtCQUFjLFNBQVMsTUFBVCxDQUFnQixlQUFHLE1BQUgsQ0FBaEIsQ0FBZDs7Q0FIb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JmLElBQU0sZ0JBQUksU0FBSixDQUFJLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFBc0M7b0NBQVo7O0dBQVk7O0FBQ3JELE1BQU0sV0FBVyxDQUFDLFdBQVcsVUFBWCxDQUFELElBQTJCLENBQUMsUUFBUSxVQUFSLENBQUQsQ0FEUztBQUVyRCxTQUFPLElBQUksS0FBSixDQUNMLFFBREssRUFFTCxXQUFXLFVBQVgsR0FBd0IsRUFBeEIsRUFDQSxXQUFXLE9BQVgsSUFBc0IsbUJBQWUsUUFBckMsQ0FIRixDQUZxRDtDQUF0QyIsImZpbGUiOiJ2bm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXMsIHBpY2tCeSwgb21pdH0gZnJvbSAncmFtZGEnO1xuXG5jbGFzcyBWTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcyxcbiAgICAgIHtzZWxlY3Rvcn0sXG4gICAgICBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgIHBhcnNlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSxcbiAgICAgIHBhcnNlQ2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhZ05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFnTmFtZTtcbiAgfVxuXG4gIGdldFNlbGVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXRDbGFzc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0O1xuICB9XG5cbiAgZ2V0Q29uc3RhbnRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0YW50QXR0cmlidXRlcy5hdHRyaWJ1dGVzO1xuICB9XG5cbiAgZ2V0Qm91bmRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmJvdW5kQXR0cmlidXRlcy5hdHRyaWJ1dGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RhbnRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RhbnRBdHRyaWJ1dGVzLnN0eWxlO1xuICB9XG5cbiAgZ2V0Qm91bmRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm91bmRBdHRyaWJ1dGVzLnN0eWxlO1xuICB9XG5cbiAgZ2V0Qm91bmRUZXh0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3VuZEF0dHJpYnV0ZXMudGV4dENvbnRlbnQ7XG4gIH1cblxuICBnZXRDb25zdGFudENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0YW50Q2hpbGRyZW47XG4gIH1cblxuICBnZXRCb3VuZENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmJvdW5kQ2hpbGRyZW47XG4gIH1cblxuICBnZXRUZXh0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dENoaWxkcmVuO1xuICB9XG59XG5cbmNvbnN0IGlzVk5vZGUgPSBpcyhWTm9kZSk7XG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoRnVuY3Rpb24pO1xuXG5mdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICBjb25zdCBmdW5jdGlvblBpY2tlciA9IHBpY2tCeSgodikgPT4gaXNGdW5jdGlvbih2KSk7XG4gIGNvbnN0IHNjYWxhclBpY2tlciA9IHBpY2tCeSgodikgPT4gIWlzRnVuY3Rpb24odikpO1xuXG4gIGNvbnN0IHtzdHlsZSwgdGV4dENvbnRlbnR9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgYXR0cnMgPSBvbWl0KFsnc3R5bGUnLCAndGV4dENvbnRlbnQnXSwgYXR0cmlidXRlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBib3VuZEF0dHJpYnV0ZXM6IHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZ1bmN0aW9uUGlja2VyKGF0dHJzKSxcbiAgICAgIHN0eWxlOiBmdW5jdGlvblBpY2tlcihzdHlsZSB8fCB7fSksXG4gICAgICB0ZXh0Q29udGVudDogaXNGdW5jdGlvbih0ZXh0Q29udGVudCkgPyB0ZXh0Q29udGVudCA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgY29uc3RhbnRBdHRyaWJ1dGVzOiB7XG4gICAgICBhdHRyaWJ1dGVzOiBzY2FsYXJQaWNrZXIoYXR0cnMpLFxuICAgICAgc3R5bGU6IHNjYWxhclBpY2tlcihzdHlsZSB8fCB7fSlcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogaXQncyBkdW1teSBpbXBsZW1lbnRhdGlvblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBzcGxpdEJ5SGFzaCA9IHNlbGVjdG9yLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHNwbGl0QnlEb3RzID0gc3BsaXRCeUhhc2hbMF0uc3BsaXQoJy4nKTtcbiAgY29uc3QgdGFnTmFtZSA9IHNwbGl0QnlEb3RzWzBdID09PSAnJyA/ICdkaXYnIDogc3BsaXRCeURvdHNbMF07XG4gIGNvbnN0IGNsYXNzTGlzdCA9IHNwbGl0QnlEb3RzLnNsaWNlKDEpO1xuICByZXR1cm4ge3RhZ05hbWUsIGNsYXNzTGlzdCwgaWQ6IHNwbGl0QnlIYXNoWzFdIHx8IG51bGx9O1xufVxuXG5jb25zdCBwYXJzZUNoaWxkcmVuID0gKGNoaWxkcmVuKSA9PiAoe1xuICBib3VuZENoaWxkcmVuOiBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiAhaXNWTm9kZShjaGlsZCkpLFxuICBjb25zdGFudENoaWxkcmVuOiBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiBpc1ZOb2RlKGNoaWxkKSksXG4gIHRleHRDaGlsZHJlbjogY2hpbGRyZW4uZmlsdGVyKGlzKFN0cmluZykpXG59KTtcblxuLyoqXG4gKiBoeXBlcnNjcmlwdCBpbnNwaXJlZCB2aXJ0dWFsIG5vZGUgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIHVzZWQgZm9yIGRhdGEgYmluZGluZyBhbmQvb3IgY29uc3RydWN0aW5nIG5vZGVcbiAqICB1c2UgY3NzIHNlbGVjdG9ycyBzeW50YXhcbiAqICBjdXJyZW50bHkgc2hvdWxkIGhhdmUgcHJvcGVyIG9yZGVyLCBpLmUuIHRhZ25hbWUsIGNsYXNzbGlzdCwgaWRcbiAqICBleGFtcGxlczogZGl2OyBkaXYuY2xhc3NOYW1lLm90aGVyQ2xhc3M7IGRpdi5jbGFzcyNpZDsgZGl2I2lkO1xuICogQHBhcmFtIGF0dHJpYnV0ZXMgT3B0aW9uYWwgb2JqZWN0IHJlcHJlc2VudGluZyBub2RlIGF0dHJpYnV0ZXNcbiAqICBkdWUgdG8gZDMgbmF0dXJlLCBhdHRyaWJ1dGVzIGNvdWxkIGJlIGZ1bmN0aW9ucyBvZlxuICogIGRhdGEgLT4gaW5kZXggLT4gYXR0clZhbHVlIGZvcm1cbiAqICBtYXAga2V5cyBzaG91bGQgcmVwcmVzZW50IERPTSBhdHRyaWJ1dGUgbmFtZXNcbiAqICBhbHNvLCAndGV4dENvbnRlbnQnIGF0dHJpYnV0ZSBpcyBzdXBwb3J0ZWQgZm9yIHJlcHJlc2VudGluZyBkeW5hbWljIGNvbnRlbnQgb2Ygbm9kZVxuICogQHBhcmFtIFtjb250ZW50XSBDaGlsZHJlbiBvZiBub2RlLlxuICogIFN0cmluZ3Mgd2lsbCBiZSBjb25jYXRlbmF0ZWQgYW5kIGluc2VydGVkIGFzIHRleHQgbm9kZVxuICogIHZOb2RlIGRlZmluaXRpb25zIHdpbGwgYmUgc3RhdGljIGNoaWxkcmVuXG4gKiAgZnVuY3Rpb25zIG9mIHBhcmVudCBzZWxlY3Rpb24gd2lsbCBiZSBldmFsdWF0ZWQgZHluYW1pY2FsbHlcbiAqIEByZXR1cm5zIHtWTm9kZX0gdk5vZGUgZGVmaW5pdGlvblxuICovXG5leHBvcnQgY29uc3QgaCA9IChzZWxlY3RvciwgYXR0cmlidXRlcywgLi4uY29udGVudCkgPT4ge1xuICBjb25zdCBoYXNBdHRycyA9ICFpc0Z1bmN0aW9uKGF0dHJpYnV0ZXMpICYmICFpc1ZOb2RlKGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbmV3IFZOb2RlKFxuICAgIHNlbGVjdG9yLFxuICAgIGhhc0F0dHJzID8gYXR0cmlidXRlcyA6IHt9LFxuICAgIGhhc0F0dHJzID8gY29udGVudCA6IFthdHRyaWJ1dGVzLCAuLi5jb250ZW50XSk7XG59O1xuIl19