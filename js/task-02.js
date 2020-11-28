"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

const createItemRef = (item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  fragment.appendChild(itemRef);
};

ingredients.map((ingredient) => createItemRef(ingredient));
ingredientsListRef.appendChild(fragment);
