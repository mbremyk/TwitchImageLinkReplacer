// ==UserScript==
// @name Twitch Image Link Replacer
// @namespace mbremyk Scripts
// @version 0.1
// @description Replaces image links with the linked image
// @match https://www.twitch.tv/*
// @copyright 2023, https://www.github.com/mbremyk
// @require
// ==/UserScript==

let extensions = ['gif', 'png', 'jpg', 'jpeg'];

let updateChatGifs = (callback = null, timeout = 2000) => {
  let links = [...document.querySelectorAll('.link-fragment')];

  links.forEach(element => {
    let link = element.getAttribute('href');
    if (extensions.some(ext => link.includes(ext))) {
      let parent = element.parentElement;
      let img = document.createElement('img');
      img.setAttribute('src', link);
      parent.appendChild(img);
      element.remove();
    }
  });

  if (callback) {
    setTimeout(() => callback(callback), timeout);
  }
};

updateChatGifs((callback) => updateChatGifs(callback));