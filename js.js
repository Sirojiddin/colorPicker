"use strict";
// Array for picking
let colorPickArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let pTextFunction = (message) =>
  (document.querySelector("p").textContent = message);

document.addEventListener("click", function () {
  let selectedColor = [];
  for (let i = 0; i < 6; i++) {
    let randomizer = Math.floor(Math.random() * 16);
    selectedColor.unshift(colorPickArr[randomizer]);
  }
  let colorName = "#" + selectedColor.join("");
  pTextFunction(colorName);

  document.querySelector("body").style.backgroundColor = colorName;
});
