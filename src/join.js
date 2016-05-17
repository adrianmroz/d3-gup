import {
  append,
  attr,
  attr2,
  classed,
  data,
  data2,
  enter,
  exit,
  remove,
  style,
  selectAll,
  text
} from './d3-fun';

import {
  always,
  forEach,
  identity,
  isNil,
  is,
  join,
  partialRight,
  pipe,
  prop,
  uncurryN,
  unless
} from 'ramda';

import {
  boundAttributes,
  boundChildren,
  boundStyle,
  boundTextContent,
  constantAttributes,
  constantChildren,
  constantStyle,
  textChildren
} from './vnode';

import thread from './thread';

const dataFn = (joinData, keySelector) =>
  is(Function, keySelector) ? data2(joinData, keySelector) : data(joinData);

const setConstantProps = (vNode) => pipe(
  classed(join(' ', prop('classList', vNode)), true),
  attr2('id', prop('id', vNode)),
  attr(constantAttributes(vNode)),
  style(constantStyle(vNode)),
  text(join('', textChildren(vNode))));

const tagName = prop('tagName');
const addNode = (vNode, insertSelector) =>
  is(String, insertSelector) ? insert(tagName(vNode), insertSelector) : append(tagName(vNode));

const introduceNode = uncurryN(3, (vNode, insertSelector) => pipe(
  addNode(vNode, insertSelector),
  setConstantProps(vNode)));

/**
 * Joins data with vNode definition.
 * @param {Array|Function} joinData  - Data for join. Accepts any type that could be handled by d3
 * @param {Object} vNode - Node definition representing join
 * @param {Object} Options
 *   @param {Function} enterTransform  - transformation on enter selection
 *   @param {Function} exitTransform - transformation on exit selection
 *   @param {Function} updateTransform - transformation on update selection
 *   @param {Function} keySelector - function passed as data selector
 *   @param {String} insertSelector - css selector for inserting element on enter
 */
export default (joinData, vNode, {
  enterTransform = identity,
  exitTransform = identity,
  updateTransform = identity,
  keySelector = null,
  insertSelector = null
  } = {}) =>
  function(parent) {
    const selection = thread(
      parent,
      selectAll(prop('selector', vNode)),
      dataFn(joinData, keySelector));

    const enterSelection = thread(
      selection,
      enter,
      introduceNode(vNode, insertSelector),
      enterTransform);

    thread(
      selection,
      attr(boundAttributes(vNode)),
      style(boundStyle(vNode)),
      unless(always(isNil(boundTextContent(vNode))), text(boundTextContent(vNode))),
      updateTransform);

    thread(
      vNode,
      constantChildren,
      forEach(partialRight(introduceNode, [null, enterSelection])));

    thread(
      vNode,
      boundChildren,
      forEach(child => child(selection)));

    thread(
      selection,
      exit,
      exitTransform,
      remove);

    return selection;
  };

