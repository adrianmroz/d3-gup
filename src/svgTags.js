import {h} from './vnode';

export const clipPath = (selector, attrs, ...children) =>
  h(`clipPath${selector}`, attrs, ...children);

export const ellipse = (selector, attrs, ...children) =>
  h(`ellipse${selector}`, attrs, ...children);

export const g = (selector, attrs, ...children) =>
  h(`g${selector}`, attrs, ...children);

export const line = (selector, attrs, ...children) =>
  h(`line${selector}`, attrs, ...children);

export const path = (selector, attrs, ...children) =>
  h(`path${selector}`, attrs, ...children);

export const rect = (selector, attrs, ...children) =>
  h(`rect${selector}`, attrs, ...children);

export const text = (selector, attrs, ...children) =>
  h(`text${selector}`, attrs, ...children);

export const tspan = (selector, attrs, ...children) =>
  h(`tspan${selector}`, attrs, ...children);

