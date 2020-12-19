---
title: JavaScript Objects
crawlerTitle: JavaScript Objects
keywords: javascript, js, web dev, nodejs, programming
excerpt: Working with one of JavaScript's most powerful tools
description: Learn how do Objects work in JavaScript and how to use them in
  real-world programming problems.
slug: javascript-objects
date: 2020-12-19T16:32:17.831Z
category: JavaScript
---
## What are Objects?

[JavaScript](/category/javascript) **Objects** can be found in almost every JS project we write or work with. They're a powerful tool we can use to categorize data in an **unordered** way.

Objects are collections of properties, which are an associations between a key and a value. You can also create **methods** using objects, by assigning a function to a key. **Methods are simply functions bind to a Object**.

Differently from **Arrays**, when working with Objects the **order of their properties doesn't matter**. In JavaScript Arrays are also Objects, of a special kind, but still Objects.

## Why using Objects?

The real question now is, why do we need to use Objects in the first place? Well, for instance, instead of creating a bunch of variables referencing to the same concept, we can wrap them into a single Object.

For example, we could define an animal objects with certain properties such as age, name, species, etc.

## Creating and accessing Objects

To create an Object, we can choose between two methods, as shown below.

```javascript
// Method 1
const obj = {};

// Method 2
const obj = new Object();
```

The first one is most common and it uses a literal syntax. The latter uses an Object constructor.

Let's now see how to add properties to our Object. Let's create the Animal Object we were talking about.

```javascript
const animal = {
  name: 'Tiger',
  age: 2,
  species: 'cat'
}
```

As for creating Objects, there're two methods to access Object's properties.

```javascript
// Method 1
animal.name    // Tiger
animal.age     // 2
animal.species // cat

// Method 2
animal['name']    // Tiger
animal['age']     // 2
animal['species'] // cat
```

Same as before, the first method is most commonly used. The second one, however, let's you access Objects's properties **dynamically**, as you could pass variables inside the `[string]` notation.

Trying to access a property that doesn't exist will NOT return an error, it will instead return **undefined**.

## Methods

As I said before, you can also create **methods**.

```javascript
const animal = {
  name: 'Tiger',
  age: 2,
  species: 'cat'
  changeAge: function() {
    this.age = 4;    
  }
}

animal.walk();
```

Creating methods only requires you to assign a function to a key, you can later call it by accessing the property and adding the parenthesis.

By using the this keywords you can also access the Object's properties from within the method. Be aware that you can also use arrow functions, however, `this` will NOT be the object but the outer scope (where the object lives).