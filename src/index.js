let now = new Date();

let h3 = document.querySelector("h3");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();

if (hour < 10) {
  hour = `0${hour}`;
}

if (min < 10) {
  min = `0${min}`;
}
h3.innerHTML = `${day} ${hour}:${min}`;

function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "096a82d1a0dc6fe53e18dba6d1f4b25b";
  let city = document.querySelector("#search-data").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);