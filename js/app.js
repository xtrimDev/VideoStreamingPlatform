
if (1 == 1 && Swiper)
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

var search = document.querySelector("#Sb");
var searchBox = document.querySelector("#search-input");
var cross = document.querySelector("#cross");
var searchbutton = document.querySelector("#search-button");

searchbutton.addEventListener("click", () => {
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    }
});

const subMenu = document.getElementById('subMenu');

function toggleMenu() {
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
}
