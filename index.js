
var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-60%"
}

// Theme Toggle Logic
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('nostra-theme', newTheme);

    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// Initialize Theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('nostra-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
});

document.querySelectorAll(".new-arrival button")
    .forEach(function (buy) {
        buy.addEventListener("click", function () {
            window.location.href = "buy.html";
        });
    });

document.querySelectorAll(".header-button")
    .forEach(function (buy) {
        buy.addEventListener("click", function () {
            window.location.href = "buy.html";
        });
    });