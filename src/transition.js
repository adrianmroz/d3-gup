import {map, nth} from 'ramda';

/**
 * helper for creating optional enter/exit transitions for joins
 *
 * @param attrs Object, where keys are animated node attributes and
 *  values are arrays of two - start and end values of attribute transition
 * @param duration duration of transition
 */
export default (attrs, duration) => ({
  enterTransform: (sel) =>
    sel
      .transition()
      .duration(duration)
      .attr(map(nth(1), attrs)),

  exitTransform: (sel) =>
    sel
      .transition()
      .duration(duration)
      .attr(map(nth(0), attrs))});
