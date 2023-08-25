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

let updateChatGifs = (timeout = 2000) => {
  let chat = [...document.getElementsByClassName('chat-line__message')];

  chat.forEach(element => {
    let messageSpan = element.querySelectorAll('.message')[0];
    if (messageSpan) {
      let link = element.querySelectorAll('a')[0];
      if (link) {
        let href = link.getAttribute('href');
        if (extensions.some(ext => href.includes(ext))) {
          let img = document.createElement('img');
          img.setAttribute('src', href);
          element.appendChild(img);
          link.remove();
        }
      }
    }
  });

  setTimeout(updateChatGifs, timeout);
};

updateChatGifs();