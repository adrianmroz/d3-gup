### d3-gup

Utility functions for keeping your code dry, when using General Update Pattern for d3.js

#### Usage

```javascript
// necessary improts
import {gup, join, g, rect, on, call} from 'd3-gup';

// gup uses hyperscript-like syntax for defining DOM nodes

// first argument is selector and uses css syntax
// second argument is optional object of attributes, keys are attributes values
// values could be primitives inserted into dom or functions, which in case of data join, will be called with bound data
const blackRectangle = rect('#black-rect', {fill: 'black', width: 100, height: 100});

// rest arguments, after selector and attributes, are children
const rects = g('#words', rect('.rect-1', {fill: 'red'}, rect('.rect-2', {fill: 'blue'})));

// library is mainly used to join data with vNode in d3-way
// basic function is join
// attributes defined as functions get sense in joins only, so they can be called with current data
const dataJoin = join([1,2,3], rect('.bar', {width: (x) => x * 100}));

// join returns a functions :: D3Selection -> D3Selection
// to invoke those function library provides function gup
gup(d3.select(document.body), dataJoin);
// you can think about it as runJoin function

// joins of course can be nested and probably better if they use functions as data
// just pass join as vNode child
gup(d3.select(document.body),
  join([[1,2,3]],
    g('.chart', 
      rect('.border'),
      join((d) => [d],
        rect('.bar', {width: (d) => d * 100}))
    )))
    
// library provides few combinators to implement basic d3 oeprators
// combinator takes existing join and returns new one, augmented with new behaviour
call(someFunc, join([1,2,3], rect('.bar', {width: (d) => d * 100})));

// if this join will be ran, after creating defined vNodes, it will call someFunc on them
```

#### Todo

* selector should be optional
* handle `insert` in `enter`
* vNodes should be just data, not objects
