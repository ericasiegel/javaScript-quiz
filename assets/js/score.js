let topUserScores = function () {
    topScores = JSON.parse(localStorage.getItem("topScores") || "[]"),
    usersScores = document.getElementById("userScores");

// sort scores
topScores.sort(function (a, b) {
    return b.score - a.score
})

// display the scores
for (var s = 0; s < topScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = topScores[s].name + " - " + topScores[s].score
    usersScores.appendChild(newLi)
}

};

topUserScores();
// back to main page

document.getElementById("restartBtn").addEventListener ("click", function() {
    window.location.href = "./index.html"
});
