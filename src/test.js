"use strict";
const items = document.querySelectorAll(".item");
const buttonFilter = document.querySelector(".button");

// items.forEach(function (item) {
//   const tBlock = item.querySelector(".t-block");

//   if (tBlock.innerText === "Eklips") {
//     item.style.display = "block";
//   } else {
//     item.style.display = "none";
//   }
// });
console.log(buttonFilter);
buttonFilter.addEventListener("click", function () {
  for (const item of items) {
    const tBlock = item.querySelector(".t-block");
    if (tBlock.innerText === "Eklips") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    // items.forEach(function (item) {
    //   const tBlock = item.querySelector(".t-block");
    //   //const labelCheckbox = checkBox.querySelector(".label").innerText;
    //   if (tBlock.innerText === "Eklips") {
    //     item.style.display = "block";
    //   } else {
    //     item.style.display = "none";
    //   }
  }
});
