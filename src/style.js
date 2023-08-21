let icon1 = document.getElementById("icon1");
let menu1 = document.getElementById("menu1");
const showMenu1 = (flag) => {
    if (flag) {
        icon1.classList.toggle("rotate-180");
        menu1.classList.toggle("hidden");
    }
};
let menu2 = document.getElementById("menu2");
let icon2 = document.getElementById("icon2");

const showMenu2 = (flag) => {
    if (flag) {
        icon2.classList.toggle("rotate-180");
        menu2.classList.toggle("hidden");
    }
};
let menu3 = document.getElementById("menu3");
let icon3 = document.getElementById("icon3");

const showMenu3 = (flag) => {
    if (flag) {
        icon3.classList.toggle("rotate-180");
        menu3.classList.toggle("hidden");
    }
};
let menu4 = document.getElementById("menu4");
let icon4 = document.getElementById("icon4");

const showMenu4 = (flag) => {
    if (flag) {
        icon4.classList.toggle("rotate-180");
        menu4.classList.toggle("hidden");
    }
};
let Main = document.getElementById("Main");
let open = document.getElementById("open");
let close = document.getElementById("close");

const showNav = (flag) => {
    if (flag) {
        Main.classList.toggle("-translate-x-full");
        Main.classList.toggle("translate-x-0");
        open.classList.toggle("hidden");
        close.classList.toggle("hidden");
    }
};
