'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.text = exports.style = exports.attr2 = exports.attr = exports.classed = exports.append = exports.exit = exports.enter = exports.data2 = exports.data = exports.selectAll = undefined;

var _ramda = require('ramda');

// Export d3 selection methods as invokers for proper function composition
var selectAll = exports.selectAll = (0, _ramda.invoker)(1, 'selectAll');
var data = exports.data = (0, _ramda.invoker)(1, 'data');
var data2 = exports.data2 = (0, _ramda.invoker)(2, 'data');
var enter = exports.enter = (0, _ramda.invoker)(0, 'enter');
var exit = exports.exit = (0, _ramda.invoker)(0, 'exit');
var append = exports.append = (0, _ramda.invoker)(1, 'append');
var classed = exports.classed = (0, _ramda.invoker)(2, 'classed');
var attr = exports.attr = (0, _ramda.invoker)(1, 'attr');
var attr2 = exports.attr2 = (0, _ramda.invoker)(2, 'attr');
var style = exports.style = (0, _ramda.invoker)(1, 'style');
var text = exports.text = (0, _ramda.invoker)(1, 'text');
var remove = exports.remove = (0, _ramda.invoker)(0, 'remove');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kMy1mdW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHTyxJQUFNLGdDQUFZLG9CQUFRLENBQVIsRUFBVyxXQUFYLENBQVo7QUFDTixJQUFNLHNCQUFPLG9CQUFRLENBQVIsRUFBVyxNQUFYLENBQVA7QUFDTixJQUFNLHdCQUFRLG9CQUFRLENBQVIsRUFBVyxNQUFYLENBQVI7QUFDTixJQUFNLHdCQUFRLG9CQUFRLENBQVIsRUFBVyxPQUFYLENBQVI7QUFDTixJQUFNLHNCQUFPLG9CQUFRLENBQVIsRUFBVyxNQUFYLENBQVA7QUFDTixJQUFNLDBCQUFTLG9CQUFRLENBQVIsRUFBVyxRQUFYLENBQVQ7QUFDTixJQUFNLDRCQUFVLG9CQUFRLENBQVIsRUFBVyxTQUFYLENBQVY7QUFDTixJQUFNLHNCQUFPLG9CQUFRLENBQVIsRUFBVyxNQUFYLENBQVA7QUFDTixJQUFNLHdCQUFRLG9CQUFRLENBQVIsRUFBVyxNQUFYLENBQVI7QUFDTixJQUFNLHdCQUFRLG9CQUFRLENBQVIsRUFBVyxPQUFYLENBQVI7QUFDTixJQUFNLHNCQUFPLG9CQUFRLENBQVIsRUFBVyxNQUFYLENBQVA7QUFDTixJQUFNLDBCQUFTLG9CQUFRLENBQVIsRUFBVyxRQUFYLENBQVQiLCJmaWxlIjoiZDMtZnVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbnZva2VyfSBmcm9tICdyYW1kYSc7XG5cbi8vIEV4cG9ydCBkMyBzZWxlY3Rpb24gbWV0aG9kcyBhcyBpbnZva2VycyBmb3IgcHJvcGVyIGZ1bmN0aW9uIGNvbXBvc2l0aW9uXG5leHBvcnQgY29uc3Qgc2VsZWN0QWxsID0gaW52b2tlcigxLCAnc2VsZWN0QWxsJyk7XG5leHBvcnQgY29uc3QgZGF0YSA9IGludm9rZXIoMSwgJ2RhdGEnKTtcbmV4cG9ydCBjb25zdCBkYXRhMiA9IGludm9rZXIoMiwgJ2RhdGEnKTtcbmV4cG9ydCBjb25zdCBlbnRlciA9IGludm9rZXIoMCwgJ2VudGVyJyk7XG5leHBvcnQgY29uc3QgZXhpdCA9IGludm9rZXIoMCwgJ2V4aXQnKTtcbmV4cG9ydCBjb25zdCBhcHBlbmQgPSBpbnZva2VyKDEsICdhcHBlbmQnKTtcbmV4cG9ydCBjb25zdCBjbGFzc2VkID0gaW52b2tlcigyLCAnY2xhc3NlZCcpO1xuZXhwb3J0IGNvbnN0IGF0dHIgPSBpbnZva2VyKDEsICdhdHRyJyk7XG5leHBvcnQgY29uc3QgYXR0cjIgPSBpbnZva2VyKDIsICdhdHRyJyk7XG5leHBvcnQgY29uc3Qgc3R5bGUgPSBpbnZva2VyKDEsICdzdHlsZScpO1xuZXhwb3J0IGNvbnN0IHRleHQgPSBpbnZva2VyKDEsICd0ZXh0Jyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlID0gaW52b2tlcigwLCAncmVtb3ZlJyk7XG4iXX0=