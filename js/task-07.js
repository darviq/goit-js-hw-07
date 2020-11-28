"use strict";

const rangeInputRef = document.querySelector("#font-size-control");
const magicText = document.querySelector("#text");

function size() {
  magicText.style.fontSize = `${rangeInputRef.valueAsNumber}px`;
}

rangeInputRef.addEventListener("input", size);
