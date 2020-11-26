"use strict";

const valueRef = document.querySelector("#value");
let counterValue = parseInt(valueRef.textContent);
const decrBtnRef = document.querySelector("[data-action=decrement]");
const incrBtnRef = document.querySelector("[data-action=increment]");

decrBtnRef.addEventListener("click", decrement);
incrBtnRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
