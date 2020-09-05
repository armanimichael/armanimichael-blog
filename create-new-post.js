const fs = require('fs');
const prompt = require('prompt-sync')();

const settings = {
  filename: '1',
  'post-title': '2',
  'crawler-title': '',
  description: '',
  keywords: '',
  excerpt: '',
  slug: '',
  date: '',
  category: '',
};

console.log('Create a new post...\n');

for (const setting in settings) {
  settings[setting] = prompt(
    setting.substr(0, 1).toUpperCase() + setting.substr(1) + ': '
  ).replace(/\//g, '');
}

const postContent = `
---
title: ${settings['post-title']}
crawlerTitle: ${settings['crawler-title']}
description: ${settings.description}
keywords: ${settings.keywords}
excerpt: ${settings.excerpt}
slug: /${settings.slug}/
date: ${settings.date}
category: ${settings.category}
---
`.trim();

const filename = settings.filename
  .replace(/[\\~#%&*{}/:<>?|\"-/ /]/g, '')
  .toLowerCase(); // Replace invalid chars
const postPath = `./src/posts/${filename}/`;
const postFile = `${filename}.mdx`;

fs.mkdir(postPath, error => {
  if (error) throw error;

  fs.writeFile(postPath + postFile, postContent, error => {
    if (error) throw error;
    console.log('New Post Created!');
  });
});
