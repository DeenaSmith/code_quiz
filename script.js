
// Variables
var initiateQuiz = document.querySelector('#start-button');
var beginTimer = document.querySelector('#timer');
var promptQuestions = document.querySelector('#questions');
var answerOptions = document.querySelector('#answers');
var userInitials = document.querySelector('#enter-initials');
var answerBtn = document.querySelector('.answer-button');

// Object of questions and answers
const quiz = {
    q1: {
        question: "What is the name of the model CSS uses for its basic structure?",
        option1: "Cube Model",
        option2: "Square Structure",
        answer: "Box Model"
    },
    q2: {
        question: "What does DOM stand for?",
        option1: "Direct Orientation Mode",
        answer: "Document Object Model",
        option2: ""
    }
}
console.log(quiz.q1.answer);

// Start button--on click the timer starts and the first question is presented

initiateQuiz.addEventListener('click', beginQuiz);


function beginQuiz() {
    console.log(beginTimer + 'clicked');
}; 


// Cycle through questions
promptQuestions.addEventListener('click', answerQuestion);

function answerQuestion() {

}

// After answer is selected, the next question is presented--Loop through questions until the end or timer is out


// If/else statement--is answer is incorrect, time is deducted from timer


// If/else statement--when loop is done the game is complete


// Use local storage to take in initials and high score after game ends