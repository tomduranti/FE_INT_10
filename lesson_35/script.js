const API_KEY = "e07eb34967a64aa6b4c164614251311";
let q = "";
let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

function getUserData(str, url) {
    const strInput = document.querySelector("input[type='text']").value.toLowerCase();
    str += strInput;
    getUrlData(url, str);
    document.querySelector("input[type='text']").value = ""; //clearing the input text
}

async function getUrlData(url, q) {
    await fetch(url + q)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((response) => {
            return showData(response)
            })
        .catch(error => {
            console.error(error);
        })
}

//TODO: add all properties
function showData(data) {

    const fulldate = new Date(data.location.localtime).toDateString().split(" ");
    const fulltime = new Date(data.location.localtime).toTimeString().split(" ");

    let markup = "";
    markup += `
        <div class="weather_info_container__date_time">
            <div class="weather_info_container__date_time__date">
                ${fulldate[0]} ${fulldate[2]} ${fulldate[1]} 
            </div>
            <div class="weather_info_container__date_time__time">
                ${fulltime[0].slice(0, 5)}
            </div>
        </div>
        <div class="weather_info_container__location">
            ${data.location.name}, ${data.location.country}
        </div>
        <div class="weather_info_container__main">
            <div class="weather_info_container__main__degree">
                ${Math.floor(data.current.temp_c)}°C
            </div>
            <div class="weather_info_container__main__weather_condition">
                ${data.current.condition.text.toLowerCase()}
            </div>
        </div>
        `;

    document.getElementById("weather_info_container").innerHTML = markup;
}

