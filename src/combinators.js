import {compose, curryN} from 'ramda';
import {call as d3call, on as d3on, order as d3order, sort as d3sort} from 'd3-fun';

/**
 * call combinator - composes join with d3 call method
 * @param fn Function to be called on resulting selection
 * @param join join to be composed at
 */
export const call = curryN(2,
  (fn, join) => compose(d3call(fn), join));

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
  (event, handler, join) => compose(d3on(event, handler), join));

const parallelClassed = (classDefinitions) =>
  (selection) =>
    Object.keys(classDefinitions)
      .reduce((className, node) =>
        node.classed(className, classDefinitions[className]), selection);

/**
 * classed combinator - composes join with setting class value
 * @param classDefinition Object
 *    keys are classNames, values are d3 classed function value attribute, bool or data -> bool
 * @param join Join to be composed
 */
export const classed = curryN(2,
  (classDefinition, join) => compose(parallelClassed(classDefinition), join));

/**
 * order combinator - composes join with ordering selection
 * @param join
 */
export const order = (join) => compose(d3order, join);

/**
 * sort combinator - composes join with sorting selection
 * @param comparator Comparator function used to sort elements in selection
 * @param join
 */
export const sort = curryN(2,
  (comparator, join) => compose(d3sort(comparator), join));
