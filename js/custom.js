// Not required for animation, just provides "Retype" button functionality

// Animation restart method from CSS-Tricks:
// @link https://css-tricks.com/restart-css-animation/

const typeBtn = document.querySelector(".type-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");
const word = document.querySelector("h1 span");

// reset the transition by...
typeBtn.addEventListener(
 "click",
 function (e) {
  e.preventDefault;

  // -> removing the class
  word.classList.remove("animating");

  // -> triggering reflow /* The actual magic */
  void word.offsetWidth;

  // -> and re-adding the class
  word.classList.add("animating");
 },
 false
);


portfolioBtn.onclick = function () {
 location.href = "https://portfolio-projects-01.herokuapp.com/";
};