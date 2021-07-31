// const moment = require("moment");

(function () {
  setInterval(() => calculateRemainingTime(), 1000);

  function calculateRemainingTime() {
    const totalTimeAvailableInSeconds = 86400;
    let currentTime = moment().format("LTS");
// console.log(currentTime)
    if (currentTime.indexOf(":") === 1) {
      currentTime = "0" + currentTime;
    }

    let meridiem = currentTime.substr(9, 12).toLowerCase();
    let hour = Number(currentTime.substr(0, 2));
    let minute = Number(currentTime.substr(3, 2));
    let second = Number(currentTime.substr(6, 2));

    if (meridiem === "am" && hour === 12) hour -= 12;
    else if (meridiem === "pm" && hour !== 12) hour += 12;

    let secondsElapsed = hour * 3600 + minute * 60 + second;
    const remainingTimeInSeconds = totalTimeAvailableInSeconds - secondsElapsed;
    document.getElementById("timer").innerHTML = remainingTimeInSeconds;
    document.getElementById("message").innerHTML = 'seconds remaining';

  }
})();
