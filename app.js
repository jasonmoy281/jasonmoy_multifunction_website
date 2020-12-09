const modeCircle = document.querySelector(".circle");
const modeOval = document.querySelector(".oval");
const timeHTML = document.querySelector(".time");

modeCircle.addEventListener("click", () => {
  modeCircle.classList.toggle("circle-clicked");
  modeOval.classList.toggle("oval-clicked");
});

const time = new Date();
let currentHours = time.getHours();
let AMPM = "";
if (currentHours < 12) {
  AMPM = "AM";
} else {
  currentHours = currentHours - 12;
  AMPM = "PM";
}

let currentMinutes = time.getMinutes();

if (currentMinutes < 10) {
  currentMinutes = "0" + currentMinutes;
}

currentTime = currentHours + ":" + currentMinutes + " " + AMPM;
console.log(timeHTML);
timeHTML.innerText = currentTime;
