import weatherDayStates from './weatherDayStates.js';

async function getWeather() {

    const userInput = document.querySelector("input[type='text']").value.toLowerCase();
    if (!userInput) return false;
    document.querySelector("input[type='text']").value = "";

    const URL = new URL("v1/current.json", "https://api.weatherapi.com/");
    URL.searchParams.set("key", "e07eb34967a64aa6b4c164614251311"); //API key
    URL.searchParams.set("q", userInput);

    await fetch(URL)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(response => {
            return showWeather(response);
        })
        .catch(error => {
            console.error(error);
        })
}

function showWeather(obj) {

    const fulltime = new Date(obj.location.localtime).toTimeString().split(" ");

    let markup = "";
    markup += `
        <div class="weather_info_container__header">
            <div class="weather_info_container__header__location">
                ${obj.location.name}
            </div>    
            <div class="weather_info_container__header__time">
                ${fulltime[0].slice(0, 5)}
            </div>
        </div>
        <div class="weather_info_container__hero">
            <div class="weather_info_container__hero__img_container">
                <img id="img_weather" alt="" src=${weatherDayStates[obj.current.condition.code].icon}>
            </div>
            <div class="weather_info_container__hero__description">
                ${obj.current.condition.text.toLowerCase()}
            </div>
        </div>
        <div class="weather_info_container__degree">
            ${Math.floor(obj.current.temp_c)}°
        </div>
        `;

    document.getElementById("weather_info_wrapper").style.backgroundImage = `linear-gradient(to bottom, ${weatherDayStates[obj.current.condition.code].from}, ${weatherDayStates[obj.current.condition.code].trans}, ${weatherDayStates[obj.current.condition.code].to})`;
    document.getElementById("weather_info_wrapper").style.color = weatherDayStates[obj.current.condition.code].color;

    document.getElementById("weather_info_container").innerHTML = markup;
}

//add global scope to functions used in html
window.getWeather = getWeather;