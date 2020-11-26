"use strict";

const categListRef = document.querySelector("#categories");
const categRefs = categListRef.querySelectorAll(".item");
const categAmount = categRefs.length;
console.log(`В списке ${categAmount} категории.`);

categRefs.forEach((category) => {
  const categoryHeaderRef = category.querySelector("h2");
  const categoryHeaderText = categoryHeaderRef.textContent;
  const elementAmount = category.querySelectorAll("li").length;
  console.log(
    `Категория: ${categoryHeaderText}\nКоличество элементов: ${elementAmount}`
  );
});
