import {
  always,
  complement,
  either,
  filter,
  is,
  pickBy,
  omit,
  pipe,
  prop,
  reject,
  unless
} from 'ramda';
import thread from './thread';

// TODO: it's dummy implementation
function parseSelector(selector) {
  const splitByHash = selector.split('#');
  const splitByDots = splitByHash[0].split('.');
  const tagName = splitByDots[0] === '' ? 'div' : splitByDots[0];
  const classList = splitByDots.slice(1);
  return {tagName, classList, id: splitByHash[1] || null};
}

/**
 * hyperscript inspired virtual node constructor
 *
 * @param selector Selector string used for data binding and/or constructing node
 *  use css selectors syntax
 *  currently should have proper order, i.e. tagname, classlist, id
 *  examples: div; div.className.otherClass; div.class#id; div#id;
 * @param attributes Object representing node attributes
 *  due to d3 nature, attributes could be functions of
 *  data -> index -> attrValue form
 *  map keys should represent DOM attribute names
 *  also, 'textContent' attribute is supported for representing dynamic content of node
 * @param [children] Children of node.
 *  Strings will be concatenated and inserted as text node
 *  vNode definitions will be static children
 *  functions of parent selection will be evaluated dynamically
 * @returns {Object} vNode definition
 */
export const h = (selector, attributes = {}, ...children) => ({
  selector,
  ...parseSelector(selector),
  attributes,
  children
});

const isFn = is(Function);
const isStr = is(String);
const isScalar = complement(isFn);
const nil = always(null);

const functionPicker = pickBy(isFn);
const functionOrNil = unless(isFn, nil);

const scalarPicker = pickBy(isScalar);
const scalarOrNill = unless(isScalar, nil);

const attributes = prop('attributes');
const textContentKey = 'textContent';
const styleKey = 'style';

export const boundAttributes = pipe(
  attributes,
  omit([styleKey, textContentKey]),
  functionPicker);

export const boundStyle = pipe(
  attributes,
  prop(styleKey),
  functionOrNil);

export const boundTextContent = pipe(
  attributes,
  prop(textContentKey),
  functionOrNil);

export const constantAttributes = pipe(
  attributes,
  omit([styleKey, textContentKey]),
  scalarPicker);

export const constantStyle = pipe(
  attributes,
  prop(styleKey),
  scalarOrNill);

const children = prop('children');

export const boundChildren = pipe(
  children,
  filter(isFn));

export const constantChildren = pipe(
  children,
  reject(either(isFn, isStr)));

export const textChildren = pipe(
  children,
  filter(isStr));

