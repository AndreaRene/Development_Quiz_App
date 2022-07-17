var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");

// define question and answer sets
// TODO mix up correct answers
const questionArray = [
    ["Commonly used data types DO Not Include:", "strings", "booleans", "alerts", "numbers"],
    ["The condition in an if / else statement is enclosed with:", "quotes", "curly brackets", "parenthesis", "square brackets"],
    ["Arrays in JavaScript can be used to store:", "numbers/strings", "other arrays", "booleans", "all of the above"],
    ["String values must be enclosed with _______ when being assigned to variables.", "commas", "curly brackets", "quotes", "parenthesis"],
    ["A very useful tool to use during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loops", "console.log"]
];

// define correct answers for quiz function
// TODO figure out which way is more correct 
var correctAnswer1 = questionArray[0][3];
var correctAnswer2 = questionArray[1][3];
var correctAnswer3 = questionArray[2][4];
var correctAnswer4 = questionArray[3][3];
var correctAnswer5 = questionArray[4][4];

const answerArray1 = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

const answerArray2 = [questionArray[0][3], questionArray[1][3], questionArray[2][4], questionArray[3][3], questionArray[4][4]];

console.log(answerArray2);

// create answer buttons with a class and text elements for quiz
// TODO use for loop to create buttons
var button1El = document.createElement("button");
button1El.setAttribute("class", "answer");
var button2El = document.createElement("button");
button2El.setAttribute("class", "answer");
var button3El = document.createElement("button");
button3El.setAttribute("class", "answer");
var button4El = document.createElement("button");
button4El.setAttribute("class", "answer");

let answerClicked = document.querySelectorAll(".answer");

const buttonArray = [button1El, button2El, button3El, button4El];

var button1TextEl = document.createTextNode("")
var button2TextEl = document.createTextNode("")
var button3TextEl = document.createTextNode("")
var button4TextEl = document.createTextNode("")

var questionNum = 0;

// start button click starts off quiz
startBtnEl.addEventListener("click", clickStart)

// quiz script
function clickStart() {
    countdown();
    instructionsEl.remove();
    startBtnEl.remove();
    quizBoxEl.appendChild(button1El);
    button1El.appendChild(button1TextEl);
    quizBoxEl.appendChild(button2El);
    button2El.appendChild(button2TextEl);
    quizBoxEl.appendChild(button3El);
    button3El.appendChild(button3TextEl);
    quizBoxEl.appendChild(button4El);
    button4El.appendChild(button4TextEl);
    displayQuestions(questionNum);
}

// event listener for on answer click(any button)
function buttonClick() {
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", displayQuestions);
    };
    // TODO: if correct, green background, text "correct" 
    // else red background, text "incorrect" -10 from timer element
    // pause .5 second
}

// questions iterated through from questionsArray
function displayQuestions() {
    if (questionNum < questionArray.length) {
        quizBoxEl.children[0].textContent = questionArray[questionNum][0];
        button1El.textContent = questionArray[questionNum][1];
        button2El.textContent = questionArray[questionNum][2];
        button3El.textContent = questionArray[questionNum][3];
        button4El.textContent = questionArray[questionNum][4];

        buttonClick();
        questionNum++;
    } else {
        return;
    }
}
// TODO can this be smaller?
// timer function
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds left";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second left";
            timeLeft--;
        } else {
            timerEl.textContent = timeLeft + " seconds left";
            clearInterval(timeInterval);
            timerEl.textContent = "Your time is up.";
        }
    }
        , 1000);
}


