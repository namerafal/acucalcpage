console.log ("Witam wzzystkich. Ten kod jest już wrepozytoriom Git.")


let body = document.querySelector(".js-body");
let button = document.querySelector(".js-themeButton");
let themeName = document.querySelector(".js-themeName");
let header = document.querySelector(".js-topHeader");
let nav = document.querySelector(".js-navigation");
let strong = document.querySelector(".js-section__strong");
let footer = document.querySelector(".footer");

button.addEventListener("click", () => {
    button.classList.toggle("themeButton--dark");
    body.classList.toggle("body--dark");
    header.classList.toggle("topHeader--dark");
    strong.classList.toggle("section__strong--dark");
    nav.classList.toggle("navigation--dark");
    footer.classList.toggle("footer_dark");
    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});