import {compose, curryN} from 'ramda';
import {
  call as d3call,
  classed as d3classed,
  on as d3on,
  order as d3order,
  sort as d3sort
} from 'd3-fun';

/**
 * call combinator - composes transformation with d3 call method
 * @param {Function} fn Function to be called on resulting selection
 * @param {Function} xf Transformation to be composed at
 */
export const call = curryN(2,
  (fn, xf) => compose(d3call(fn), xf));

/**
 * variable argument length call combinator - composes selection transformation with d3 call method
 *   accepts variable number of arguments (is not curried because of this)
 * @param {Function} fn Function to be called on resulting selection
 * @param {any[]} args array of passed arguments to function fn
 */
export const callv = (fn, ...args) =>
  (xf) =>
    (selection) =>
      xf(selection).call(fn, ...args);

/**
 * on combinator - composes transformation with registering handler on event
 * @param {String} event Event name
 * @param {Function} handler Handler function for event
 * @param {Function} xf Transformation to be composed
 */
export const on = curryN(3,
  (event, handler, xf) => compose(d3on(event, handler), xf));

/**
 * classed combinator - composes transformation with setting class value
 * @param {String} classList
 * @param {Function|Boolean} value
 * @param {Function} xf Transformation to be composed
 */
export const classed = curryN(3,
  (classList, value, xf) => compose(d3classed(classList, value), xf));

/**
 * order combinator - composes transformation with ordering selection
 * @param {Function} xf Transformation to be composed
 */
export const order = (xf) => compose(d3order, xf);

/**
 * sort combinator - composes transformation with sorting selection
 * @param {Function} comparator Comparator function used to sort elements in selection
 * @param {Function} xf Transformation to be composed
 */
export const sort = curryN(2,
  (comparator, xf) => compose(d3sort(comparator), xf));
