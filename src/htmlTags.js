import {h} from './vnode';

export const a = (selector, attrs, ...children) =>
  h(`a${selector}`, attrs, ...children);

export const div = (selector, attrs, ...children) =>
  h(`div${selector}`, attrs, ...children);

export const h1 = (selector, attrs, ...children) =>
  h(`h1${selector}`, attrs, ...children);

export const h2 = (selector, attrs, ...children) =>
  h(`h2${selector}`, attrs, ...children);

export const h3 = (selector, attrs, ...children) =>
  h(`h3${selector}`, attrs, ...children);

export const h4 = (selector, attrs, ...children) =>
  h(`h4${selector}`, attrs, ...children);

export const h5 = (selector, attrs, ...children) =>
  h(`h5${selector}`, attrs, ...children);

export const h6 = (selector, attrs, ...children) =>
  h(`h6${selector}`, attrs, ...children);

export const li = (selector, attrs, ...children) =>
  h(`li${selector}`, attrs, ...children);

export const ol = (selector, attrs, ...children) =>
  h(`ol${selector}`, attrs, ...children);

export const p = (selector, attrs, ...children) =>
  h(`p${selector}`, attrs, ...children);

export const span = (selector, attrs, ...children) =>
  h(`span${selector}`, attrs, ...children);

export const ul = (selector, attrs, ...children) =>
  h(`ul${selector}`, attrs, ...children);
