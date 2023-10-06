//Baterry
tag_battery_level = document.querySelector("h2#battery_level");

setInterval(function () {
  navigator.getBattery().then((battery) => {
    battery_level = String(battery.level).split(".,");
    tag_battery_level.innerHTML = `${battery_level * 100}% `;
  });
}, 10);
// Tanggal
window.setTimeout("tgl()", 1000);
function tgl() {
  const myMonths = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const myDays = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  var tgl = new Date();
  var day = tgl.getDate();
  var bulan = tgl.getMonth();
  var thisDay = tgl.getDay();
  var ThisDay = myDays[thisDay];
  var yy = tgl.getYear();
  var year = yy < 1000 ? yy + 1900 : yy;
  var tanggal = `${day} ${myMonths[bulan]} ${year}`;
  setTimeout("tgl()", 1000);
  document.getElementById("tanggal").innerHTML = tanggal;
}

// Get Ip
$.getJSON("https://api.ipify.org?format=json", function (data) {
  $("#ipaddress").html(data.ip);
});

//Visit

//Jam
let JamDigital = document.querySelector("h2#jamdinding");
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
  JamDigital.innerHTML = jaM + ":" + mEnit + ":" + detIk + " " + "WIB";
}, 250);
