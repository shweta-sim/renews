let apiKey = 'a35b8fcb87faf12df6fd2c3fec6758f8';
let city = 'stockholm';
let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`;

const temperature = document.querySelector('.temperature');
const myCity = document.querySelector('.city');

// let message = `It's ${data.list[0].main.temp} degrees in ${data.list[0].name}!`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    myCity.textContent = `${data.list[0].name}`;
    temperature.textContent = `${data.list[0].main.temp}`;
  })
  .catch(console.log);
