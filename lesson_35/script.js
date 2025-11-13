const API_KEY = "e07eb34967a64aa6b4c164614251311";
let q = "";
let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

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
        .catch(error => {
            console.error(error);
        })
        .then((response) => {
            return showData(response)}
        )
}

//TODO: add all properties
function showData(data) {
    let markup = "";
    markup += `
        <div class="city_name">${data.location.name}, ${data.location.country}</div>
    `;

    document.body.append(markup);
}

