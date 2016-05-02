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
  identity,
  isNil,
  is,
  pipe,
  prop
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


const setSelector = (vNode) => pipe(
  classed(prop('classList', vNode).join(' '), true),
  attr2('id', prop('id', vNode))
);

const appendVNode = (vNode) => append(prop('tagName', vNode));

const insertNode = (vNode, insertSelector) => insert(prop('tagName', vNode), insertSelector);

const setConstantProps = (vNode) => pipe(
  attr(constantAttributes(vNode)),
  style(constantStyle(vNode)),
  text(textChildren(vNode).join('')));

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
        is(Function, keySelector) ? data2(joinData, keySelector) : data(joinData)
      );

      const enterSelection = thread(
        selection,
        enter,
        is(String, insertSelector) ? insertNode(vNode, insertSelector) : appendVNode(vNode),
        setConstantProps(vNode),
        setSelector(vNode)
      );

      enterTransform(enterSelection);

      thread(
        selection,
        attr(boundAttributes(vNode)),
        style(boundStyle(vNode)),
        updateTransform
      );

      const textContent = boundTextContent(vNode);
      if(!isNil(textContent)) {
        text(textContent, selection);
      }

      constantChildren(vNode)
        .forEach((child) =>
          thread(
            enterSelection,
            appendVNode(child),
            setConstantProps(child),
            setSelector(child)
          )
        );

      boundChildren(vNode)
        .forEach((child) => child(selection));

      thread(
        selection,
        exit,
        exitTransform,
        remove
      );

      return selection;
    };

