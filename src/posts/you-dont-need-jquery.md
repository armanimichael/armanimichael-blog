---
title: You don't need JQuery
crawlerTitle: You don't need JQuery
keywords: jquery, javascript, web dev, nodejs
excerpt: Time to retire good ol' JQuery.
slug: dont-need-jquery
date: 2020-12-15T21:03:05.761Z
category: JavaScript
---

## What's with JQuery?

**JQuery** is probably one of the most used [JavaScript](/category/javascript) libraries around. It's been around for quite some time, dating back to 2006.

The idea behind this library is **writing less code** to perform some tasks, such as styling elements dynamically, playing animations via script, fetching data, etc.

Don't get me wrong now. JQuery is a great library, and I personally use it at work. However, for most things, you presumably don't need to use it.

Every dependency on any project of yours has its impact on **performances,** **loading times, and even security**. Choosing the best solution for you will boost your productivity.

For instance, if you're using [ReactJS](/category/reactjs), you should not be using JQuery, as you can perform the needed tasks just with JavaScript or React itself.

## JavaScript vs JQuery - some examples

Let's write, in practice, what's you can do with JavaScript without the need for JQuery.

First, let's take a look at how to **select HTML elements**. In the snippets below, you will always see a JQuery example followed by a JavaScript one. Let's also suppose we want to work with a HTML elements with `class = "example"`.

I will not cover all methods with JS, as you could also retrive an element(s) by its tag name for example. You can find more about that on [here, for example](https://developer.mozilla.org/en-US/docs/Web/javascript).

```javascript
// JQuery
const example = $('.example');

// JavaScript
// In JS, this can be done in many ways

// 1st method
const example = document.getElementByClassName('example');

// 2nd method
// This method will return the first instance of this class
const example = document.querySelector('.example');

// 3rd method
// This method will return an arary of elements (if multiple)
const example = document.querySelectorAll('.example');
```

As you can see, especially with `document.querySelector()` it's quite easy to retrive an element. You can also use this specific method to retrive elements according on any type of property, such as id, tag name, etc.

Another thing JavaScript do well, is adding event listeners. Which means making an element react to certain elements.
If you're interested, I wrote another [post talking about events in ReactJS](/reactjs-events/).

Some examples:

```javascript
// JQuery
$('#example').on('click', () => {
  console.log('Hello world');
});

// JavaScript
const example = document.querySelector('#example');

// 1st method
example.onclick = () => {
  console.log('Hello world');
};

// 2nd method
example.addEventListener('click', () => {
  console.log('Hello world');
});
```

Lastly for this post, I will talk about how to edit CSS styles from JavaScript and JQuery. This is quite useful when working with animations and / or transitions.

```javascript
// JQuery
$('#example').css('background-color', 'red');

// JavaScript
// If a css property requires a dash ( - ), you must use uppercase
// for example background-color = backgroundColor
document.querySelector('#example').style.backgroundColor = 'red';
```

## Some final considerations

As you can see, JavaScript can totally perform certain tasks without too much of an effort. Surely, JQuery is usually shorter. Yet, if you don't really need a library like JQuery, there's no point in making your projects bigger in size just to write a couple of lines of code less.

JavaScript is a totally valid language, libraries can help. Nonetheless, keep in mind mind that libraries can still help you out. Your role, as a developer, stand in choosing what best suits your needs.

Also, a little advice, don't overthink it. It won't make decisions easier.
