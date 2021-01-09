---
title: JavaScript 'if' conditional tricks and tips
crawlerTitle: JavaScript 'if' conditional tricks and tips
keywords: javascript, conditionals, js, web dev
excerpt: Some practical ways to simplify your code.
description: "Conditionals are the milestones of programming. JavaScript offers
  many way to work with the if conditional, making programming even easier. "
slug: javascript-if
date: 2021-01-07T18:29:07.800Z
category: JavaScript
---
If you ever wrote any piece of code, in any programming language, you've surely used the `if` conditional. Making **decisions** is what makes programs 'intelligent' and useful. 

However, we can produce **cleaner** and **shorter** code (optionally, less code != good code). Taking advantage of [JavaScript](/category/javascript/) fundamentals and new features can help us a lot.

## Simple if

When you need to check for a single condition, you can use the classic `if` form, as it follows.

```javascript
if (condition) {
  alert('Wooah - doing something');
}

// Anternatively

if (condition)
  alert('Wooah - doing something');
```

Cool and clean! Yet, we can rewrite things to be briefer by using the and (`&&`) operator.

```javascript
// If condition == true it will fire the alert();
condition && alert('Wooah - doing something');
```

As simple as this! **Beware not to overuse these methods**, they can make your code harder to read if used badly and randomly.

We can also use this method to assign values to variables and constants, by assigning a certain value to the variable if a condition if `true`, otherwise, assigning the [Boolean](/boolean-algebra/) value of the condition itself.

```javascript
const someValue = condition && 'Some other value';

// To above line is the same as
let someValue;
if (condition) {
  someValue = 'Some other value';
} else {
  someValue = condition;
}
```

Moreover, we can use a similar operator to do the opposite of `&&`, which is the `||` (or) operator.

This operator will check if a condition is **false** (remember that empty strings, `null` and `undefined`, are equal to `false`, in this case it will return the second value.

```javascript
// If condition == false it will fire the alert();
condition || alert('Wooah - doing something');
```

And, with variables.

```javascript
const someValue = condition || 'Some other value';

// To above line is the same as
let someValue;
if (condition) {
  someValue = condition;
} else {
  someValue = 'Some other value';
}
```

## if else

Another common use of `if` expects the use of and `else` fallback.

```javascript
if (condition) {
  alert(true);
} else {
  alert(false);
}
```

Similar to the previous example, we can use some special operators.

```javascript
condition ? alert(true) : alert(false);
```

Obviously, you can use the same syntax to assign variables.

```javascript
const someValue = condition ? 'condition == true' : 'condition == false';
```

## if with multiple conditions

Lastly, I will show you an useful method to test many conditions without using the redundant example shown below.

```javascript
if (a === 1 || a === 2 || a === 3 || a === 4) {
  alert('Those are a lot of comparisons.');
}
```

To solve this ugly piece of code, we can use the `include()` [Array method](/javascript-remove-items-array/). This method accepts a value and returns a Boolean. If the value is found anywhere inside the Array return **true**, otherwise return **false**.

```javascript
if ([1, 2, 3, 4].includes(a)) {
   alert('Those are a lot of comparisons.');
}
```