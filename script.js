const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".navmenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})