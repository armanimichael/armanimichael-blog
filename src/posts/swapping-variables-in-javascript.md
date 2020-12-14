---
title: Swapping Variables in JavaScript
crawlerTitle: Swapping Variables in JavaScript
keywords: javascript, web dev, programming, js, nodejs
excerpt: No need for a temp variable.
slug: javascript-swap-variables
date: 2020-12-14T21:44:09.439Z
category: JavaScript
---
Usually, when swapping variables in most programming languages, we need to create some sort of `temp` variable in order to 'backup' the value of a variable when changing it with another one.

For example, we usually do something like this.

```javascript
let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;
```

The above example is not that bad, however, with [JavaScript](/category/javascript), things get even easier. We can simply use array syntax to help us with that.

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a]
```

It's as simple as that! This is a **rapid** and great way to **swap variables in JavaScript.**

There are other methods to swap variables, yet this is probably the only one requiring only a line of code. Let's spare some line of useless information. Not always the shortest solution is the best one, still, in this case we can say it is.

I'll probably write more post like this in the future. I'd rather write shorter posts every week, than writing a long or average size post at random times. Hopefully, this will work out fine.