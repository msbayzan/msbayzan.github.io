var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
};

function highScore() {
    if (scores.length === 0) return "No scores available.";

    var maxIndex = 0;
    for (var i = 1; i < scores.length; i++) {
        if (scores[i] > scores[maxIndex]) {
            maxIndex = i;
        }
    }
    return "High score: " + names[maxIndex] + " with " + scores[maxIndex];
}

function displayResults() {
    var average = 0;
    for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
    }

    var highestScore = highScore(); 
    document.getElementById("results").innerHTML = "<h2>Results</h2><br /> Average score is " + average.toFixed(2) + "<br>" + highestScore;
}

function displayScores() {
    var result = "";
    for (var i = 0; i < scores.length; i++) {
        result += names[i] + "		" + scores[i] + "<br>";
    }
    document.getElementById("scores_table").innerHTML = "<h2>Scores</h2><br />" + result;
}

function addScore() {
    var name = document.getElementById("name").value;
    var score = document.getElementById("score").value;
    var scoreInt = parseInt(score);

    if (name == "" || score == "") {
        alert("You must enter a name and a valid score");
        return;
    }
    else if (scoreInt < 0 || scoreInt > 100) {
        alert("Score must be between 0 and 100");
        return;
    }
    else {
        names.push(name);
        scores.push(scoreInt);
        
        document.getElementById("scores_table").innerHTML = "";
        document.getElementById("results").innerHTML = "";
        
        displayScores();
        displayResults();
        
        document.getElementById("name").value = "";
        document.getElementById("score").value = "";
    }
}



