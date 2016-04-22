import {invoker} from 'ramda';

// Export d3 selection methods as invokers for proper function composition
export const selectAll = invoker(1, 'selectAll');
export const data = invoker(1, 'data');
export const data2 = invoker(2, 'data');
export const enter = invoker(0, 'enter');
export const exit = invoker(0, 'exit');
export const append = invoker(1, 'append');
export const classed = invoker(2, 'classed');
export const attr = invoker(1, 'attr');
export const attr2 = invoker(2, 'attr');
export const style = invoker(1, 'style');
export const text = invoker(1, 'text');
export const remove = invoker(0, 'remove');
export const call = invoker(1, 'call');
export const on = invoker(2, 'on');
export const order = invoker(0, 'order');
export const sort = invoker(1, 'sort');
