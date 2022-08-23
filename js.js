"use strict";
let colorPickArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let selectedColor = [];
let pTextFunction = (message) =>
  (document.querySelector("p").textContent = message);
document.addEventListener("click", function () {
  for (let i = 0; i <= 6; i++) {
    let randomizer = Math.trunc(Math.random() * 16 + 1);
    console.log(randomizer);
    selectedColor.unshift(colorPickArr[randomizer]);
  }
  let colorName = "#" + selectedColor.join("");
  pTextFunction(colorName);
  document.querySelector("body").style.backgroundColor = colorName;
});
