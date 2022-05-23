"use strict";
const error = document.querySelector(".error");
const map = document.getElementById("map");
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    const coords = [latitude, longitude];
    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords).addTo(map).bindPopup("You are here!").openPopup();
  },
  function () {
    error.classList.remove("hidden");
  }
);
