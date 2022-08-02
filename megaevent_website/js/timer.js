var countDownDate = new Date("Aug 6, 2022 21:00").getTime();

var interval = setInterval(() => {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((distance / 1000 / 60) % 60);
  var seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".timer").innerHTML = "";
  }
});
