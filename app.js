const modeCircle = document.querySelector(".circle");
const modeOval = document.querySelector(".oval");
const timeHTML = document.querySelector(".time");
const worldTime = document.querySelector(".world-time");

modeCircle.addEventListener("click", () => {
  modeCircle.classList.toggle("circle-clicked");
  modeOval.classList.toggle("oval-clicked");
});

class currentTime {
  getUTCCurrentTime() {
    const time = new Date();
    let currentUTCHours = time.getUTCHours();
    let currentUTCMinutes = time.getUTCMinutes();
    return [currentUTCHours, currentUTCMinutes];
  }
  formatHour(hour) {
    let APM = "";
    if (hour > 12) {
      hour = hour - 12;
      APM = "PM";
    } else {
      APM = "AM";
    }
    return [hour, APM];
  }
  formatMinute(minute) {
    if (minute < 10) {
      minute = "0" + minute;
    }
    return minute;
  }
  convertToLocalTime(utc_offset) {
    let localHour = this.getUTCCurrentTime()[0] + utc_offset;
    if (localHour > 24) {
      localHour -= 24;
    } else if (localHour < 0) {
      localHour += 24;
    } else if (localHour == 0) {
      localHour += 12;
    }
    const localMinute = this.formatMinute(this.getUTCCurrentTime()[1]);
    let localHourArray = this.formatHour(localHour);
    const localTime =
      localHourArray[0] + ":" + localMinute + " " + localHourArray[1];
    return localTime;
  }
}

const localTime = new currentTime();
timeHTML.innerText = localTime.convertToLocalTime(8);
worldTime.children[0].children[0].innerText = localTime.convertToLocalTime(8);
worldTime.children[1].children[0].innerText = localTime.convertToLocalTime(-8);
worldTime.children[2].children[0].innerText = localTime.convertToLocalTime(-5);
