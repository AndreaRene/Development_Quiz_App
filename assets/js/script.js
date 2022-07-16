var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEl = document.getElementById("startQuiz")

// define question and answer sets
const testNest = [
    ["what is an x?", "red", "blue", "green"],
    ["Who is this guy?", "Peter", "Edward", "John"],
    ["How old are you?", "12", "52", "38"]
];

// create answer button and text elements
var answer1El = document.createElement("BUTTON");
var answer2El = document.createElement("BUTTON");
var answer3El = document.createElement("BUTTON");
var answer1TextEl = document.createTextNode("")
var answer2TextEl = document.createTextNode("")
var answer3TextEl = document.createTextNode("")

// start button click starts off quiz
startBtnEl.addEventListener("click", clickStart)

// quiz script
function clickStart() {
    instructionsEl.remove();
    startBtnEl.remove();
    quizBoxEl.appendChild(answer1El);
    answer1El.appendChild(answer1TextEl);
    quizBoxEl.appendChild(answer2El);
    answer2El.appendChild(answer2TextEl);
    quizBoxEl.appendChild(answer3El);
    answer3El.appendChild(answer3TextEl);

    // timer start needs to go in this function

    // for loop to iterate through questions and answers
    for (i = 0; i <= 0; i++) {

        answer1TextEl.textContent = testNest[i][0];
        answer1TextEl.textContent = testNest[i][1];
        answer1TextEl.textContent = testNest[i][2];


        // call the function to add text to buttons
        testTestNest(testNest[i][0], testNest[i][1], testNest[i][2], testNest[i][3]);
    }
}
console.log(testNest[0][0]);
console.log(testNest[0][1]);

function testTestNest(question, answer1, answer2, answer3) {
    quizBoxEl.children[0].textContent = question;
    answer1El.textContent = answer1;
    answer2El.textContent = answer2;
    answer3El.textContent = answer3;

    console.log(answer2);
}




