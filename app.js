//saidalixon.uz

"use strict";

const form = document.querySelector("form"),
  input = document.querySelector("input"),
  searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", () => {
  input.classList.toggle("active");
  input.focus();
});
