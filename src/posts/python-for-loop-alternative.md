---
title: Python For-Loop Alternative
crawlerTitle: Python For-Loop Alternative
keywords: python, loops, programming, oop
excerpt: A valid alternative to the range() function.
description: "How to avoid using the range() function in for loops in Python.
  This method also allows you to get both indexes and elements of an iterable
  (lists, tuples, etc.). "
slug: python-for-alternative
date: 2020-12-22T18:22:47.996Z
category: Python
---
When using [Python](/category/python), it's common to see the `range()` function used to loop indexes of an **iterable**, such as **tuples**, **lists** and **dictionaries**. Just like in the example underneath.

```python
t = ("a", "b", "c")

for i in range(len(t)):
    print(i)

'''
Output:
0
1
2 
'''
```

Another alternative is using the a **foreach-like** form in Python. In Python there's no actual `foreach` keyword, however, we can still achive that behavior with a simple for. 

Differently from the previous example, we'll now get the **elements** of the iterable instead of the indexes.

```python
t = ("a", "b", "c")

for e in t:
    print(e)

'''
Output:
a
b
c 
'''
```

This is a good use of the for loop in Python. Just avoid naming variables as generally as I did in these examples.

Another cool alternative is using the `enumerate` keyword. This method allows us to return an iterable object, we can then access both keys and elements. As shown below.

```python
t = ("a", "b", "c")

for i, e in enumerate(t):
    print(f'{i} - {e}')

'''
Output:
0 - a
1 - b
2 - c
'''
```