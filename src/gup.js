import {of, curry} from 'ramda';
import thread from './thread';
import join from './join';

/**
 * Runs in sequence functions on d3 selection
 * D3Selection -> (D3Selection -> a) -> (D3Selection -> b) ...
 * @param {D3Selection} parent - selection representing parent node
 * @param {Function[]} xfs  - Transformations of D3Selection to run
 */
export const gupAll = (parent, ...xfs) =>
  xfs.forEach((fn) => fn(parent));

/**
 * Calls selection transformation on D3Selection and returns outcome
 * @param {D3Selection} parent - selection representing parent node
 * @param {Function} xf - Transformation of D3Selection
 */
export const gup = curry((parent, xf) => xf(parent));

/**
 * Creates new join representing nesting vNode inside parent. Uses (d) => [d] pattern
 * @param {Object} vNode - Node definition representing join
 * @param {Object} options - Options for join
 */
export const nest = (vNode, options) =>
  join(of, vNode, options);
