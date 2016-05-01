'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

/**
 * helper for creating optional enter/exit transitions for joins
 *
 * @param attrs Object, where keys are animated node attributes and
 *  values are arrays of two - start and end values of attribute transition
 * @param duration duration of transition
 */

exports.default = function (attrs, duration) {
  return {
    enterTransform: function enterTransform(sel) {
      return sel.transition().duration(duration).attr((0, _ramda.map)((0, _ramda.nth)(1), attrs));
    },

    exitTransform: function exitTransform(sel) {
      return sel.transition().duration(duration).attr((0, _ramda.map)((0, _ramda.nth)(0), attrs));
    } };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2l0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7O2tCQVNlLFVBQUMsS0FBRCxFQUFRLFFBQVI7U0FBc0I7QUFDbkMsb0JBQWdCLHdCQUFDLEdBQUQ7YUFDZCxJQUNHLFVBREgsR0FFRyxRQUZILENBRVksUUFGWixFQUdHLElBSEgsQ0FHUSxnQkFBSSxnQkFBSSxDQUFKLENBQUosRUFBWSxLQUFaLENBSFI7S0FEYzs7QUFNaEIsbUJBQWUsdUJBQUMsR0FBRDthQUNiLElBQ0csVUFESCxHQUVHLFFBRkgsQ0FFWSxRQUZaLEVBR0csSUFISCxDQUdRLGdCQUFJLGdCQUFJLENBQUosQ0FBSixFQUFZLEtBQVosQ0FIUjtLQURhO0NBUEYiLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFwLCBudGh9IGZyb20gJ3JhbWRhJztcblxuLyoqXG4gKiBoZWxwZXIgZm9yIGNyZWF0aW5nIG9wdGlvbmFsIGVudGVyL2V4aXQgdHJhbnNpdGlvbnMgZm9yIGpvaW5zXG4gKlxuICogQHBhcmFtIGF0dHJzIE9iamVjdCwgd2hlcmUga2V5cyBhcmUgYW5pbWF0ZWQgbm9kZSBhdHRyaWJ1dGVzIGFuZFxuICogIHZhbHVlcyBhcmUgYXJyYXlzIG9mIHR3byAtIHN0YXJ0IGFuZCBlbmQgdmFsdWVzIG9mIGF0dHJpYnV0ZSB0cmFuc2l0aW9uXG4gKiBAcGFyYW0gZHVyYXRpb24gZHVyYXRpb24gb2YgdHJhbnNpdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoYXR0cnMsIGR1cmF0aW9uKSA9PiAoe1xuICBlbnRlclRyYW5zZm9ybTogKHNlbCkgPT5cbiAgICBzZWxcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgIC5hdHRyKG1hcChudGgoMSksIGF0dHJzKSksXG5cbiAgZXhpdFRyYW5zZm9ybTogKHNlbCkgPT5cbiAgICBzZWxcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgIC5hdHRyKG1hcChudGgoMCksIGF0dHJzKSl9KTtcbiJdfQ==