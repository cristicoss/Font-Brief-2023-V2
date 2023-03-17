"use strict";
const items = document.querySelectorAll(".item");
const checkBox = document.querySelector(".checkbox");

// items.forEach(function (item) {
//   const tBlock = item.querySelector(".t-block");

//   if (tBlock.innerText === "Eklips") {
//     item.style.display = "block";
//   } else {
//     item.style.display = "none";
//   }
// });

checkBox.addEventListener("click", function () {
  items.forEach(function (item) {
    const tBlock = item.querySelector(".t-block");
    const labelCheckbox = checkBox.querySelector(".label").innerText;
    if (tBlock.innerText === "Giselle") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
