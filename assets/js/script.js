var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");
var minus10 = false;
var questionNum;
var timeLeft;

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
        "A very useful tool to use during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loops", "console.log"
    ]
];

// define correct answers for quiz function

const answerArray2 = [questionArray[0][3], questionArray[1][3], questionArray[2][4], questionArray[3][3], questionArray[4][4]];

// create answer buttons with a class for quiz answers


const buttonArray = [];

for (var i = 1; i < questionArray[0].length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "answer");
    buttonArray.push(button);
}


var clearScoresBtn = document.createElement("button");

var initials = document.createElement("input");
var saveScore = document.createElement("button");
var scoreSets = JSON.parse(localStorage.getItem("scoreSets")) || [];

// start button click starts off quiz

startBtnEl.addEventListener("click", clickStart)

// quiz script
function clickStart() {
    questionNum = 0;
    timeLeft = 76;
    minus10 = false;
    countdown();
    clearScoresBtn.remove();
    initials.remove();
    instructionsEl.remove();
    saveScore.remove();
    startBtnEl.remove();

    // add buttons for quiz answers to the element 

    for (var i = 0; i < buttonArray.length; i++) {
        quizBoxEl.appendChild(buttonArray[i]);
    }
    displayQuestions();
}

// event listener for on answer click(any button)

for (i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", buttonClick)
}

function buttonClick(e) {

    for (j = 0; j < answerArray2.length; j++) {
        if (e.target.textContent === answerArray2[j]) {
            e.target.setAttribute("style", "background-color: green");
            minus10 = false;
            break;
        } else if (e.target.textContent !== answerArray2[j]) {
            e.target.setAttribute("style", "background-color: red");
            minus10 = true;
        }
    }

    setTimeout(function () {
        e.target.setAttribute("style", "background-color: #3c6e71");
        questionNum++;
        displayQuestions();
    }, 500)
}

// questions iterated through from questionsArray

function displayQuestions() {
    if (questionNum < questionArray.length) {
        quizBoxEl.children[0].textContent = questionArray[questionNum][0];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = questionArray[questionNum][i + 1];
        }
    } else {
        displayScore();
    }
}

function displayScore() {
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].remove();
    }
    quizBoxEl.children[0].textContent = "Your score is " + Math.floor(timeLeft);
    quizBoxEl.appendChild(instructionsEl).textContent = "Enter your initials to save your score:";
    quizBoxEl.appendChild(initials);
    quizBoxEl.appendChild(saveScore).textContent = "Save score";
    quizBoxEl.appendChild(startBtnEl).textContent = "Restart Quiz";
}

saveScore.addEventListener("click", highScoreBoard);

function highScoreBoard() {
    saveScore.remove();
    timerEl.remove();
    initials.remove();
    quizBoxEl.children[0].textContent = "High Scores"
    quizBoxEl.appendChild(clearScoresBtn).textContent = "Clear Scores";
    storeScore();
}

//MOVE UP


// TODO
function storeScore() {
    var scoreSet = {
        initials: initials.value,
        score: Math.floor(timeLeft)
    }
    scoreSets.push(scoreSet);
    localStorage.setItem("scoreSets", JSON.stringify(scoreSets));
}

clearScoresBtn.addEventListener("click", clearScore);

function clearScore() {
    localStorage.clear();
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

