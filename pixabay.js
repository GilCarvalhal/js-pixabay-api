"use strict";

const searchImages = async (text) => {
  const key = "39710609-b5a460888697362e577a8bcf1";
  const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
  const response = await fetch(url);
  return response.json();
};

const loadGallery = async (text) => {
  const imagesInfo = await searchImages(text);
  console.log(imagesInfo);
};

const handlerKeyPress = ({ key, target }) => {
  if (key === "Enter") {
    loadGallery(target.value);
  }
};

document
  .querySelector("#search-input")
  .addEventListener("keypress", handlerKeyPress);
