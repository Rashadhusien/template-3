// skills
let skills = document.querySelector(".our-skills");
let prospans = document.querySelectorAll(".skill span");
// stats
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let started = false;
//Arrow button
let arrow = document.querySelector(".button-top");
let icon = document.querySelector(".button-top i");
let buttonShow = document.querySelector(".button-top.show");

// form
let mainForm = document.getElementById("main-form");
let emailInputValue = document.getElementById("main-form-input").value;
let emailInput = document.getElementById("main-form-input");

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= skills.offsetTop - 250) {
    prospans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.style.transition = "width 1s linear";
    });
  }

  this.scrollY >= 1000
    ? (arrow.style.display = "block")
    : (arrow.style.display = "none");
};

function startCount(el) {
  let progress = el.dataset.progress;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == progress) {
      clearInterval(count);
    }
  }, 2000 / progress);
}

mainForm.onsubmit = function () {
  let emailRE = /\w+@\w+.\w+/gi;
  let testMatch = emailRE.test(emailInputValue);
  if (testMatch === false) {
    emailInput.style.borderBottom = "2px solid tomato";
    return false;
  }
};

// The end of the year date to countdown to
// 1000 meiiisecounds = 1 secounds

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();

  // Find the date differnce Between Now and countdown Date
  let dateDiff = countDownDate - dateNow;

  // get time units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".unit .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".unit .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".unit .minuts").innerHTML =
    min < 10 ? `0${min}` : min;
  document.querySelector(".unit .seconds").innerHTML =
    sec < 10 ? `0${sec}` : sec;

  document.querySelector(".unit .days").style.paddingLeft = "5px";

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
