let hamburger = document.querySelector(".hamburger");
let header = document.querySelector(".header");
let a = document.querySelectorAll(".navigation_link")
let root = document.documentElement;
let navbg = document.querySelector(".nav-burger");

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("enabled")) {
        hamburger.classList.remove("enabled");
        hamburger.classList.add("disabled");
        header.classList.remove("activated");
        navbg.classList.remove("opened")
        for(ab of a) {
            ab.classList.remove("acti");
            ab.classList.add("a");
        }

    } else {
        hamburger.classList.add("enabled");
        hamburger.classList.remove("disabled");
        header.classList.add("activated");
        navbg.classList.add("opened")
        for(ab of a) {
            ab.classList.add("acti");
            ab.classList.remove("a");
        }
    };
});