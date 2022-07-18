// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
    // quiz section 
        // section header with quiz title
        // section paragraph with quiz instructions

// WHEN I click the start button
    // section footer
        // create start button element in html
            // create event listener for button click
            // call function to start "quiz"

// THEN a timer starts and I am presented with a question
    // header element in html
        // timer display inside header
            // displays only while quiz is running
    // create timer function in js
    // replace section header element text with question
        // hidden before quiz starts
        // write question array in js
    // replace paragraph with answer selections 
        // hidden before quiz starts
        // write answer arrays in js

// WHEN I answer a question
    // answer selections will be clickable buttons
    //need event listener for click
            // color change on click
                // correct - green
                // incorrect - red minus 10sec
            // created in js
                // figure out loop to dynamically create buttons from question array
                // else create 4 buttons 

// THEN I am presented with another question
    // replace current question with another question from the array
        // use text content
    // replace current answer array with answer array corresponding to new question
        // use text content

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
    // global var minus10 that 
        // needs to reset after score is subtracted


// WHEN all questions are answered or the timer reaches 0
    // add end quiz function that stops timer if there is time left
        // needs to go into the runquiz function and the run timer function

// THEN the game is over
    //replace questions with score
        // time left equals score



// WHEN the game is over

// THEN I can save my initials and score
    // replace answer buttons with input for initials, save button, restart quiz button
    // store scores and initials in local storage
    // replace score text with high scores
    // replace buttons with high score list (5 scores) and reset high scores button
        //reset high scores - local storage clear function

