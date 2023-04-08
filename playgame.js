import { cars, football_clubs, footballers, countries } from "./infoDetails.js";

let playGamePageMenu = document.getElementById("playGamePageMenu")
let playgamepage_closeIcon = document.getElementById("playgamepage_closeIcon")
let playgamepage_menuIcon = document.getElementById("playgamepage_menuIcon")
function closeMenuTabs(){
    playGamePageMenu.style.top = `${-100}%`
    playGamePageMenu.style.transition = "all 0.10s";
}
playgamepage_menuIcon.addEventListener("click", ()=>{
    playGamePageMenu.style.transition = "all 0.10s";
    playGamePageMenu.style.top = 0
})
playgamepage_closeIcon.addEventListener("click", closeMenuTabs)

let displaySelected = document.getElementById("displaySelected")
let difficultySelection = document.getElementById("difficultySelection")

displaySelected.addEventListener("click", ()=>{
    if(difficultySelection.style.display == "none"){
        difficultySelection.style.display = "block"
    }else{
        difficultySelection.style.display = "none"
    }
})

let easy_selection = document.getElementById("easy_selection")
let medium_selection = document.getElementById("medium_selection")
let hard_selection = document.getElementById("hard_selection")
let asian_selection = document.getElementById("asian_selection")

let Difficulty = localStorage.getItem("Difficulty")

function checkDifficulty(){
    if(Difficulty == "easy"){selectEasy()}
    else if(Difficulty == "medium"){selectMedium()}
    else if(Difficulty == "hard"){selectHard()}
    else if(Difficulty == "asian"){selectAsian()}
    else{return}
}
checkDifficulty()


function removeSelected(){
    easy_selection.classList.remove("dc_selection_active")
    easy_selection.style.backgroundColor = "#e6e6f5"
    easy_selection.style.color = "#2b2b3a"
    medium_selection.classList.remove("dc_selection_active")
    medium_selection.style.backgroundColor = "#e6e6f5"
    medium_selection.style.color = "#2b2b3a"
    hard_selection.classList.remove("dc_selection_active")
    hard_selection.style.backgroundColor = "#e6e6f5"
    hard_selection.style.color = "#2b2b3a"
    asian_selection.classList.remove("dc_selection_active")
    asian_selection.style.backgroundColor = "#e6e6f5"
    asian_selection.style.color = "#2b2b3a"
}

easy_selection.addEventListener("click",selectEasy)
function selectEasy(){
    removeSelected()
    easy_selection.classList.add("dc_selection_active")
    easy_selection.style.backgroundColor = "#2b2b3a"
    easy_selection.style.color = "#e6e6f5"
    displaySelected.innerHTML = "Difficulty: Easy"
}
medium_selection.addEventListener("click",selectMedium)
function selectMedium(){
    removeSelected()
    medium_selection.classList.add("dc_selection_active")
    medium_selection.style.backgroundColor = "#2b2b3a"
    medium_selection.style.color = "#e6e6f5"
    displaySelected.innerHTML = "Difficulty: Medium"
}
hard_selection.addEventListener("click",selectHard)
function selectHard(){
    removeSelected()
    hard_selection.classList.add("dc_selection_active")
    hard_selection.style.backgroundColor = "#2b2b3a"
    hard_selection.style.color = "#e6e6f5"
    displaySelected.innerHTML = "Difficulty: Hard"
}
asian_selection.addEventListener("click",selectAsian)
function selectAsian(){
    removeSelected()
    asian_selection.classList.add("dc_selection_active")
    asian_selection.style.backgroundColor = "#2b2b3a"
    asian_selection.style.color = "#e6e6f5"
    displaySelected.innerHTML = "Difficulty: Asian"
}

let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")
let nextbutton = document.getElementById("nextbutton")
let prevbutton = document.getElementById("prevbutton")
let AsArray = []
let BsArray = []
let CsArray = []
let DsArray = []
let questionsArray = []
let correctOptionArray = []
let unchangedcorrectOptionArray = []

let startGameButton = document.getElementById("startGameButton")
let playgameContainer_firstpage = document.getElementById("playgameContainer_firstpage")
let playgameContainer_secondpage = document.getElementById("playgameContainer_secondpage")
let playgameContainer_thirdpage = document.getElementById("playgameContainer_thirdpage")              
let playgameContainer_fourthpage = document.getElementById("playgameContainer_fourthpage")              
let motionGameoverDiv = document.getElementById("motionGameoverDiv") 
let opt1answer = ""
let opt2answer = ""
let opt3answer = ""
let opt4answer = ""
let opt5answer = ""
let opt6answer = ""
let opt7answer = ""
let opt8answer = ""
let opt9answer = ""
let opt10answer = ""             




startGameButton.addEventListener("click", ()=>{
    let selectedCategoryArray = localStorage.getItem("selectedCategoryArray")

    if(selectedCategoryArray.length == 0){
        alert("Please select a category");
        return;
    }
    playgameContainer_secondpage.style.display = "flex"
    playgameContainer_firstpage.style.display = "none"

    let CurrentGameArray = []
    let carsNames = []
    let footballersNames = []
    let footballClubsNames = []
    let countriesNames = []

    if(selectedCategoryArray.includes("Countries")){
        countries.forEach((item) =>{
            CurrentGameArray.push(item)
            countriesNames.push(item.name)
        })
    }
    if(selectedCategoryArray.includes("Cars")){
        cars.forEach((item) =>{
            CurrentGameArray.push(item)
            carsNames.push(item.name)
        })
    }
    if(selectedCategoryArray.includes("Football")){
        footballers.forEach((item) =>{
            CurrentGameArray.push(item)
            footballersNames.push(item.name)
        })
        football_clubs.forEach((item) =>{
            CurrentGameArray.push(item)
            footballClubsNames.push(item.name)
        })
    }
    
    let objStorage = []
    function pushToQuestion(){
        let randomOBJ = CurrentGameArray[Math.floor(Math.random() * CurrentGameArray.length)]
        if(objStorage.includes(randomOBJ)){pushToQuestion();return}
        else{
            let randomQuestion = randomOBJ.Questions[Math.floor(Math.random() * randomOBJ.Questions.length)]
            correctOptionArray.push(randomOBJ.name)
            objStorage.push(randomOBJ)
            if(questionsArray.includes(randomQuestion)){pushToQuestion()}
            else{questionsArray.push(randomQuestion)}
        }
    }
    while (questionsArray.length < 10){
        pushToQuestion()
    }
    
   
    unchangedcorrectOptionArray =  correctOptionArray
    for(let i = 0;i<correctOptionArray.length;i++){
        let newarr = [];
        newarr.push(correctOptionArray[i])
        if(carsNames.includes(correctOptionArray[i])){
            while (newarr.length < 4){
               let tempopt = carsNames[Math.floor(Math.random() * carsNames.length)]
               if (!newarr.includes(tempopt)){newarr.push(tempopt)}
            }
        }
        if(footballersNames.includes(correctOptionArray[i])){
            while (newarr.length < 4){
               let tempopt = footballersNames[Math.floor(Math.random() * footballersNames.length)]
               if (!newarr.includes(tempopt)){newarr.push(tempopt)};
            }
        }
        if(footballClubsNames.includes(correctOptionArray[i])){
            while (newarr.length < 4){
               let tempopt = footballClubsNames[Math.floor(Math.random() * footballClubsNames.length)]
               if (!newarr.includes(tempopt)){newarr.push(tempopt)};
            }
        }
        if(countriesNames.includes(correctOptionArray[i])){
            while (newarr.length < 4){
               let tempopt = countriesNames[Math.floor(Math.random() * countriesNames.length)]
               if (!newarr.includes(tempopt)){newarr.push(tempopt)};
            }
        }
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
        }
        let finalarr = shuffle(newarr) 
        
        AsArray.push(finalarr[0])
        BsArray.push(finalarr[1])
        CsArray.push(finalarr[2])
        DsArray.push(finalarr[3])
        pushToScreen()
    
    }
})

function pushToScreen(){
    let count = 0;
    let counter = 1;
    let doneAlready = false;
    let questionSection = document.getElementById("questionSection")
    let displayScore = document.getElementById("displayScore")
    questionSection.innerHTML = questionsArray[count]
    option1.innerHTML = AsArray[count]
    option2.innerHTML = BsArray[count]
    option3.innerHTML = CsArray[count]
    option4.innerHTML = DsArray[count]
    function endGame(){
        count = 0
        clearingOptions()  
        openThirdPage() 
       }
    nextbutton.addEventListener("click",()=>{
        counter+=1;
        displayScore.innerHTML = `Question : ${counter}/10`
        if(counter === 10){
            nextbutton.innerHTML = "SUBMIT"
        }
        if(count > 8){
            doneAlready = true;
            endGame()
            return
        }
        else{
            count += 1;
            questionSection.innerHTML = questionsArray[count];
            option1.innerHTML = AsArray[count]
            option2.innerHTML = BsArray[count]
            option3.innerHTML = CsArray[count]
            option4.innerHTML = DsArray[count]
            clearingOptions()    
            prevcall()
        }        
    })
    prevbutton.addEventListener("click",()=>{
        if(count < 1){return}
        else{
            count -= 1;
            questionSection.innerHTML = questionsArray[count];
            option1.innerHTML = AsArray[count]
            option2.innerHTML = BsArray[count]
            option3.innerHTML = CsArray[count]
            option4.innerHTML = DsArray[count]
            prevcall()
        }
        counter-=1;
        displayScore.innerHTML = `Question : ${counter}/10`
        nextbutton.innerHTML = "NEXT"
    })
    function clearingOptions(){
        option1.style.backgroundColor = "transparent"
        option2.style.backgroundColor = "transparent"
        option3.style.backgroundColor = "transparent"
        option4.style.backgroundColor = "transparent"
    }
    let totalTime = 1200;
    setInterval(function(){
        if(totalTime == 0){
            clearInterval(myinterval)
            if(doneAlready == false){
                endGame();
                doneAlready = true;
            }
            return;
        }
        else{
            totalTime--;
        }
    },1000)

    let seconds;
    let minutes;
    function countdownFunc(){
        seconds = Math.floor( (totalTime) % 60 );
        minutes = Math.floor( (totalTime/60) % 60 );
    }
    let displayTime = document.getElementById("displayTime")
    let myinterval = setInterval(function(){
        countdownFunc()
        const countArr = [0,1,2,3,4,5,6,7,8,9]
        if (!countArr.includes(totalTime % 60)){displayTime.innerHTML = `${minutes}:${seconds}`}
        else{displayTime.innerHTML = `${minutes}:0${seconds}`}
    },1000)
    

    option1.addEventListener("click",()=>{
        clearingOptions()
        option1.style.backgroundColor = "#52796f"
        if(count == 0){
            opt1answer = option1.innerHTML 
        }
        if(count == 1){
            opt2answer = option1.innerHTML 
        }
        if(count == 2){
            opt3answer = option1.innerHTML 
        }
        if(count == 3){
            opt4answer = option1.innerHTML 
        }
        if(count == 4){
            opt5answer = option1.innerHTML 
        }
        if(count == 5){
            opt6answer = option1.innerHTML 
        }
        if(count == 6){
            opt7answer = option1.innerHTML 
        }
        if(count == 7){
            opt8answer = option1.innerHTML 
        }
        if(count == 8){
            opt9answer = option1.innerHTML 
        }
        if(count == 9){
            opt10answer = option1.innerHTML 
        }

    })
    option2.addEventListener("click",()=>{
        clearingOptions()
        option2.style.backgroundColor = "#52796f"
        if(count == 0){
            opt1answer = option2.innerHTML 
        }
        if(count == 1){
            opt2answer = option2.innerHTML 
        }
        if(count == 2){
            opt3answer = option2.innerHTML 
        }
        if(count == 3){
            opt4answer = option2.innerHTML 
        }
        if(count == 4){
            opt5answer = option2.innerHTML 
        }
        if(count == 5){
            opt6answer = option2.innerHTML 
        }
        if(count == 6){
            opt7answer = option2.innerHTML 
        }
        if(count == 7){
            opt8answer = option2.innerHTML 
        }
        if(count == 8){
            opt9answer = option2.innerHTML 
        }
        if(count == 9){
            opt10answer = option2.innerHTML 
        }

    })
    option3.addEventListener("click",()=>{
        clearingOptions()
        option3.style.backgroundColor = "#52796f"
        if(count == 0){
            opt1answer = option3.innerHTML 
        }
        if(count == 1){
            opt2answer = option3.innerHTML 
        }
        if(count == 2){
            opt3answer = option3.innerHTML 
        }
        if(count == 3){
            opt4answer = option3.innerHTML 
        }
        if(count == 4){
            opt5answer = option3.innerHTML 
        }
        if(count == 5){
            opt6answer = option3.innerHTML 
        }
        if(count == 6){
            opt7answer = option3.innerHTML 
        }
        if(count == 7){
            opt8answer = option3.innerHTML 
        }
        if(count == 8){
            opt9answer = option3.innerHTML 
        }
        if(count == 9){
            opt10answer = option3.innerHTML 
        }

    })
    option4.addEventListener("click",()=>{
        clearingOptions()
        option4.style.backgroundColor = "#52796f"
        if(count == 0){
            opt1answer = option4.innerHTML 
        }
        if(count == 1){
            opt2answer = option4.innerHTML 
        }
        if(count == 2){
            opt3answer = option4.innerHTML 
        }
        if(count == 3){
            opt4answer = option4.innerHTML 
        }
        if(count == 4){
            opt5answer = option4.innerHTML 
        }
        if(count == 5){
            opt6answer = option4.innerHTML 
        }
        if(count == 6){
            opt7answer = option4.innerHTML 
        }
        if(count == 7){
            opt8answer = option4.innerHTML 
        }
        if(count == 8){
            opt9answer = option4.innerHTML 
        }
        if(count == 9){
            opt10answer = option4.innerHTML 
        }

    })

    function prevcall(){
        clearingOptions()
        if(count == 0){
            if(option1.innerHTML == opt1answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt1answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt1answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt1answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 1){
            if(option1.innerHTML == opt2answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt2answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt2answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt2answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 2){
            if(option1.innerHTML == opt3answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt3answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt3answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt3answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 3){
            if(option1.innerHTML == opt4answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt4answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt4answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt4answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 4){
            if(option1.innerHTML == opt5answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt5answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt5answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt5answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 5){
            if(option1.innerHTML == opt6answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt6answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt6answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt6answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 6){
            if(option1.innerHTML == opt7answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt7answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt7answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt7answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 7){
            if(option1.innerHTML == opt8answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt8answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt8answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt8answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 8){
            if(option1.innerHTML == opt9answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt9answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt9answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt9answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else if(count == 9){
            if(option1.innerHTML == opt10answer){
                option1.style.backgroundColor = "#52796f"
            }
            if(option2.innerHTML == opt10answer){
                option2.style.backgroundColor = "#52796f"
            }
            if(option3.innerHTML == opt10answer){
                option3.style.backgroundColor = "#52796f"
            }
            if(option4.innerHTML == opt10answer){
                option4.style.backgroundColor = "#52796f"
            }
        }
        else{alert("none")}

    }
    
    let quit = document.getElementById("quit")
    let quitYes = document.getElementById("quitYes")
    let quitNo = document.getElementById("quitNo")
    let areYouSurePopup = document.getElementById("areYouSurePopup")
    quit.addEventListener("click", ()=>{
        areYouSurePopup.style.display = "block"
    })
    
    quitNo.addEventListener("click", ()=>{
        areYouSurePopup.style.display = "none"
    })
    quitYes.addEventListener("click", ()=>{
        areYouSurePopup.style.display = "none"
        playgameContainer_secondpage.style.display = "none"
        playgameContainer_firstpage.style.display = "block"
        location.reload()
    })    
}

let totalMark = 0
function checkTotalScore(){
    if(unchangedcorrectOptionArray[0] == opt1answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[1] == opt2answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[2] == opt3answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[3] == opt4answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[4] == opt5answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[5] == opt6answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[6] == opt7answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[7] == opt8answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[8] == opt9answer){totalMark++ ;console.log(totalMark)};
    if(unchangedcorrectOptionArray[9] == opt10answer){totalMark++;console.log(totalMark) };
    return;
}



let score_circle = document.getElementById("score_circle")
function openThirdPage(){
    checkTotalScore()
 
    if(totalMark < 40){score_circle.style.backgroundColor = "red"}
    if(totalMark >= 40 && totalMark < 70){score_circle.style.backgroundColor = "#4c8bf5"}
    if(totalMark > 70){score_circle.style.backgroundColor = "green"}
    
    if(totalMark == 0){score_circle.innerHTML = `${totalMark}%`}
    else{score_circle.innerHTML = `${totalMark/10}0%`}


    playgameContainer_firstpage.style.display = "none"
    playgameContainer_secondpage.style.display = "none"
    playgameContainer_thirdpage.style.display = "block"
    function changeFont(){
        motionGameoverDiv.style.fontSize = "40px"
        // motionGameoverDiv.style.top = "40px"
        motionGameoverDiv.style.transition = "all 2s"  
    }
    setTimeout(changeFont, 2500) 

    let playAgain_Btn = document.getElementById("playAgain_Btn")
    playAgain_Btn.addEventListener("click", ()=>{
        location.reload()
    })
}


let review_Btn = document.getElementById("review_Btn")
review_Btn.addEventListener("click", ()=>{
    playgameContainer_firstpage.style.display = "none"
    playgameContainer_secondpage.style.display = "none"
    playgameContainer_thirdpage.style.display = "none"
    playgameContainer_fourthpage.style.display = "block"

    playgameContainer_fourthpage.innerHTML = ""

    let compoundObj = []

    for(let i = 0; i< questionsArray.length; i++){
        let questions = questionsArray[i]

        let Obj = new Object
        Obj.question = questions
        compoundObj.push(Obj)
        
    }
    for(let j=0;j< correctOptionArray.length;j++){
        let answers = correctOptionArray[j]
        compoundObj[j].answers = answers
    }
    for(let k=0;k< compoundObj.length;k++){
        let questionContainer = document.createElement("div")
        questionContainer.classList.add("review_items")
        playgameContainer_fourthpage.appendChild(questionContainer)
        let newQuestion = document.createElement("div")
        newQuestion.innerHTML = compoundObj[k].question
        newQuestion.classList.add("review_questions")
        questionContainer.appendChild(newQuestion)
        let newAnswers = document.createElement("div")
        newAnswers.innerHTML = `Answer: ${compoundObj[k].answers}`
        newAnswers.classList.add("review_answers")
        questionContainer.appendChild(newAnswers)
    }
    let closeBtn = document.createElement("div")
    closeBtn.innerHTML = "Close"
    closeBtn.id = "quit_Btn"
    closeBtn.addEventListener("click", ()=>{
        playgameContainer_firstpage.style.display = "none"
        playgameContainer_secondpage.style.display = "none"
        playgameContainer_thirdpage.style.display = "block"
        playgameContainer_fourthpage.style.display = "none"
    })
    playgameContainer_fourthpage.appendChild(closeBtn)
})

window.addEventListener("click",(e)=>{
    if(e.target.id !== "areYouSurePopup" && 
        e.target.id !== "quit" && 
        e.target.parentNode.id !== "areYouSurePopup" && 
        e.target.parentNode.parentNode.id !== "areYouSurePopup"
    ){
        areYouSurePopup.style.display = "none"
    }
    if(e.target.id !== "difficultyDisplay" && 
        e.target.parentNode.id !== "difficultyDisplay" && 
        e.target.parentNode.parentNode.id !== "difficultyDisplay"
    ){
        difficultySelection.style.display = "none"
    }
})



