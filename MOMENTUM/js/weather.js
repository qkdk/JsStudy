const API_KEY = "9b8ad1db6939353ce30ce335925a60aa";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((respons) => respons.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can`t find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
