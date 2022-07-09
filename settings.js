let settingspageMenu = document.getElementById("settingspageMenu")
let settingspage_closeIcon = document.getElementById("settingspage_closeIcon")
let settingspage_menuIcon = document.getElementById("settingspage_menuIcon")
function closeMenuTabs(){
    settingspageMenu.style.top = `${-100}%`
    settingspageMenu.style.transition = "all 0.45s";
}
settingspage_menuIcon.addEventListener("click", ()=>{
    settingspageMenu.style.transition = "all 0.45s";
    settingspageMenu.style.top = 0
})
settingspage_closeIcon.addEventListener("click", closeMenuTabs)

let difficultySection_header = document.getElementById("difficultySection_header")
let difficultySection_body = document.getElementById("difficultySection_body")
let difficultySection_header_text = document.getElementById("difficultySection_header_text")
let downIcon = document.getElementById("downIcon")
let upIcon = document.getElementById("upIcon")

difficultySection_header.addEventListener("click", ()=>{
    if(difficultySection_header.classList.contains("difficulty_opened")){
        difficultySection_header.classList.remove("difficulty_opened")
        difficultySection_body.style.display = "none"
        downIcon.style.display = "block"
        upIcon.style.display = "none"
        difficultySection_header.style.backgroundColor = "#47475a28"
    }
    else{
        difficultySection_header.classList.add("difficulty_opened")
        difficultySection_body.style.display = "flex"
        downIcon.style.display = "none"
        upIcon.style.display = "block"
        difficultySection_header.style.backgroundColor = "transparent"

    }
})

let difficulty_easy = document.getElementById("difficulty_easy")
let difficulty_medium = document.getElementById("difficulty_medium")
let difficulty_hard = document.getElementById("difficulty_hard")
let difficulty_asian = document.getElementById("difficulty_asian")

let difficulty_easy_inner = document.getElementById("difficulty_easy_inner")
let difficulty_medium_inner = document.getElementById("difficulty_medium_inner")
let difficulty_hard_inner = document.getElementById("difficulty_hard_inner")
let difficulty_asian_inner = document.getElementById("difficulty_asian_inner")

function removeAllDifficulty(){
    difficulty_easy_inner.style.display = "none"
    difficulty_medium_inner.style.display = "none"
    difficulty_hard_inner.style.display = "none"
    difficulty_asian_inner.style.display = "none"
    difficulty_easy.style.border = "none"
    difficulty_medium.style.border = "none"
    difficulty_hard.style.border = "none"
    difficulty_asian.style.border = "none"
}

let Difficulty;
localStorage.setItem("Difficulty", "medium")

difficulty_easy.addEventListener("click",()=>{
    removeAllDifficulty()
    difficulty_easy_inner.style.display = "block"
    difficulty_easy.style.border = "1px solid #e6e6f54a"
    localStorage.setItem("Difficulty", "easy")
})

difficulty_medium.addEventListener("click",()=>{
    removeAllDifficulty()
    difficulty_medium_inner.style.display = "block"
    difficulty_medium.style.border = "1px solid #e6e6f54a"
    localStorage.setItem("Difficulty", "medium")
})

difficulty_hard.addEventListener("click",()=>{
    removeAllDifficulty()
    difficulty_hard_inner.style.display = "block"
    difficulty_hard.style.border = "1px solid #e6e6f54a"
    localStorage.setItem("Difficulty", "hard")
})

difficulty_asian.addEventListener("click",()=>{
    removeAllDifficulty()
    difficulty_asian_inner.style.display = "block"
    difficulty_asian.style.border = "1px solid #e6e6f54a"
    localStorage.setItem("Difficulty", "asian")
})

let cars_category = document.getElementById("cars_category")
let cars_checkmark = document.getElementById("cars_checkmark")

cars_category.addEventListener("click", checkCars)
function checkCars(){
    if(cars_category.classList.contains("checked")){
        cars_checkmark.style.display = "none"
        cars_category.style.color = "#e6e6f5"
        cars_category.classList.remove("checked")
        selectedCategoryArray.splice(selectedCategoryArray.indexOf("Cars"),1)
    }else{
        cars_category.classList.add("checked")
        cars_checkmark.style.display = "block"
        cars_category.style.color = "#4c8bf5"
        if(selectedCategoryArray.includes("Cars")){return}
        selectedCategoryArray.push("Cars")
    }
    showSelected()
}
let footballers_category = document.getElementById("footballers_category")
let footballers_checkmark = document.getElementById("footballers_checkmark")

footballers_category.addEventListener("click", checkFootballers)
function checkFootballers(){
    if(footballers_category.classList.contains("checked")){
        footballers_checkmark.style.display = "none"
        footballers_category.style.color = "#e6e6f5"
        footballers_category.classList.remove("checked")
        selectedCategoryArray.splice(selectedCategoryArray.indexOf("Footballers"),1)
    }else{
        footballers_category.classList.add("checked")
        footballers_checkmark.style.display = "block"
        footballers_category.style.color = "#4c8bf5"
        if(selectedCategoryArray.includes("Footballers")){return}
        selectedCategoryArray.push("Footballers")
    }
    showSelected()
}
let countries_category = document.getElementById("countries_category")
let countries_checkmark = document.getElementById("countries_checkmark")

countries_category.addEventListener("click", checkCountries)
function checkCountries(){
    if(countries_category.classList.contains("checked")){
        countries_checkmark.style.display = "none"
        countries_category.style.color = "#e6e6f5"
        countries_category.classList.remove("checked")
        selectedCategoryArray.splice(selectedCategoryArray.indexOf("Countries"),1)
    }else{
        countries_category.classList.add("checked")
        countries_checkmark.style.display = "block"
        countries_category.style.color = "#4c8bf5"
        if(selectedCategoryArray.includes("Countries")){return}
        selectedCategoryArray.push("Countries")
    }
    showSelected()
}

let selectedCategoryArray = []

let dislaySelected = document.getElementById("dislaySelected")
let tempText = document.getElementById("tempText")

function showSelected(){
    dislaySelected.innerHTML = ""
    if(selectedCategoryArray.length == 0){
        let temptextdiv = document.createElement("div")
        temptextdiv.id = "tempText"
        temptextdiv.innerHTML = "no categories selected"
        dislaySelected.appendChild(temptextdiv)
    }
    for(let i = 0; i<selectedCategoryArray.length;i++){
        let selected = selectedCategoryArray[i]
        let newDiv = document.createElement("div")
        newDiv.classList.add("newDiv")
        newDiv.innerHTML = selected
        newDiv.addEventListener("click", ()=>{
            let selectedFunc = `check${newDiv.innerHTML}`
            window[selectedFunc]()
        })
        dislaySelected.appendChild(newDiv)
    }
    localStorage.setItem("selectedCategoryArray", selectedCategoryArray)
}

window.addEventListener("load", ()=>{
    if (!localStorage.getItem("selectedCategoryArray").length > 0){return}
    else{
        let tempselectedCategoryArray = localStorage.getItem("selectedCategoryArray")
        selectedCategoryArray = tempselectedCategoryArray.split(",")
        console.log(selectedCategoryArray)
        showSelected()
        if(selectedCategoryArray.includes("Footballers")){checkFootballers()}
        if(selectedCategoryArray.includes("Countries")){checkCountries()}
        if(selectedCategoryArray.includes("Cars")){checkCars()}
    }
})
