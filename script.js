//navigation dark and light mode ADD LATER


//bug where clicking the sides of the links closes the menu fix later
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".siderbarClose"),
      projects = document.querySelector(".projects_menu"),
      developments = document.querySelector(".dev_menu");




sidebarOpen.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.add("active");
});



sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});



projects.querySelector(":scope > a").addEventListener("click", (e) => {
    if (window.innerWidth <= 800) {
        e.preventDefault();
        e.stopPropagation();

        projects.classList.toggle("open");

        if (projects.classList.contains("open")) {
            developments.classList.add("open");
        } else {
            developments.classList.remove("open");
        }
    }
});



developments.querySelector(":scope > a").addEventListener("click", (e) => {

    if (window.innerWidth <= 800) {
        e.preventDefault();
        e.stopPropagation();

        developments.classList.toggle("open");
    }

});



body.addEventListener("click", (e) => {

    if (
        !e.target.closest(".sidebarOpen") &&
        !e.target.closest(".menu")
    ) {
        nav.classList.remove("active");
    }

});