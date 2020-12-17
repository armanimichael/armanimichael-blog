---
title: NodeJS HTTP Server with built-in tools
crawlerTitle: NodeJS HTTP Server with built-in tools
keywords: nodejs, server, backend dev, web dev, javascript
excerpt: Built-in tools exist, let's see how they work.
slug: nodejs-http
date: 2020-12-16T18:27:57.860Z
category: NodeJS
---
## HTTP Server

**HTTP** (**HyperText Transfer Protocol**) runs the web, learning how to create a HTTP Server is between the basic for any back-end developer.

HTTP is a application level protocol with the primary objective sending data across the Web, between a [Client and a Server](/category/web-dev). In other words, HTTP is the base of the **World Wide Web**.

When you firstly approach NodeJS, it's tempting to go for packages such as ExpressJS. However, NodeJS has tons of built-in packages and, http is one of them.

In fact, libraries like ExpressJS or Restify exist because they take advantage of NodeJS built-in methods like `http`.

## Setting up NodeJS

Before starting to write some code, you'll need to setup a working NodeJS environment. The procedure is as fast as light.

Firstly, you'll have to [download NodeJS from its official website](https://nodejs.org/en/download/) and install it. Node also comes with **NPM,** which we'll use to set up the environment.

As soon as you've installed Node, you can create a new folder an run (from console) the following command `npm init`. This command will walk you through a short guided setup, you can leave everything as is. 

Alternatively, you can run `npm init -y` to automatically accept all the defaults, and start coding.

Lastly, we'll need an entry point, in this case it'll be `index.js`.

## Using the `http` Module

Let's see how to create a basic HTTP Server. We will firstly need to require the module. Then, we can create a server and start listening.

```javascript
const http = require('http');

http.createServer((req, res) => {
    
});

http.listen(80);
```

The script above will open up a HTTP server and start listening on port 80, for now it serves no utility.

To add some functionality, we can return some kind of response. You can send all kind of data, if you write some HTML, it'd render correctly. In a later post, I will show how to also send data in JSON and other formats.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello there');
  res.end();
});

server.listen(80);
```

If you start the server, by running `node index.js`, and type `localhost` in the browser, you'll see your message printing in the page. 

The port I used here is not random, port 80 is the one used for HTTP connections, that's why you don't need to specify it in the browser. If you wish to use another port, you have to specify the port, for example `localhost:3000`

Note that you also need to close the connection with `res.end()`, otherwise, the page will never stop waiting for the end of the response and it won't work. The browser will get stuck loading indefinitely.

Lastly, for this post, you may want to return different responses for different routes. To access the current request routes, we can just read the values of `res.url`.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('Homepage');
      break;
    case '/about':
      res.write('About');
      break;
    case '/privacy':
      res.write('Privacy');
      break;

    default:
      res.end('Not found');
      return;
  }
  console.log('!');
  res.end();
});

server.listen(80);
```

In this example, we're returning the name of a page. In case the Client tries to look for a nonexistent route, it'd return a 'Not found' message.

This is it for now, in the following posts I will probably talk about [NodeJS](/category/nodejs) more extensively.