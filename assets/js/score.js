let restartBtn = document.querySelector("button.restartBtn"),
    topScores = JSON.parse(localStorage.getItem("topScores") || "[]"),
    scoreList = document.getElementById("userScores");

// sort scores
topScores.sort(function (a, b) {
    return b.score - a.score
})

// display the scores
for (var s = 0; s < topScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = topScores[s].name + " - " + topScores[s].score
    scoreList.appendChild(newLi)
}


// back to main page

restartBtn.addEventListener("click", function () {
    history.back();
});