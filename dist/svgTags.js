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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdmdUYWdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNLDhCQUFXLFNBQVgsUUFBVyxDQUFDLFFBQUQsRUFBVyxLQUFYO29DQUFxQjs7OztTQUMzQyx3Q0FBYSxVQUFZLGNBQVUsU0FBbkM7Q0FEc0I7O0FBR2pCLElBQU0sNEJBQVUsU0FBVixPQUFVLENBQUMsUUFBRCxFQUFXLEtBQVg7cUNBQXFCOzs7O1NBQzFDLHVDQUFZLFVBQVksY0FBVSxTQUFsQztDQURxQjs7QUFHaEIsSUFBTSxnQkFBSSxTQUFKLENBQUksQ0FBQyxRQUFELEVBQVcsS0FBWDtxQ0FBcUI7Ozs7U0FDcEMsaUNBQU0sVUFBWSxjQUFVLFNBQTVCO0NBRGU7O0FBR1YsSUFBTSxzQkFBTyxTQUFQLElBQU8sQ0FBQyxRQUFELEVBQVcsS0FBWDtxQ0FBcUI7Ozs7U0FDdkMsb0NBQVMsVUFBWSxjQUFVLFNBQS9CO0NBRGtCOztBQUdiLElBQU0sc0JBQU8sU0FBUCxJQUFPLENBQUMsUUFBRCxFQUFXLEtBQVg7cUNBQXFCOzs7O1NBQ3ZDLG9DQUFTLFVBQVksY0FBVSxTQUEvQjtDQURrQjs7QUFHYixJQUFNLHNCQUFPLFNBQVAsSUFBTyxDQUFDLFFBQUQsRUFBVyxLQUFYO3FDQUFxQjs7OztTQUN2QyxvQ0FBUyxVQUFZLGNBQVUsU0FBL0I7Q0FEa0I7O0FBR2IsSUFBTSxzQkFBTyxTQUFQLElBQU8sQ0FBQyxRQUFELEVBQVcsS0FBWDtxQ0FBcUI7Ozs7U0FDdkMsb0NBQVMsVUFBWSxjQUFVLFNBQS9CO0NBRGtCOztBQUdiLElBQU0sd0JBQVEsU0FBUixLQUFRLENBQUMsUUFBRCxFQUFXLEtBQVg7cUNBQXFCOzs7O1NBQ3hDLHFDQUFVLFVBQVksY0FBVSxTQUFoQztDQURtQiIsImZpbGUiOiJzdmdUYWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtofSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNvbnN0IGNsaXBQYXRoID0gKHNlbGVjdG9yLCBhdHRycywgLi4uY2hpbGRyZW4pID0+XG4gIGgoYGNsaXBQYXRoJHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgZWxsaXBzZSA9IChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PlxuICBoKGBlbGxpcHNlJHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgZyA9IChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PlxuICBoKGBnJHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgbGluZSA9IChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PlxuICBoKGBsaW5lJHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgcGF0aCA9IChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PlxuICBoKGBwYXRoJHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgcmVjdCA9IChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PlxuICBoKGByZWN0JHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgdGV4dCA9IChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PlxuICBoKGB0ZXh0JHtzZWxlY3Rvcn1gLCBhdHRycywgLi4uY2hpbGRyZW4pO1xuXG5leHBvcnQgY29uc3QgdHNwYW4gPSAoc2VsZWN0b3IsIGF0dHJzLCAuLi5jaGlsZHJlbikgPT5cbiAgaChgdHNwYW4ke3NlbGVjdG9yfWAsIGF0dHJzLCAuLi5jaGlsZHJlbik7XG5cbiJdfQ==