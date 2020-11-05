// view top scores
let restartButton = document.querySelector("restartBtn"),
    highScore = JSON.parse(localStorage.getItem("topScores") || "[]"),
    scoreList = document.getElementById("userScores");


    highScore.sort(function (a,b) {
    return b.score - a.score
})

for (let s = 0; s < topScores.length; s++) {
    let scoreLi = document.createElement("li");
    scoreLi.textContent = topScores[s].name + " - " + topScores[s].score;
    scoreList.appendChild(scoreLi);
};

restartBtn.addEventListener("click", function() {
    history.back();
});