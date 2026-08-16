const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");


/* Mobile Navigation */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after selecting a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* Dark / Light Theme */

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});


/* Remember selected theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeToggle.textContent = "☀️";

}