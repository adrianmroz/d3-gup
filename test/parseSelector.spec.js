import {expect} from 'chai';

import parseSelector from '../src/parseSelector';

describe('parse-selector test', function() {
  it('should return default selector when empty', function() {
    expect(parseSelector('')).to.be.deep.equal({id: null, tag: 'div', classList: []});
  });

  it('should parse tagname', function() {
    expect(parseSelector('span')).to.be.deep.equal({id: null, classList: [], tag: 'span'});
  });

  it('should parse id', function() {
    expect(parseSelector('#id')).to.be.deep.equal({tag: 'div', classList: [], id: 'id'});
  });

  it('should parse single classname', function() {
    expect(parseSelector('.class-name')).to.be.deep
    .equal({id: null, tag: 'div', classList: ['class-name']});
  });

  it('should parse multiple classnames', function() {
    expect(parseSelector('.class-name-1.class-name-2')).to.be.deep
    .equal({id: null, tag: 'div', classList: ['class-name-1', 'class-name-2']});
  });

  it('should parse tagname, id and classname', function() {
    expect(parseSelector('span#id.class-name')).to.be.deep
    .equal({id: 'id', classList: ['class-name'], tag: 'span'});
  });
});
