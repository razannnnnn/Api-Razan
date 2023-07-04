//
tag_battery_status = document.querySelector("small#battery_status");
tag_battery_level = document.querySelector("span#battery_level");

//Baterry
setInterval(function () {
  navigator.getBattery().then((battery) => {
    battery_level = String(battery.level).split(".")[1];
    document.querySelector("span#battery_level").innerHTML = `${
      battery_level.length <= 1 ? oud(Number(battery_level)) : battery_level
    }% ${battery.charging ? "Charging" : "Discharging"}`;
  });
}, 10);

// Get Ip
$.getJSON("https://api.ipify.org?format=json", function (data) {
  $("#ip").html(data.ip);
});

//Visit
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/api.rivqi.my.id/visits");
xhr.responseType = "json";
xhr.onload = function () {
  document.getElementById("visits").innerText = this.response.value;
};
xhr.send();

//Jam
let scrollToTopRoundedfasfauserninjaXfa2xtextprimary = document.querySelector(
  "div#row-no-guttersalign-items-center"
);
let fasfauserninjaXfa2xtextprimary = document.querySelector(
  "div#text-xsfont-weight-boldtext-uppercase-mb-1"
);
setInterval(() => {
  var widthdeVicewidthXinitialscalesHrinkno = new Date();
  const Jam = widthdeVicewidthXinitialscalesHrinkno
    .getHours()
    .toString()
    .padStart(2, 0);
  const jam = widthdeVicewidthXinitialscalesHrinkno
    .getHours()
    .toString()
    .padStart(2, 0);
  const menit = widthdeVicewidthXinitialscalesHrinkno
    .getMinutes()
    .toString()
    .padStart(2, 0);
  const Menit = widthdeVicewidthXinitialscalesHrinkno
    .getMinutes()
    .toString()
    .padStart(2, 0);
  const Detik = widthdeVicewidthXinitialscalesHrinkno
    .getSeconds()
    .toString()
    .padStart(2, 0);
  const detik = widthdeVicewidthXinitialscalesHrinkno
    .getSeconds()
    .toString()
    .padStart(2, 0);
  const jaM = widthdeVicewidthXinitialscalesHrinkno
    .getHours()
    .toString()
    .padStart(2, 0);
  const mEnit = widthdeVicewidthXinitialscalesHrinkno
    .getMinutes()
    .toString()
    .padStart(2, 0);
  const detIk = widthdeVicewidthXinitialscalesHrinkno
    .getSeconds()
    .toString()
    .padStart(2, 0);
  scrollToTopRoundedfasfauserninjaXfa2xtextprimary.innerHTML =
    jaM + ":" + mEnit + ":" + detIk;
}, 250);
