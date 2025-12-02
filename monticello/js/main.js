function scrollToSection() {
    const btn = document.getElementById("scroll_down");
    const section = document.getElementById("projects_line_breaker");
    section.scrollIntoView();
}

/*MAP SECTION*/
let map;

function initMap() {
    map = L.map('map').setView([40.66, -73.88], 13);

    const pin = L.icon({
        iconUrl: '../assets/maps/pin.svg',

        iconSize: [106, 106], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

    });
    L.marker([40.681179, -73.904670], { icon: pin }).addTo(map);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

document.addEventListener("DOMContentLoaded", () => {
    initMap();
})