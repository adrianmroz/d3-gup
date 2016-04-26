import {curryN} from 'ramda';

/**
 * call combinator - composes join with d3 call method
 * @param fn Function to be called on resulting selection
 * @param join join to be composed at
 */
export const call = curryN(2,
  (fn, join) =>
    (selection) =>
      join(selection).call(fn));

/**
 * variable argument length call combinator - composes selection transformation with d3 call method
 *   accepts variable number of arguments (is not curried because of this)
 * @param fn Function to be called on resulting selection
 * @param args array of passed arguments to function fn
 */
export const callv = (fn, ...args) =>
  (xf) =>
    (selection) =>
      xf(selection).call(fn, ...args);

/**
 * on combinator - composes join with registering handler on event
 * @param event Event name
 * @param handler Handler function for event
 * @param join Join to be composed
 */
export const on = curryN(3,
  (event, handler, join) =>
    (selection) =>
      join(selection).on(event, handler));

/**
 * classed combinator - composes join with setting class value
 * @param classList String representing classes of element to be changed
 * @param value d3 classed function value attribute, bool or data -> bool
 * @param join Join to be composed
 */
export const classed = curryN(3,
  (classList, value, join) =>
    (selection) =>
      join(selection).classed(classList, value));

/**
 * order combinator - composes join with ordering selection
 * @param join
 */
export const order = (join) =>
  (selection) =>
    join(selection).order();

/**
 * sort combinator - composes join with sorting selection
 * @param comparator Comparator function used to sort elements in selection
 * @param join
 */
export const sort = curryN(2,
  (comparator, join) =>
    (selection) =>
      join(selection).sort(comparator));
