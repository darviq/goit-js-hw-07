"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createItemRef = (item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  fragment.appendChild(itemRef);
};

const fragment = document.createDocumentFragment();
ingredients.map((ingredient) => createItemRef(ingredient));
const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.appendChild(fragment);
