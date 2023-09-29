"use strict";

const searchImages = async (text) => {
  const key = "39710609-b5a460888697362e577a8bcf1";
  const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
  const response = await fetch(url);
  return response.json();
};

const createCard = ({ webformatURL, pageURL }) => {
  const card = document.createElement("div");
  card.classList.add("card-container");
  card.innerHTML = `
  <a href=${pageURL} class="card-image">
  <img src=${webformatURL} />
  <a />;
  `;
  return card;
};

const loadGallery = async (text) => {
  const container = document.querySelector(".container-gallery");
  const { hits } = await searchImages(text);
  const cards = hits.map(createCard);
  container.replaceChildren(...cards);
  console.log(cards);
};

const handlerKeyPress = ({ key, target }) => {
  if (key === "Enter") {
    loadGallery(target.value);
  }
};

document
  .querySelector("#search-input")
  .addEventListener("keypress", handlerKeyPress);
