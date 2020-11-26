"use strict";

const rangeInputRef = document.querySelector("#font-size-control");
const magicText = document.querySelector("#text");

rangeInputRef.addEventListener("input", size);

function size() {
  magicText.style.fontSize = `${rangeInputRef.valueAsNumber}px`;
}
