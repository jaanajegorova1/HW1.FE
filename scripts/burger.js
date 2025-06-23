const burgerOpenerButton = document.querySelector("#burger-opener");
const burgerIcon = document.querySelector("#burger-icon");
const burger = document.querySelector("#burger");

// const linksInBurger = document.querySelectorAll("#burger a");
const linksWrapperInBurger = document.querySelector("#burger ul");

let opened = false;

function openBurgerMenu() {
    burgerIcon.setAttribute("src", "img/burger-close.png");
    burger.classList.remove("burger__closed");
    burger.classList.add("burger__opened");
}

function closeBurgerMenu() {
    burgerIcon.setAttribute("src", "img/burger-open.png");
    burger.classList.add("burger__closed");
    burger.classList.remove("burger__opened");
}

burgerOpenerButton.addEventListener("click", function (event) {
    opened = !opened;

    if (opened) openBurgerMenu();
    else closeBurgerMenu();
});

// Array.from(linksInBurger).forEach((link) => {
// 	link.addEventListener("click", function (event) {
// 		closeBurgerMenu();
// 	});
// });

linksWrapperInBurger.addEventListener("click", function (event) {
    if (event.srcElement.className === "burger__link") {
        closeBurgerMenu();
    }
});