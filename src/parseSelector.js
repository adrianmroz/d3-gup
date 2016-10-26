function buildSelector(selector, match) {
  switch(match.substring(0, 1)) {
    case '.':
      return {...selector, classList: [...selector.classList, match.substring(1)]};
    case '#':
      return {...selector, id: match.substring(1)};
    default:
      return {...selector, tag: match};
  }
}

const defaultSelector = {id: null, tag: 'div', classList: []};

export default function parseSelector(selector) {
  const selectorParts = selector.match(/(\.|#)?[_a-zA-Z]+[_a-zA-Z0-9-]*/g);
  if(selectorParts === null) {
    return defaultSelector;
  }
  return selectorParts.reduce(buildSelector, defaultSelector);
}
