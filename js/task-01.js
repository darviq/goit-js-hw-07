"use strict";

const categRefs = document.querySelectorAll(".item");
console.log(`В списке ${categRefs.length} категории.`);

categRefs.forEach((category) => {
  console.log(
    `Категория: ${category.firstElementChild.textContent}\nКоличество элементов: ${category.lastElementChild.children.length}`
  );
});
