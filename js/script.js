{
    const welcome = () => {
        console.log("Witam wzzystkich. Ten kod jest już w repozytorium Git.")
    };

    const toggleTheme = (themeButton) => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        const header = document.querySelector(".js-topHeader");
        const nav = document.querySelector(".js-navigation");
        const strong = document.querySelector(".js-section__strong");
        const footer = document.querySelector(".footer");

        themeButton.classList.toggle("themeButton--dark");
        body.classList.toggle("body--dark");
        header.classList.toggle("topHeader--dark");
        strong.classList.toggle("section__strong--dark");
        nav.classList.toggle("navigation--dark");
        footer.classList.toggle("footer_dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const themeButton = document.querySelector(".js-themeButton");
        themeButton.addEventListener("click", () => toggleTheme(themeButton));

        welcome();
    };

    init();

};