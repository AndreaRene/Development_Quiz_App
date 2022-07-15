var quizBoxEl = document.getElementById("quizBox");
var instructionsEl = document.getElementById("instructions");
var startBtnEl = document.getElementById("startQuiz")
const testNest = [
    ["what is an x?", "red", "blue", "green"],
    ["Who is this guy?", "Peter", "Edward", "John"],
    ["How old are you?", "12", "52", "38"]
];



console.log(testNest[0][0]);
console.log(testNest[0][1]);


var answersListEl = document.createElement("ol");
var answer1El = document.createElement("li");
var answer2El = document.createElement("li");
var answer3El = document.createElement("li");


startBtnEl.addEventListener("click", clickStart)

function clickStart() {
    instructionsEl.remove();
    startBtnEl.remove();
    quizBoxEl.appendChild(answersListEl);
    answersListEl.appendChild(answer1El);
    answersListEl.appendChild(answer2El);
    answersListEl.appendChild(answer3El);
    // timer start needs to go in this function

    testTestNest(testNest[0][0], testNest[0][1], testNest[0][2], testNest[0][3]);
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




