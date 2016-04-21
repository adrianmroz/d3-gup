import {is, pickBy, omit, isNil} from 'ramda';

class VNode {
  constructor(selector, attributes = {}, children = []) {
    Object.assign(this,
      {selector},
      parseSelector(selector),
      parseAttributes(attributes),
      parseChildren(children)
    );
  }

  getTagName() {
    return this.tagName;
  }

  getSelector() {
    return this.selector;
  }

  getId() {
    return this.id;
  }

  getClassList() {
    return this.classList;
  }

  getConstantAttributes() {
    return this.constantAttributes.attributes;
  }

  getBoundAttributes() {
    return this.boundAttributes.attributes;
  }

  getConstantStyles() {
    return this.constantAttributes.style;
  }

  getBoundStyles() {
    return this.boundAttributes.style;
  }

  getBoundTextContent() {
    return this.boundAttributes.textContent;
  }

  getConstantChildren() {
    return this.constantChildren;
  }

  getBoundChildren() {
    return this.boundChildren;
  }

  getTextChildren() {
    return this.textChildren;
  }
}

const isVNode = is(VNode);
const isFunction = is(Function);
const isString = is(String);
const isChild = (value) => isVNode(value) || isFunction(value) || isString(value);

function parseAttributes(attributes) {
  const functionPicker = pickBy((v) => isFunction(v));
  const scalarPicker = pickBy((v) => !isFunction(v));

  const {style, textContent} = attributes;
  const attrs = omit(['style', 'textContent'], attributes);

  return {
    boundAttributes: {
      attributes: functionPicker(attrs),
      style: functionPicker(style || {}),
      textContent: isFunction(textContent) ? textContent : undefined
    },
    constantAttributes: {
      attributes: scalarPicker(attrs),
      style: scalarPicker(style || {})
    }
  }
}

// TODO: it's dummy implementation
function parseSelector(selector) {
  const splitByHash = selector.split('#');
  const splitByDots = splitByHash[0].split('.');
  const tagName = splitByDots[0] === '' ? 'div' : splitByDots[0];
  const classList = splitByDots.slice(1);
  return {tagName, classList, id: splitByHash[1] || null};
}

const parseChildren = (children) => ({
  boundChildren: children.filter((child) => !isVNode(child) && !isString(child)),
  constantChildren: children.filter((child) => isVNode(child)),
  textChildren: children.filter(isString)
});

/**
 * hyperscript inspired virtual node constructor
 *
 * @param selector Selector string used for data binding and/or constructing node
 *  use css selectors syntax
 *  currently should have proper order, i.e. tagname, classlist, id
 *  examples: div; div.className.otherClass; div.class#id; div#id;
 * @param attributes Optional object representing node attributes
 *  due to d3 nature, attributes could be functions of
 *  data -> index -> attrValue form
 *  map keys should represent DOM attribute names
 *  also, 'textContent' attribute is supported for representing dynamic content of node
 * @param [content] Children of node.
 *  Strings will be concatenated and inserted as text node
 *  vNode definitions will be static children
 *  functions of parent selection will be evaluated dynamically
 * @returns {VNode} vNode definition
 */
export const h = (selector, attributes, ...content) => {
  if (isNil(attributes)) {
    return new VNode(selector);
  }
  if(isChild(attributes)) {
    return new VNode(selector, {}, [attributes, ...content]);
  }
  return new VNode(selector, attributes, content)
};
