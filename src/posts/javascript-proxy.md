---
title: JavaScript Proxy
crawlerTitle: JavaScript Proxy
keywords: javascript, proxy, js, web dev
excerpt: Define custom fundamental operations on a target object.
description: "Learn what a JavaScript Proxy is, and how we can use it to
  intercept a target object and change its fundamental operations. "
slug: javascript-proxy
date: 2020-12-31T13:11:45.465Z
category: JavaScript
---
## What's a Proxy?

The word **Proxy** is nothing new in [Computer Science](/category/cs). For instance, you probably know or heard about Proxy Servers. In networking Proxies allow you to create some sort of intermediary between a Client and a Sever, this can help with security, privacy, traffic control, and more.

[JavaScript](/category/javascript/) Proxies share the general definition of Proxy Severs, which is: 'something' that intercepts actions and redefine them is some way.

That's quite a general and informal definition, for a more accurate description we can use one from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

"The `Proxy` object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object."

However, if the definition I gave doesn't make you understand any better what the point of a Proxy is, some examples surely will.

## Creating and using Proxies

First of all, let's see how to define a Proxy. We will need an [object](/javascript-objects) to work on, and an handler.

```javascript
const person = {
  name: 'John',
  surname: 'Smith',
  age: 36
};

// I'll show later what to do with this
const handler = {}

const personProxy = new Proxy(person, handler);


```

With everything set, let's see what is the handler object and how to use it. With an empty handler, `personProxy` will return the same result as the `person` object.

### get() Trap

By using an handler, we can intercept fundamental operations such as `get`, a what's called **trap** (because it catches actions) defining what is returned when we access any property. 

`get` accepts three arguments: target (the object we're working on), prop (the property we're accessing), and a receiver (the final object returned from the proxy).

```javascript
const handler = {
  get: (target, prop, receiver) => {
    return `Property ${prop.toString()} = ${target[prop]}`;
  }
}

// Let's see what happens when we try to access person properties
console.log(personProxy.name);    // Property name = John
console.log(personProxy.surname); // Property surname = Smith
console.log(personProxy.age);     // Property age = 36
```

As you can see, we can change what returns when we access any property. By using the `prop` argument, we could also change behavior depending on the property.

```javascript
const handler = {
  get: (target, prop, receiver) => {
    if (prop === "age") {
      return `${target.name} is ${target[prop]} years old`;
    }
    return target[prop];
  }
}

// Let's see what happens when we try to access person properties
console.log(personProxy.name);    // John
console.log(personProxy.surname); // Smith
console.log(personProxy.age);     // John is 36 years old
```

### set() Trap

Furthermore, we can use the **set** trap to define how to customize editing a object's property.

**set** accepts three arguments: target, property, and value (the value we set to that property before falling into the Proxy trap).

For instance, we may want to allow only numbers greater than 0 for the age property. Let's see how to do that.

```javascript
const handler = {
  set: (target, prop, value) => {
    if (value < 0) {
      throw new Error('Cannot set nagative age.');
    }
    target[prop] = value;
  }
};

personProxy.age = -1; // Error: Cannot set nagative age.

```

### apply() Trap

Another useful Proxy trap is `apply`. We can use this trap to catch functions. 

`apply` accepts three arguments: target, thisArg (the `this` argument for the call), arguments (the arguments passed to the function).

```javascript
const sum = (a, b) => {
  return a + b;
}

const handler = {
  apply: (target, thisArg, argumentsList) => {
    return target(argumentsList[0], argumentsList[1]) / 2;
  }
};

const avg = new Proxy(sum, handler);

console.log(avg(1, 2)); // 1.5
```

## There's more

The three traps defined above are some commonly used ones, there're actually other traps we can use when creating Proxies. 

For instance, you can catch constructors or others Object properties.