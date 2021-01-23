---
title: JavaScript Closures
crawlerTitle: JavaScript Closures - The Basics of JavaScript
keywords: javascript, js, web dev, closures
excerpt: A confusing but important topic for every JS Dev
description: "JavaScript Closures have always confused many developers. However,
  they're an essential and crucial topic to undertake. "
slug: javascript-closures
date: 2021-01-23T12:11:18.733Z
category: JavaScript
---
## An introduction to JS Closures

Between the many topics of [JS](/category/javascript/), **Closures** stand out as an often challenging and confusing subject. 

Closures aren't that hard; learning how they work is just the first step into a more advanced and useful way to improve JavaScript scripts. Moreover, some **examples** may help you figure out how to use them and take advantage of them in many different situations.

## Lexical Scope

To properly understand how closures work and what they are, we first need to tackle **Lexical Scoping**.

I already wrote something about scopes in a [previous article about variables declaration](/variables-declaration-js/). You should check that out too.

As explained in the previously mentioned post, JavaScript organizes variables in the **Global Scope** and **Local Scope** variables. The position of the variable defines its current Scope.

Lexical Scope means that a lower Scope can access a variable defined in a higher Scope. 

In other words: *Lexical Scope defines how nested functions resolve variable names.*

See the example underneath.

```javascript
const global = 'a global variable';
function doSomething() {
  // Yay, we can access an upper scope variable!
  console.log(global); 
}

doSomething() // 'a global variable'
```

Easy, isn't it? The variable global is accessible from the underneath function.

We can now talk about Closures.

## Closures

According to MDN, a closure is *"the combination of a function bundled together (enclosed) with references to its surrounding state."*.

In other words, if we create multiple functions one inside another, **if a lower level function accesses an upper-level Scope, we got Closure**.

The example above is also a Closure. 

It's not necessary to have multiple functions to create one. As far as we access an upper-level Scope from a function, we've created a Closure.

When we create a function, we implicitly create a Closure. Why? Well, any function can access **JavaScript's Global Scope**, containing the Window object, for instance.

Let's now see a closure containing a function. We can do that in two different but complementary ways.

Firstly, by creating an inner function and **running it right away**.

```javascript
function doSomething() {
  const someVar = 1;
  function doMore() {
    console.log('someVar: ' + someVar);
  }
  
  doMore();
}

// ALTERNATIVELY
function doSomething() {
  const someVar = 1;
  (function () {
    console.log('someVar: ' + someVar);
  })();
}

doSomething(); // 1
```

And secondly, by defining an inner function and **returning it**.

```javascript
function doSomething() {
  const someVar = 1;
  function doMore() {
    console.log('someVar: ' + someVar);
  }
  
  return doMore;
}

const closure = doSomething();
closure(); // 1
```

In the first case, we can run the function anonymously. That will work the same; it's up to you.

On the other hand, the second case can get more powerful. We can use it to create a function factory, which will work similarly to classes.

Let's write a simple example. I'm going to return an arrow function to make things shorter.

```javascript
function sum(a) {
  return b => {
    return a + b;
  }
}

const sum5 = sum(5);
sum5(1); // 6
sum5(2); // 7
```

As you can see, the outer Scope can maintain its state; we can use this concept to write an easy **counter** function.

```javascript
function counter() {
  let start = 0;
  
  return () => start++;
}

const increment = counter();
console.log(increment()); // 0
console.log(increment()); // 1
console.log(increment()); // 2
```

## Conclusion

These are the basics of **Closures**. As you can see, you probably used them already without even realizing it. For example, the `setInterval` and `setTimeout` methods use the same concept to work.

Later on, you can use these topics to create highly efficient architectures for libraries and frameworks.