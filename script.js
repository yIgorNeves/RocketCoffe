const burger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))