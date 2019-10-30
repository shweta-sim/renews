const dashboardDate = document.querySelector('#date');
const dashboardTime = document.querySelector('#time');

// DATE
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + ' / ' + dd + ' / ' + yyyy;
dashboardDate.innerHTML = today;

// TIME
function updateClock() {
  var today = new Date();

  var currentHours = today.getHours();
  var currentMinutes = today.getMinutes();
  var currentSeconds = today.getSeconds();

  currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

  var timeOfDay = currentHours < 12 ? 'AM' : 'PM';

  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  currentHours = currentHours == 0 ? 12 : currentHours;

  var currentTimeString =
    currentHours +
    ':' +
    currentMinutes +
    ':' +
    currentSeconds +
    ' ' +
    timeOfDay;

  dashboardTime.innerHTML = currentTimeString;
}
