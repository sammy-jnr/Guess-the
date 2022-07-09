
let homepageMenu = document.getElementById("homepageMenu")
let homepage_closeIcon = document.getElementById("homepage_closeIcon")
let homepage_menuIcon = document.getElementById("homepage_menuIcon")
function closeMenuTabs(){
    homepageMenu.style.top = `${-100}%`
    homepageMenu.style.transition = "all 0.35s"; 
}

homepage_menuIcon.addEventListener("click", ()=>{
    homepageMenu.style.transition = "all 0.35s";
    homepageMenu.style.top = 0
})
homepage_closeIcon.addEventListener("click", closeMenuTabs)




function wordChange(){
    let infoArray = ["Car","Footballer","Country"]
    let text = ""
    let changingText = document.getElementById("changingText")
    let i = 0;

    function initialfunc(){
        for(let j = 0; j< infoArray.length;j++){
            setTimeout(function(){
                text = infoArray[j]
            },j*5000)
        }
    }
    initialfunc()
    setInterval(initialfunc,15000)


    function increaseword(){
        if(i<=text.length){
            changingText.innerHTML = text.substring(0,i);
            i++;
            setTimeout(increaseword,100)
        }else{
            setTimeout(decreaseWord,1000) 
        }
    }
    function decreaseWord(){
        if(i <= text.length +1 && i> -1){
            changingText.innerHTML = text.substring(0,i);
            i--;
            setTimeout(decreaseWord,100)
        }
    }
    increaseword()
    setInterval(increaseword,5000)
}
setTimeout(wordChange,1000)