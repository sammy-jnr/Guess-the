
let homepageMenu = document.getElementById("homepageMenu")
let homepage_closeIcon = document.getElementById("homepage_closeIcon")
let homepage_menuIcon = document.getElementById("homepage_menuIcon")
function closeMenuTabs(){
    homepageMenu.style.top = `${-100}%`
    homepageMenu.style.transition = "all 0.45s";
}

homepage_menuIcon.addEventListener("click", ()=>{
    homepageMenu.style.transition = "all 0.45s";
    homepageMenu.style.top = 0
})
homepage_closeIcon.addEventListener("click", closeMenuTabs)