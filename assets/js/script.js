var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");

// define question and answer sets
const questionArray = [
    ["Commonly used data types DO Not Include:", "strings", "booleans", "alerts", "numbers"],
    ["The condition in an if / else statement is enclosed with:", "quotes", "cruly brackets", "parenthesis", "square brackets"],
    ["Arrats in JavaScript can be used to store:", "numbers and strings", "other arrays", "booleans", "all of the above"],
    ["String values must be enclosed with _______ when being assigned to variables", "commas", "curly brackets", "quotes", "parenthesis"],
    ["A very useful tool to use during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loops", "console.log"]
];

// define correct answers for quiz function
var correctAnswer1 = questionArray[0][3];
var correctAnswer2 = questionArray[1][3];
var correctAnswer3 = questionArray[2][4];
var correctAnswer4 = questionArray[3][3];
var correctAnswer5 = questionArray[4][4];

console.log(correctAnswer1);
console.log(correctAnswer2);
console.log(correctAnswer3);
console.log(correctAnswer4);
console.log(correctAnswer5);

// create answer button and text elements
var answer1El = document.createElement("BUTTON");
var answer2El = document.createElement("BUTTON");
var answer3El = document.createElement("BUTTON");
var answer4El = document.createElement("BUTTON");

var answer1TextEl = document.createTextNode("")
var answer2TextEl = document.createTextNode("")
var answer3TextEl = document.createTextNode("")
var answer4TextEl = document.createTextNode("")


// start button click starts off quiz
startBtnEl.addEventListener("click", clickStart)

// quiz script
function clickStart() {
    countdown();
    instructionsEl.remove();
    startBtnEl.remove();
    quizBoxEl.appendChild(answer1El);
    answer1El.appendChild(answer1TextEl);
    quizBoxEl.appendChild(answer2El);
    answer2El.appendChild(answer2TextEl);
    quizBoxEl.appendChild(answer3El);
    answer3El.appendChild(answer3TextEl);
    quizBoxEl.appendChild(answer4El);
    answer4El.appendChild(answer4TextEl);


    // for loop to iterate through questions and answers
    for (i = 0; i <= 0; i++) {

        answer1TextEl.textContent = questionArray[i][0];
        answer1TextEl.textContent = questionArray[i][1];
        answer1TextEl.textContent = questionArray[i][2];
        answer1TextEl.textContent = questionArray[i][3];


        // call the function to add text to buttons
        iterateQuestionArray(questionArray[i][0], questionArray[i][1], questionArray[i][2], questionArray[i][3], questionArray[i][4]);
    }
}

function iterateQuestionArray(question, answer1, answer2, answer3, answer4) {
    quizBoxEl.children[0].textContent = question;
    answer1El.textContent = answer1;
    answer2El.textContent = answer2;
    answer3El.textContent = answer3;
    answer4El.textContent = answer4;

}

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
