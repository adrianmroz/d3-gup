### d3-gup

Utility functions for keeping your code dry, when using General Update Pattern for d3.js

#### Concepts

This library uses two main concepts from d3.js good practises - General update pattern and data-selection join. 

Joins are created using `join` function. It's simplest form it accepts node definition and data. It returns a function which accepts `selection` from d3. In this function will be evaluated data join, e.g. there will be created new selection and data will be bound to it.

Then, using node definition nodes will be created with attributes and children. In simplest form, this function could be called on some selection and will return new created selection. From there you could use any d3 api, because it will be standard d3 selection. There's simple helper for this in library - `gup`.



Nodes are defined using h function. It resembles hyperscript api with some differences due to d3 concepts.

First parameter is required css selector for element, used to select elements by d3. Join ensures that entering elements will fulfil this selector. Currently selector don't conform to css syntax. It requires order - tagname, class names and id. 

Second parameter is object of attributes. Key is attribute name. Values can be any serializable type or function. If value is function, it should accept data and index and will be called for every update of data in join. *Special key `style` is for defining style of element. It uses d3 `style` function and works just like attributes. Special key `textContent` is for defining text of node which depends on data (it uses d3 `text`).*

Rest of parameters are children of node. It could be other node definition, String (it would be set as text of node), or transformation. Transformations will be called on created selection every time data updates. Especially join could be used as transformation for nesting nodes depending on parents data. Node definitions are just objects, so they can be manipulated using normal JavaScripts functions. 

*Array and object spreads and map/filter/reduce are recommended to get quasi-immutable manipulators.*



Library introduces idea of selection transformation - `xf` for short. It's any function accepting d3 selection and returning one. Using them we can get lazy evaluation of dom manipulation functions and easier composition (just function composition). Library provides few transformation combinators for common d3 selection functions. It allows to functionally define and compose series of transformations on selections. Any combinator accepts as arguments specific parameters and at last position - current transformation. From there you could use `pipe`, `compose` or `thread` to express intent with functional code.

 `join` is basic function for obtaining first `xf`

`join` accepts also options:

- Transformations of each selection: enter, update, exit.
  
  These functions are called on corresponding selections when they're created.
  
  Most common use case for them are transitions
  
- Data join indexing functions, used by d3 to identify nodes in join.
  
- Css selector, used for inserting (instead of appending) entering nodes before other nodes

There is `gupAll` function for calling sequence of transformations on parent selection.

There is `nest` helper, which is just join with `(d) => [d]` function as data definition. It's common idiom for nesting that way nodes using d3.

#### Usage

``` javascript
// necessary improts
import {gup, join, g, rect, on, call} from 'd3-gup';

// gup uses hyperscript-like syntax for defining DOM nodes

// first argument is selector and uses css syntax
// second argument is optional object of attributes, keys are attributes values
// values could be primitives inserted into dom or functions, which in case of data join, will be called 
// with bound data
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

- selector should be optional
- handle `insert` in `enter`
- vNodes should be just data, not objects