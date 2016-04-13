import {pipe} from 'ramda';

/**
 * threads value x through all functions fns
 * a -> (a -> b) -> (b -> c) -> ... -> (y -> z) -> z
 * @param x starting value
 * @param fns functions transforming x in order
 */
export default (x, ...fns) => pipe(...fns)(x);
