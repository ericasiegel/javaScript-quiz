// global variables
let questionEl = document.getElementById("questions");
let answerEl = document.getElementById("answers");
let timerEl = document.getElementById("timer");
let scoreEl = document.getElementById("quizScore");
let topScore = document.getElementById("topScores")
let countDown = 60;


let questionNumber = -1;
let answer;

let userName;

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
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        c: ["JavaScript", "Terminal", "console.log", "data terminal"],
        a: "console.log"
    },

]

// start the timer and quiz
let startQuiz = function() {
    // hide intro and show quiz element
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    // start timer
    startTimer();

    // display questions
    quizQuestions();
}

  // countdown for the quiz
let startTimer = function() {
    let timer = setInterval(function() {
        countDown --;  
        timerEl.textContent = "Time: " + countDown + " seconds remaining";

        if(countDown === 0 || questionNumber === questions.length) {
            clearInterval(timer);
            setTimeout(showScore, 100);
            // document.getElementById("quiz").innerHTML = "<h3>Time is up!</h3>"
        }
    }, 1000);
};
// set quiz questions
let quizQuestions = function() {
    questionNumber++;
    answer = questions[questionNumber].a

    questionEl.textContent = questions[questionNumber].q;
    answerEl.innerHTML = "";
    // questionEl.setAttribute("style", "color: rgb(33, 33, 88);font-weight: light;font-size: 20px;");

    let c = questions[questionNumber].c;
    
    for (var i = 0; i < c.length; i++) {
        var nextAnswer = document.createElement("button");

        nextAnswer.textContent = c[i];
        answerBtn = answerEl.appendChild(nextAnswer);
    }
    
};
let hideFeedback = function() {
    let feedbackEl = document.getElementsByClassName("feedback")[0]
    feedbackEl.style.display='none'
}
let showFeedback = function() {
    let feedbackEl = document.getElementsByClassName("feedback") [0]
    feedbackEl.removeAttribute("style");
};

//show score
let showScore = function() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
    scoreEl.textContent = "Final Score: " + countDown;
}

let quizScore = function() {
    userName = document.getElementById("name").value;

    let newScore = {
        name: userName,
        score: countDown,
    };

    let topScores = JSON.parse(localStorage.getItem("topScores") || "[]");
    topScores.push(newScore)
    localStorage.setItem("topScores", JSON.stringify(topScores));
};



// button to start counter and quiz
document.querySelector("#start-btn").addEventListener("click", startQuiz);
document.querySelector("#submitBtn").addEventListener("click", function (event) {
    event.stopPropagation();
    quizScore();

    window.location.href = "./topscore.html";
});
// answer choice buttons
answerEl.addEventListener("click", function(event) {
    let feedbackEl = document.getElementsByClassName("feedback")[0]

    if (answer === event.target.textContent) {
        feedbackEl.textContent = "Correct Answer!"
        setTimeout(hideFeedback, 2000);
        showFeedback();
    } else {
        feedbackEl.textContent = "Wrong Answer!";
        setTimeout(hideFeedback, 2000);
        countDown = countDown - 10;
        showFeedback();
    }
    quizQuestions();

});

