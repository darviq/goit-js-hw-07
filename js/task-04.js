"use strict";

const valueRef = document.querySelector("#value");
const decrBtnRef = document.querySelector("[data-action=decrement]");
const incrBtnRef = document.querySelector("[data-action=increment]");

let counterValue = parseInt(valueRef.textContent);

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

decrBtnRef.addEventListener("click", decrement);
incrBtnRef.addEventListener("click", increment);
