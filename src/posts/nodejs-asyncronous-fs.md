---
title: NodeJS Asyncronous FS
crawlerTitle: NodeJS Asyncronous FS
keywords: nodejs, server, backend dev, web dev, javascript, javascript async, file system
excerpt: Asyncronous Read/ Write FS Operations.
slug: nodejs-async-fs
date: 2020-12-17T21:01:59.142Z
category: NodeJS
---
## Asyncronous Functions

In a previous post about [JavaScript](/category/javascript), I talked about [how to use Promises](/javascript-promises/). Promises are an important part of async programming, they can be used to work with `async` functions and you can clean up your code by using them proficiently.

NodeJS lets us manage the File System, normally, this operations can be done with the `fs` module. However, today I'm going to talk about the use of the async version of `fs`, firstly introduces in **Node 10**.

## Working with Files

If you don't know much about NodeJS, or you're just starting, you can try and read my previous article where I actually wrote [how to quickly setup Node along with a starting explanation about the http module](/nodejs-http).

Differently from sync `fs`, you'll need to require `fs/promises`. Let's now see how to open a file and read it's content.

```javascript
const fs = require('fs/promises');

fs.readFile('./package.json', 'utf-8')
  .then(out => {
    console.log(out);
  })
  .catch(err => {
    console.log(err);
  });

```

In the example above I'm using **Promises** to read the `package.json` file. The first argument to the readFile function is the file, while the second one is the **character encoding**.

The Promise returns the content of the file in console in case of success, otherwise, it will return an error.

Another approach is using the `async` / `await `syntax. To do so, you can rewrite the above snippet as follows.

```javascript
const fs = require('fs/promises');

(async function () {
  try {
    const out = await fs.readFile('./package.json', 'utf-8');
    console.log(out);
  } catch (err) {
    console.log(err);
  }
})();
```

While using `await` you must be in a `async` function, that's why I used an async anonymous function. Alternatively, you can write a `async` function and call it afterwards.

For the rest of the article, I will stick to Promises.

Obviously, you can also write in files. You can do that with the `writeFile()` function. This function also creates the file if the provided on doesn't exist.

Moreover, you can use the `appendFile()` file to append data at the end of the file rather than totally altering its content.

```javascript
const fs = require('fs/promises');

fs.writeFile('./test.txt', 'Some data')
  .then(() => {
    fs.appendFile('./test.txt', '\nSomething new!').catch(err => {
      console.log(err);
    });
  })
  .catch(err => {
    console.log(err);
  });

```

As you can see, I called the append function only after the first write operation is done. That's because I want to ensure to write the strings in the given order. 

## Where to go from here

This is merely an introduction on working asynchronously with the fs and Node in general. In the future, starting from this simple posts, I will progressively add more complexity. 

For now let's stick to the basics, let's avoid overdoing. If you want to learn more about this module, the [official NodeJS docs](https://nodejs.org/api/fs.html) can help you out.

Try to read official documentation if you can, that's can truly help you out!