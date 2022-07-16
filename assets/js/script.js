var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");

// define question and answer sets
const questionArray = [
    ["Commonly used data types DO Not Include:", "strings", "booleans", "alerts", "numbers"],
    ["what is an x?", "red", "blue", "green"],
    ["How old are you?", "12", "52", "38"]
];

var correctAnswer1 = questionArray[0][2];
var correctAnswer2 = questionArray[1][1];
var correctAnswer3 = questionArray[2][3];

console.log(correctAnswer1);
console.log(correctAnswer2);
console.log(correctAnswer3);

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
