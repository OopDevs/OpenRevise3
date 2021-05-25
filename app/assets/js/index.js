const navbarMenu = document.querySelector(".navbar-menu")
const mobileMenu = document.querySelector("#mobile-navbar")
const navBar = document.querySelector(".navBar");
const logo = document.querySelector(".logo")
const navbarItema = document.querySelectorAll(".navbar-item")

mobileMenu.addEventListener("click", ()=> {
    navbarMenu.classList.toggle("active")
})

window.onscroll = function () { 
    console.log(window.scrollY);
    // Change the nav bar color when scrolling
    if (window.scrollY > 400 ) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("navBar");
        logo.classList.add("colored-logo")
        logo.classList.remove("logo")
        navbarItema.forEach((navbarItem)=>{
            navbarItem.classList.add("colored-item")
            navbarItem.classList.remove("navbar-item")
        })
        
    } 
    else {
        navBar.classList.add("navBar");
        navBar.classList.remove("nav-colored");
        logo.classList.add("logo")
        logo.classList.remove("colored-logo");
        navbarItema.forEach((navbarItem)=>{
            navbarItem.classList.add("navbar-item")
            navbarItem.classList.remove("colored-item")
        })
    }
};