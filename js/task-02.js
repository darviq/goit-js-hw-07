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
  return itemRef;
};

const ingredientsArrRef = ingredients.map((ingredient) =>
  createItemRef(ingredient)
);
const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsArrRef);
