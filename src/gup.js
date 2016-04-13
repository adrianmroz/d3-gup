import {h} from './vnode';
import {curry, identity, is} from 'ramda';
import {
  selectAll,
  data,
  data2,
  enter,
  exit,
  append,
  classed,
  attr,
  attr2,
  style,
  text,
  remove
} from './d3-fun';
import thread from './thread';

const setSelector = curry(
  (vNode, selection) => thread(
    selection,
    classed(vNode.getClassList().join(' '), true),
    attr2('id', vNode.getId())
  )
);

const appendVNode = (vNode) =>
  (selection) =>
    thread(
      selection,
      append(vNode.getTagName()),
      attr(vNode.getConstantAttributes()),
      style(vNode.getConstantStyles()),
      text(vNode.getTextChildren().join(''))
    );

const _join =
  (dataFn, vNode, {enterTransform = identity, exitTransform = identity} = {}) =>
    function(parent) {
      const selection = thread(
        parent,
        selectAll(vNode.getSelector()),
        dataFn
      );

      const enterSelection = thread(
        selection,
        enter,
        appendVNode(vNode),
        setSelector(vNode)
      );

      enterTransform(enterSelection);

      thread(
        selection,
        attr(vNode.getBoundAttributes()),
        style(vNode.getBoundStyles()),
        text(vNode.getBoundTextContent())
      );

      vNode.getConstantChildren()
        .forEach((child) =>
          thread(
            enterSelection,
            appendVNode(child),
            setSelector(child)
          )
        );

      vNode.getBoundChildren()
        .forEach((child) => child(selection));

      thread(
        selection,
        exit,
        exitTransform,
        remove
      );

      return selection;
    };

/**
 * Joins data with vNode definition.
 * @param nodeData Data for join. Accepts any type that could be handled by d3
 * @param vNode Node definition representing join
 * @param xf Optional definition of enter/exit selections transformations
 */
export const join = (nodeData, vNode, xf) =>
  _join(data(nodeData), vNode, xf);

/**
 * Joins data with vNode definition using data keySelector
 * @param nodeData Data for join. Accepts any type that could be handled by d3
 * @param keySelector Function used by d3 to join data elements with nodes
 * @param vNode Node definition representing join
 * @param xf Optional definition of enter/exit selections transformations
 */
export const join2 = (nodeData, keySelector, vNode, xf) =>
  _join(data2(nodeData, keySelector), vNode, xf);

/**
 * Runs in sequence functions on d3 selection
 * D3Selection -> (D3Selection -> a) -> (D3Selection -> b) ...
 * @param parent D3Selection representing parent node
 * @param fns Functions of D3Selection to run
 */
export const gup = (parent, ...fns) =>
  fns.forEach((fn) => fn(parent));

