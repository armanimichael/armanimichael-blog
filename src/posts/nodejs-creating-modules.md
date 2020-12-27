---
title: NodeJS Creating Modules
crawlerTitle: "NodeJS: How to create Modules"
keywords: nodejs, javascript, server, web dev, backend, http server
excerpt: Splitting a NodeJS project in different modules.
description: "Splitting a NodeJS project in multiple utility packages and
  importing them when needed. Modules let us create reusable code and structure
  our projects. "
slug: nodejs-modules
date: 2020-12-27T11:30:04.486Z
category: NodeJS
---
## What are Modules?

When working with vanilla [JavaScript](/category/javascript/), each file's a separate program. However, if we reference multiple JS files inside a HTML document, JavaScript will see all the files as a monolithic script.

This fact can cause different problems, for instance, the order in which we call files matter, there can be names collisions, and it can be harder to debug programs.

[NodeJS](/category/nodejs/) works with modules instead. Each file is separate from each other, when can then import / export what we need, where we need it. That's why we need to specify an entry point when creating a new project, similar to how we use the `main` function in languages like C.

Node is built on top of the CommonJS API, which sets some important standards for running JavaScript outside of the browsers. For example, in a previous post, I talked about [creating a simple HTTP Server using built-in modules](/nodejs-http/).

Since now, I only talked about built-in modules, let's now see how to create our personal modules.

## Modules Types

There are three main types of modules in NodeJS: **built-in**, **local**, and **NPM**.

* **built-in**: modules (always available) defined by the NodeJS ecosystem
* **local:** modules locally defined by the creator of the project.
* **NPM:** 3rd party modules defined by the community.

## Creating a Module

### Exporting from a Module

To create a module we can simply create a new file inside the project folder and creating some content. We can place anything inside modules, from functions, to classes, variables, etc.

Let's create a file named `simple-math.js` inside our project. 

We also need to access the functions inside this file somehow. To do so, we can export anything we want to use outside of the file. In this case, the `sum` and `sub` functions.

To export anything from a module, we can use `exports`.

```javascript
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.sum = sum;
exports.sub = sub;
```

In the example above, we're extending the `exports` object with the definitions of `sub` and `sum`. An alternative to this would be using one of the two methods underneath.

```javascript
// ...

// 1st method (sum and sub have been defined above)
module.exports = {
  sum,
  sub,
};

// 2nd method (defining sum and sub 'on the fly')
module.exports = {
  sum: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  }
};
```

### Importing from a Module

After exporting some functionalities, we can now import these functions from the module by using `require`.

Inside `require`, we'll have to write the relative position of the module we're importing. **You don't have to include the .js file extension.**

```javascript
const simplemath = require('./simple-math');

// We can now use the imports
simplemath.sum(1, 2);
simplemath.sub(1, 2);
```

Alternatively, we can use [JavaScript Deconstructing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```javascript
const {sum, sub} = require('./simple-math');

// We can now use the imports
sum(1, 2);
sub(1, 2);
```