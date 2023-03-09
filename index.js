"use script";

const openNav = document.querySelector(".open-nav");
const element = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const languages = document.querySelector(".languages");

openNav.addEventListener("click", () => {
  languages.style.display = "inline-block";
  console.log("button ishlavoti");
});

// let openMenuBtn = function() {
//     // languages.setAttribute('style', 'border: 1px solid red;')
//     console.log('button ishlavotiii1');
//     console.log(openNav.style);
//     openNav.style.display = "none";
// };

let closeMenuBtn = function () {
  console.log("button ishlavoti2");
  console.log(openNav.style);
  languages.style.display = "inline-block";
};

openNav.addEventListener("click", closeMenuBtn);
// openNav.addEventListener('click', openMenuBtn);

// ========================================================================================

// "use script";

// let maintTitle = document.querySelector(".open-nav");
// let maintDesc = document.querySelector(".close-nav");
// let maintMore = document.querySelector(".main__more");

// let maintRight = document.querySelector(".languages");

// let openBtn = document.getElementById("main__btn");
// let closeBtn = document.getElementById("close__btn");

// let openMenuBtn = function () {
//     maintMore.style.display = "block";
// };

// let closeMenuBtn = function () {
//     maintMore.style.display = "none";
// };

// openBtn.addEventListener("click", openMenuBtn);
// closeBtn.addEventListener("click", closeMenuBtn);
