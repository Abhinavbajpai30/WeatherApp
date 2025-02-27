let searchBtn = document.querySelector("#search-btn");
let loc = document.querySelector("#location");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let weatherIcon = document.querySelector(".weather-icon");
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind");
let weatherCard = document.querySelector(".weather");
let errorMsg = document.querySelector("#error-msg")

let updateWeather = async () => {
    cityInput = loc.value.toLowerCase();
    if(cityInput=="") cityInput="new york";

    let URL = `https://weather-app-two-hazel-95.vercel.app/api/weather?city=${cityInput}`;

    let rawData = await fetch(URL);
    let data = await rawData.json();

    // console.log(rawData)
    // console.log(data);

    if(data.cod>=400) {
        errorMsg.classList.remove("hide");
        return;
    }

    if(data.cod==200) {
        city.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp)}°C`
        weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`
        humidity.innerText = `${data.main.humidity}%`;
        wind.innerText = `${data.wind.speed} m/s`;

        errorMsg.classList.add("hide");
    }
};

window.onload = updateWeather;

searchBtn.addEventListener("click", updateWeather);

loc.addEventListener("keydown", (event) => {
    if(event.key==="Enter") {
        event.preventDefault();
        searchBtn.click();
    }
})