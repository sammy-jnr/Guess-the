
let homepageMenu = document.getElementById("homepageMenu")
let homepage_closeIcon = document.getElementById("homepage_closeIcon")
let homepage_menuIcon = document.getElementById("homepage_menuIcon")
function closeMenuTabs(){
    homepageMenu.style.top = `${-100}%`
    homepageMenu.style.transition = "all 0.1s"; 
}

homepage_menuIcon.addEventListener("click", ()=>{
    homepageMenu.style.transition = "all 0.1s";
    homepageMenu.style.top = 0
})
homepage_closeIcon.addEventListener("click", closeMenuTabs)

function changeWord(){
    let changingText = document.getElementById("changingText")
    let infoArray = ["Car","Footballer","Country"]
    let i = 0;
    infoArray.forEach(function(text,index){
        setTimeout(function(){
            changingText.innerHTML = text
            console.log(text)
        },index*2000);
    });
}
setTimeout(setInterval(changeWord,6200),2000);
