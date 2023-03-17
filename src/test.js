"use strict";

///a mers in console
const items = document.querySelectorAll(".item");
const button1 = document.querySelector(".button");
const checkBox = document.getElementById("checkbox");

button1.addEventListener("click", function () {
  for (const item of items) {
    const tBlock = item.querySelector(".t-block");
    if (tBlock.innerText === "Giselle") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
});

checkBox.addEventListener("click", function () {
  for (const item of items) {
    const tBlock = item.querySelector(".t-block");
    const label1 = checkBox.labels[0].textContent;
    label1.textContent = "Giselle";
    if (tBlock.innerText === label1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
});
