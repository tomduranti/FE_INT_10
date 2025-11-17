const baseUrl = new URL("v1/current.json", "https://api.weatherapi.com/");

//TODO: add is_day:0 to display night colors
const state = {
    sunny: {from: "#00C2FF", trans: "#4FC3F7", to: "#FFF7E0", color: "#0D47A1", icon: "./assets/weather_icons/113.svg"},
    partly_cloudy: {from: "#78909C", trans:  "#B0BEC5", to: "#FFFFFF", color: "#1A237E", icon: "./assets/weather_icons/116.svg"}
}

function getUserData() {
    const userInput = document.querySelector("input[type='text']").value.toLowerCase();
    getUrlData(userInput);
    document.querySelector("input[type='text']").value = "";
}

async function getUrlData(query) {
    
    if (!query) return false;
    baseUrl.searchParams.set("key", "e07eb34967a64aa6b4c164614251311"); //API key
    baseUrl.searchParams.set("q", query);

    await fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(response => {
            return showData(prepData(response))
        })
        .catch(error => {
            console.error(error);
        })
}

function prepData(obj) {

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
                <img id="img_weather" alt="" src=${state[obj.current.condition.text.toLowerCase().replace(" ", "_")].icon}>
            </div>
            <div class="weather_info_container__hero__description">
                ${obj.current.condition.text.toLowerCase()}
            </div>
        </div>
        <div class="weather_info_container__degree">
            ${Math.floor(obj.current.temp_c)}°
        </div>
        `;

    document.getElementById("weather_info_wrapper").style.backgroundImage = `linear-gradient(to bottom, ${state[obj.current.condition.text.toLowerCase().replace(" ", "_")].from}, ${state[obj.current.condition.text.toLowerCase().replace(" ", "_")].trans}, ${state[obj.current.condition.text.toLowerCase().replace(" ", "_")].to})`;
    document.getElementById("weather_info_wrapper").style.color = state[obj.current.condition.text.toLowerCase().replace(" ", "_")].color;

    return markup;
}

function showData(data) {
    document.getElementById("weather_info_container").innerHTML = data;
}