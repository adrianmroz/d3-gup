## d3-gup

Utility functions for keeping your code dry, when using General Update Pattern for d3.js

### Prerequisites

[Thinking in joins](https://bost.ocks.org/mike/join/)

[General Update Pattern](https://bl.ocks.org/mbostock/3808218)​

### Getting started

This library uses two main concepts from d3.js good practises - General update pattern and Data join. 

#### joins

Data joins are created using `join` function. It accepts data (anything that could be data in `d3.js` library) and node definition.  It returns a function of d3 selection, so code joining data and DOM elements is created lazily. To actually run this code you need to call that function on your selection. You can do this using this library function `gup` or just passing d3 selection to this function. Nodes are defined using hyperscript like syntax - more details later.

``` javascript
const data = [1,2,3];
const parent = d3.select('#parent');

// creates join - for every element in data, there will be created a div
const myJoin = join(data, div('.my-div', {textContent: (d) => 'data: ' + d}));

// actually running the computation
myJoin(parent)
// because this function returns created selection, you can call any d3 code
  .attr('color', 'red');
```

Library defines functions like join as *selection transformation* - a function taking selection and returning one. Join is one example of such function - it takes parent selection and returns created selection. Library provides some functions for manipulating such transformations.

``` javascript
const chart = join([1,2,3], div('.bar', {height: (d) => d * 100, width: 20}));

d3.select(document.body).call(
// you can use classed combinator to add class for your elements in join
	classed('clickable', true, chart));
```

Now you can compose joins like regular functions and decorate them. You can pipe, compose or sequence any selection transformations. You can mix your joins with any other functions of d3 selections, like stateless components.

### node definitions

Nodes are defined using `h` function. It resembles hyperscript api with some differences due to `d3.js` concepts. Library provides common html/svg tag functions.

First parameter is required css selector for element. (*Currently selector don't conform to css syntax. It requires order - tagname, class names and id*) 

Second parameter is object of attributes. Key is attribute name. Values can be any serializable type or function. If value is a function, it should accept data and index and will be called for every update of data in join. (*Special key `style` is for defining style of element. It uses d3 `style` function and works just like attributes. Special key `textContent` is for defining text of node which depends on data).*

Rest of parameters are children of node. Child could be other node definition, String (it would be set as text of node), or selection transformation. Transformations will be called on created selection every time data updates. 

``` javascript
const app = d3.select('#app');
// Header definition - static node definition
const header = span('.header', {color: 'blue'}, 'Some nice chart!');
// Bars definition - another join, using parents data
const bars = join(d => d, div('.bar', {height: d => d * 100}));

// Chart definition
const chart = join([[1, 2, 3, 4]], 
                   div('.chart', {}, 
                       // first child would be header
                       header, 
                       // later, there will be bars
                       bars, 
                       // And some static text
                       'Little footnote'));

app.call(chart);
```

As you can see, you can nest easly joins or simple nodes. Node definition are just plain objects and can be easly manipulated. You can create one generic node and customize it with changing it’s properties, or adding another child. Or you can manipulate sequences of nodes with map/filter/reduce.

### Todo

- proper selector parsing and handling errors there
- handle errors in h function