const weatherInput = document.getElementById("weatherInput");
const WeatherInformation = document.getElementById("WeatherInformation");

/**
 * onload call calling localStorage
 */
WeatherInformation.innerHTML = localStorage.getItem("weatherDetails");
document.body.style.backgroundImage = `url('${localStorage.getItem(
  "BackgroundImage"
)}')`;

// i am using geo location Api calling onclick
function wetherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
    WeatherInformation.innerHTML = "please allow the location";
  }
}

function showPosition(position) {
  console.log(position.coords.latitude + " " + position.coords.longitude);
  //get the url from https://api.openweathermap.org
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.latitude}&appid=4a26599f6044d0ebbfb2ebbd4a78463f`;
  //calling function that is fatching api data by custom url
  fetchData(url);
}

//calling function onclick
function WeatherBySearch() {
  //api key
  const apiKey = "4a26599f6044d0ebbfb2ebbd4a78463f";
  //getting city from input feild
  const city = weatherInput.value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //caling function
  fetchData(url);
}

function fetchData(url) {
  const fetchedApi = fetch(url);
  fetchedApi
    .then((response) => response.json())
    .then((apiData) => {
      console.log(apiData);
      WeatherInformation.classList.add("fade-in");
      const weatherStorage = `Country :${apiData.sys.country} <br> City: ${apiData.name}  <br> Temprature: ${apiData.main.temp} <br> Weather: ${apiData.weather[0].description} <br> Wind Speed: ${apiData.wind.speed}`;
      localStorage.setItem("weatherDetails", weatherStorage);
      WeatherInformation.innerHTML = localStorage.getItem("weatherDetails");
      weatherInput.value = "";
      const newImage = apiData.weather[0].description + ".jpg";
      localStorage.setItem("BackgroundImage", newImage);
      document.body.style.backgroundImage = `url('${localStorage.getItem(
        "BackgroundImage"
      )}')`;
    })
    .catch((error) => {
      console.log(error);
      WeatherInformation.innerHTML = "City not found";
    });
}
