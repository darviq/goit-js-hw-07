"use strict";

const inputRef = document.querySelector("#validation-input");
const inputSymbols = parseInt(inputRef.dataset.length);

inputRef.addEventListener("change", correctOrNo);

function correctOrNo() {
  if (inputRef.value.length === inputSymbols) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
