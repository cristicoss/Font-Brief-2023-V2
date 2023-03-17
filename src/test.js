"use strict";
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  const tBlock = item.querySelector(".t-block");

  if (tBlock.innerText === "Eklips") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
});
