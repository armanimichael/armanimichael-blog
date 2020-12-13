---
title: Smallest Multiple
crawlerTitle: Smallest Multiple - Problem Solving with JavaScript
keywords: problem solving, javascript, gcd, lcm
excerpt: What is the smallest positive number that is evenly divisible by all of
  the numbers from 1 to n?
slug: smallest-multiple
date: 2020-12-13T14:31:37.437Z
category: Problem Solving
---
Today, I'd like to start something new on this blog. From now on, I'll post more quick and basic problems from different sources and solve them in multiple languages.

For today's problem, I got this simple one from [FreeCodeCamp](https://www.freecodecamp.org/) and I'm going to solve it in [JavaScript](/category/javascript).

## The problem

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to `n`?

## What we need to know

To solve problem, we need to be familiar with two mathematical terms: **GCD**, **lcm**.

The GCD, short for **greatest common divisor**, represents the greatest number that can divide two given numbers without a reminder. For example the GCD between 15 and 10 is 5.\
On the other hand, lcm, short for **least common multiple**, represents the smallest number that can be divided by two given numbers. For example the lcm between 15 and 10 is 30.

Computing the GCD and lcm is straightforward. Lets create two functions to generate these two values.

### GCD

To calculate the GCD we can use the Euclidean Algorithm, a recursive way to rapidly find the GCD between two numbers.

In case any given number (a or b) is 0, the other will be the GCD. As one of the number is 0, we can easily return the sum between a and b.

Otherwise, if both numbers are different from 0, since GCD(a, b) is equal to GCD(b, a % b), we can call the GCD function again. As soon as the reminder will be 0, the recursive function will return the GCD.

```javascript
function GCD(a, b) {
  if (a === 0 || b === 0) return a + b;
  return GCD(b, a % b);
}
```

### lcm

After writing the GCD function, we can use it to calculate the lcm of two numbers.\
To do so we only need the simple formula you can see underneath in the function.

```javascript
function lcm(a, b) {
  return Math.abs(a * b) / GCD(a, b);
}
```

## Solving the problem

With these two helper functions, we can now solve the actual problem.

We'll start with the number set to 1, and loop from 2 to the `n` value (as any number is divisible by 1, no need to test that). By doing so, we can test the number against every sequential value from 2 to `n`.

The number will be equal to the **lcm** between `i` and the `number` itself. So, during the first iteration, `number = 2`.\
At the end, we can simply return the calculated `number`, it will be the smallest multiplier.

```javascript
function smallestMult(n) {
  let number = 1;
  
  for (let i = 2; i <= n; i++) {
    number = lcm(number, i);
  }
  return number;
}
```

We can now wrap everything up. I'll also add `'use strict'` at the beginning of the file, doing so will prevent us from using undeclared variables and other possible program-breaking actions.

```javascript
'use strict'
function GCD(a, b) {
  if (a === 0 || b === 0) return a + b;
  return GCD(b, a % b);
}

function lcm(a, b) {
  return Math.abs(a * b) / GCD(a, b);
}

function smallestMult(n) {
  let number = 1;
  
  for (let i = 2; i <= n; i++) {
    number = lcm(number, i);
  }
  return number;
}

smallestMult(5); // 60
```