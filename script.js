

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
        option2: "Dominant Order Module"
    },
    q3: {
        question: "What syntax is typicallt associated with arrays?",
        option1: "<>",
        option2: "{}",
        answer: "[]"
    },
    q4: {
        question: "Which built-in method is used to round a number down to the nearest whole?",
        answer: "Math.floor()",
        option1: "Math.random()",
        option2: "Math.ceiling()"
    },
    q5: {
        question: "In the array var groceries = ['apples', 'grapes', 'bread'], which item is set to index 1?",
        option1: "apples",
        answer: "grapes",
        option2: "groceries"
    }
}

// Variables
var initiateQuiz = document.querySelector('#start-button');
var beginTimer = document.querySelector('#timer');
var promptQuestion = document.querySelector('#questions');
var userInitials = document.querySelector('#enter-initials');
var answerBtn1 = document.querySelector('#option1');
var answerBtn2 = document.querySelector('#option2');
var answerBtn3 = document.querySelector('#option3');
var optionsBtn = document.querySelector('.options')

// Start button--on click the timer starts and the first question is presented
initiateQuiz.addEventListener('click', beginQuiz);

function beginQuiz() {
    // display question
    promptQuestion.innerHTML = quiz.q1.question;

    // display questions
    answerBtn1.innerHTML = quiz.q1.option1
    answerBtn1.value = 'false';

    answerBtn2.innerHTML = quiz.q1.option2;
    answerBtn2.value = 'false';

    answerBtn3.innerHTML = quiz.q1.answer;
    answerBtn3.value = 'true';


    
    
    //  document.querySelector('#option1').addEventListener('click', answerQuestion2);
    //  document.querySelector('#option2').addEventListener('click', answerQuestion2);
    //  document.querySelector('#option3').addEventListener('click', answerQuestion2);
}; 

optionsBtn.addEventListener('click', function (event) {
    var usersAnswer = event.target.value
    console.log('userAnswer', usersAnswer)

    if(usersAnswer.includes('true')){
        answerQuestion2();
    }else if(usersAnswer.includes('false')){
        console.log('nope')
     
    }
});

// Cycle through questions

function answerQuestion2() {
    promptQuestion.innerHTML = quiz.q2.question;
    answerBtn1.innerHTML = quiz.q2.option1;
    answerBtn2.innerHTML = quiz.q2.answer;
    answerBtn3.innerHTML = quiz.q2.option2;
}

// After answer is selected, the next question is presented--Loop through questions until the end or timer is out


// If/else statement--is answer is incorrect, time is deducted from timer


// If/else statement--when loop is done the game is complete


// Use local storage to take in initials and high score after game ends