

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


// Timer Variables 
var beginTimer = document.querySelector('#timer');
var startingSeconds = 60;


// Quiz Variables
var initiateQuiz = document.querySelector('#start-button');
var promptQuestion = document.querySelector('#questions');
var userInitials = document.querySelector('#enter-initials');
var answerBtn1 = document.querySelector('#option1');
var answerBtn2 = document.querySelector('#option2');
var answerBtn3 = document.querySelector('#option3');
var optionsBtn = document.getElementsByClassName('.options')
var getResults = document.querySelector('#results');

// Start button--on click the timer starts and the first question is presented
initiateQuiz.addEventListener('click', beginQuiz, setInterval);




function beginQuiz() {
    setInterval(timerStart, 1000);

    function timerStart() {
        var seconds = startingSeconds % 1000;

        beginTimer.innerHTML = `${seconds}`;
        startingSeconds--;
        startingSeconds = startingSeconds < 0 ? 0:startingSeconds;
    };

    // display question
    promptQuestion.innerHTML = quiz.q1.question;

    // display questions
    answerBtn1.innerHTML = quiz.q1.option1
    

    answerBtn2.innerHTML = quiz.q1.option2;
    

    answerBtn3.innerHTML = quiz.q1.answer;
    answerBtn3.value = 'true';

    
    document.querySelectorAll('.options').forEach(indBtn => {
        indBtn.addEventListener('click', event => {
    
            var usersAnswer = event.target.value

            if(usersAnswer === true) {
                getResults.innerHTML = +5;
            } else {

            }
            console.log(getResults)
            console.log('userAnswer', usersAnswer)
            
            answerQuestion2();
        })
      })

}; 

// Question 2 Function

function answerQuestion2() {
    promptQuestion.innerHTML = quiz.q2.question;

    answerBtn1.innerHTML = quiz.q2.option1;
    

    answerBtn2.innerHTML = quiz.q2.answer;
    answerBtn2.value = 'true';

    answerBtn3.innerHTML = quiz.q2.option2;
    


    document.querySelectorAll('.options').forEach(indBtn => {
        indBtn.addEventListener('click', event => {
    
            var usersAnswer = event.target.value
            console.log('userAnswer', usersAnswer)
            
            answerQuestion3();
        })
      })

};


// Question 3 Function

function answerQuestion3() {
    promptQuestion.innerHTML = quiz.q3.question;

    answerBtn1.innerHTML = quiz.q3.option1;
    

    answerBtn2.innerHTML = quiz.q3.option2;
    

    answerBtn3.innerHTML = quiz.q3.answer;
    answerBtn3.value = 'true';


    document.querySelectorAll('.options').forEach(indBtn => {
        indBtn.addEventListener('click', event => {
    
            var usersAnswer = event.target.value
            console.log('userAnswer', usersAnswer)
            
            answerQuestion4();
        })
      })

};



// Question 4 Function

function answerQuestion4() {
    promptQuestion.innerHTML = quiz.q4.question;

    answerBtn1.innerHTML = quiz.q4.answer
    answerBtn1.value = 'true';

    answerBtn2.innerHTML = quiz.q4.option1;
    

    answerBtn3.innerHTML = quiz.q4.option2;
    


    document.querySelectorAll('.options').forEach(indBtn => {
        indBtn.addEventListener('click', event => {
    
            var usersAnswer = event.target.value
            console.log('userAnswer', usersAnswer)
            
            answerQuestion5();
        })
      })

};


// Question 5 Function

function answerQuestion5() {
    promptQuestion.innerHTML = quiz.q5.question;

    answerBtn1.innerHTML = quiz.q5.option1
    

    answerBtn2.innerHTML = quiz.q5.answer;
    answerBtn2.value = 'true';

    answerBtn3.innerHTML = quiz.q5.option2;
    


    document.querySelectorAll('.options').forEach(indBtn => {
        indBtn.addEventListener('click', event => {
    
            var usersAnswer = event.target.value
            console.log('userAnswer', usersAnswer)
            
    
        })
      })

};


// After answer is selected, the next question is presented--Loop through questions until the end or timer is out


// If/else statement--is answer is incorrect, time is deducted from timer


// If/else statement--when loop is done the game is complete


// Use local storage to take in initials and high score after game ends