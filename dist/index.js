const covidAlert = document.querySelector(".covid-alert");
const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", function () {
  covidAlert.remove();
});
