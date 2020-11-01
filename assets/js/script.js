// global variables
let counter = 60;
let quizEl = document.querySelector("#quiz");
let answerEl = document.querySelector("#answers");
let timerEl = document.querySelector("#timer");


// quiz questions
let questions = [
    {
        q: "What is not considered a comonly used data type?",
        c: ["booleans", "strings", "conditions", "numbers"],
        a: "conditions"
    },
    {
        q: "What keyword do you use to declare a variable?",
        c: ["var", "if", "else", "return"],
        a: "var"
    },
    {
        q: "The condition of an if else statment is enclosed with?",
        c: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        a: "parenthesis"
    },
    {
        q: "Arrays in javaScript can be used to store what?",
        c: ["booleans", "strings", "other arrays", "all of the above"],
        a: "all of the above"
    },
    {
        q: "what is the value of a boolean type?",
        c: ["true", "false", "true and false", "0"],
        a: "true and false"
    },
    {
        q: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        c: ["JavaScript", "Terminal", "console.log", "data terminal"],
        a: "console.log"
    },

]

// create countdown for start of quiz button

// create for loop for randomization of quiz questions and answers

    //add buttons to C: elements
    // if wrong answer is selected display it under next question and subtract 10 seconds
    //when the answers are clicked they move on to another question

// submit button enters results into result page where we can add our name and log it into the database

// add a call to the database to show high scores


// eventListener buttons refrencing each button to return to a different div

