//TODO Smile. You are enough

// elements needed from dom

var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEL = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");
var highScoresLinkEl = document.getElementById("highScoreLink");

//create elements needed by quiz 

var initialsInputEl = document.createElement("input");
var SaveScoreBtnEl = document.createElement("button");
var clearScoresBtnEl = document.createElement("button");
var highScoresOlEl = document.createElement("ol");
var resetBtn = document.createElement("button");

//other assorted global variables

var minus10 = false;
var maxHighScores = 5;
var questionNum;
var timeLeft;

var highScoresArray = [];

// create li items for scoreboard
// for more or less change i < 5

for (i = 0; i < maxHighScores; i++) {
    var highScoreLiEl = document.createElement("li");
    highScoresArray.push(highScoreLiEl);
}

// local storage variables

var scoreSets = JSON.parse(localStorage.getItem("scoreSets")) || [];



// define question and answer sets
// TODO mix up correct answers

const questionArray = [
    [
        "Commonly used data types DO Not Include:", "strings", "booleans", "alerts", "numbers"
    ],
    [
        "The condition in an if / else statement is enclosed with:", "carrots", "curly brackets", "parenthesis", "square brackets"
    ],
    [
        "Arrays in JavaScript can be used to store:", "numbers/strings", "other arrays", "booleans", "all of the above"
    ],
    [
        "String values must be enclosed with _______ when being assigned to variables.", "commas", "curly brackets", "quotes", "ampersands"
    ],
    [
        "A useful tool to use during development/debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loops", "console.log"
    ]
];

// define correct answers for quiz function
// if questions are added, don't forget to add correct answer here

const answerArray = [questionArray[0][3], questionArray[1][3], questionArray[2][4], questionArray[3][3], questionArray[4][4]];

// create answer buttons with a class for quiz answers

const btnArray = [];

for (var i = 1; i < questionArray[0].length; i++) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.setAttribute("class", "answer");
    btnArray.push(answerBtnEl);
}

// start button click starts off quiz

startBtnEL.addEventListener("click", clickStart)

// quiz script

function clickStart() {
    questionNum = 0;
    timeLeft = 76;
    instructionsEl.remove();
    startBtnEL.remove();
    countdown();

    // add buttons for quiz answers to the element 

    for (var i = 0; i < btnArray.length; i++) {
        quizBoxEl.appendChild(btnArray[i]);
    }
    displayQuestions();
}

// questions iterated through from questionsArray

function displayQuestions() {
    if (questionNum < questionArray.length) {
        quizBoxEl.children[0].textContent = questionArray[questionNum][0];
        for (var i = 0; i < btnArray.length; i++) {
            btnArray[i].textContent = questionArray[questionNum][i + 1];
        }
    } else {
        displayScore();
    }
}

// event listener for on answer click(any button)

for (i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener("click", btnClick)
}

// compare answers against answerArray and determimine correct or not correct

// iterates back through displayQuestions for as many times as there are questions in questionArray

function btnClick(e) {

    for (j = 0; j < answerArray.length; j++) {
        if (e.target.textContent === answerArray[j]) {
            e.target.setAttribute("style", "background-color: green");
            minus10 = false;
            break;
        } else if (e.target.textContent !== answerArray[j]) {
            e.target.setAttribute("style", "background-color: red");
            minus10 = true;
        }
    }

    // pause .5 second after answer clicked to allow user to review answer choice

    setTimeout(function () {
        e.target.setAttribute("style", "background-color: #3c6e71");
        questionNum++;
        displayQuestions();
    }, 500)
}

// end of quiz where user can see and save score and restart quiz

function displayScore() {
    for (var i = 0; i < btnArray.length; i++) {
        btnArray[i].remove();
    }
    quizBoxEl.children[0].textContent = "Your score is " + Math.floor(timeLeft);
    quizBoxEl.appendChild(instructionsEl).textContent = "Enter your initials to save your score:";
    initialsInputEl.textContent = "";
    quizBoxEl.appendChild(initialsInputEl);
    quizBoxEl.appendChild(SaveScoreBtnEl).textContent = "Save score";
    quizBoxEl.appendChild(resetBtn).textContent = "Restart Quiz";
}

// display high score board and offer option to restart or clear scores in storage
SaveScoreBtnEl.addEventListener("click", highScoreBoard);



function highScoreBoard() {

    SaveScoreBtnEl.remove();
    initialsInputEl.remove();
    instructionsEl.remove();
    timerEl.textContent = "";
    quizBoxEl.children[0].textContent = "High Scores";
    for (var i = 0; i < highScoresArray.length; i++) {
        highScoresOlEl.appendChild(highScoresArray[i]).textContent = "list item";
    }
    quizBoxEl.appendChild(highScoresOlEl);
    quizBoxEl.appendChild(clearScoresBtnEl).textContent = "Clear Scores";




    storeScore();
}


highScoresLinkEl.addEventListener("click", scoresFromLink);

function scoresFromLink() {

}


// TODO finish score board: 

// define local storage objects?????

resetBtn.addEventListener("click", refresh);

function refresh() {
    location.reload()
}

function storeScore() {
    var scoreSet = {
        initials: initialsInputEl.value,
        score: Math.floor(timeLeft)
    };
    scoreSets.push(scoreSet);
    localStorage.setItem("scoreSets", JSON.stringify(scoreSets));
}

// clear local storage(scores)

clearScoresBtnEl.addEventListener("click", clearScore);

function clearScore() {
    localStorage.clear();
    clearScoresBtnEl.textContent = "Cleared";
}



// timer function

function countdown() {
    var timeInterval = setInterval(function () {
        if (questionNum === questionArray.length && minus10) {
            timeLeft -= 9.9;
            timerEl.textContent = Math.floor(timeLeft) + " seconds left";
            clearInterval(timeInterval);
            minus10 = false;
            return;
        } else if (questionNum === questionArray.length) {
            clearInterval(timeInterval);
            return;
        } else {
            if (timeLeft > 1) {
                if (minus10) {
                    timeLeft -= 9.9;
                    timerEl.textContent = Math.floor(timeLeft) + " seconds left";
                    minus10 = false;
                } else {
                    timeLeft = timeLeft - .1;
                    timerEl.textContent = Math.floor(timeLeft) + " seconds left";
                }
            } else if (timeLeft === 1) {
                timerEl.textContent = Math.floor(timeLeft) + " second left";
                timeLeft = timeLeft - .1;
            } else {
                clearInterval(timeInterval);
                timerEl.textContent = "Your time is up.";
                displayScore();
            }
        }
    }, 100);
}