"use strict";

const loadGallery = (text) => {
  console.log(text);
};

const handlerKeyPress = ({ key, target }) => {
  if (key === "Enter") {
    loadGallery(target.value);
  }
};

document
  .querySelector("#search-input")
  .addEventListener("keypress", handlerKeyPress);
