document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Sidebar Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });

    // Change header style on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
