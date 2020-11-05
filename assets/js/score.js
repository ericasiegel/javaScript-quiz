let restartBtn = document.querySelector("button.restartBtn"),
    // get the highScores list and turn it back into an object
    topScores = JSON.parse(localStorage.getItem("topScores") || "[]"),
    scoreList = document.getElementById("userScores");

// sort scores from high to low
topScores.sort(function (a, b) {
    return b.score - a.score
})

// display the scores
for (var s = 0; s < topScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = topScores[s].name + " - " + topScores[s].score
    scoreList.appendChild(newLi)
}


// click handlers for restart and clearing scoreboard

restartBtn.addEventListener("click", function () {
    history.back();
});