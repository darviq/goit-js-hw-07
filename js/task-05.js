"use strict";

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", replce);

function replce() {
  inputRef.value.length > 0
    ? (outputRef.textContent = inputRef.value)
    : (outputRef.textContent = "незнакомец");
}
