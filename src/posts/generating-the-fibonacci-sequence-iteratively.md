---
title: Generating the Fibonacci Sequence Iteratively
crawlerTitle: Generating the Fibonacci Sequence Iteratively
keywords: python, fibonacci, programming problems, math problems
excerpt: An iterative solution to generate the Fibonacci Sequence
description: Using Python to generate the famous Fibonacci Sequence Iteratively.
  A faster and more efficient alternative to recursion.
slug: /fibonacci-sequence-iterative/
date: 2020-12-20T14:36:31.534Z
category: Problem Solving
---
Some months ago I wrote about how to [generate any nth number of the Fibonacci Sequence using recursion.](/fibonacci-sequence/) As I was reading through my old posts, I felt like I could complete that post with an iterative solution.

Moreover, the iterative solution is far quicker and more efficient than using recursion. As in the other post, I will use [Python](/category/python).

The solution is as easy as this. If you're wondering why I used `nex` instead of `next`, that's simple because `next` is already defined by Python (you can use it to return the next item in an iterator).

```python
def fibonacci(n):
    prev, nex = 0, 1

    for _ in range(n):
        prev, nex = nex, prev + nex
        print(prev)
```

Calling the `fibonacci` function will print out `n` values of the sequence. In order to make this simple function even better, we could **return the nth** value as for the recursive example.

```python
def fibonacci(n):
    prev, nex = 0, 1

    for _ in range(n):
        prev, nex = nex, prev + nex
    return prev

```

If we now call `fibonacci(n)` we'll get the nth element of the **Fibonacci Sequence** (starting from index 1).

In Python is quite easy to create small and good looking algorithms as you can see. For example, JavaScript doesn't allow to swap variables like this, however, you can still do that in another simple manner as described [in my previous post](/javascript-swap-variables/).