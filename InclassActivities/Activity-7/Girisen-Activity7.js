var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {

  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
  $("add").onclick = addScore;
};

function displayResults() {
  var average = 0;
  var maximumName = "";
  for (var i = 0; i < scores.length; i++) {
    average = (average * i + scores[i] * 1) / (i + 1);
  }
  var maximumScore = scores[0];
  for (var i = 1; i < scores.length; i++) {
    if (scores[i] > maximumScore) {
      maximumScore = scores[i];
      maximumName = names[i];
    }
  }

  document.getElementById("results").innerHTML =
    "<h2> Results </h2><br /> Average score is " + average + "<br > "+
  "<br /> High score is " +
    maximumScore +
    " with a score of " +
    maximumName +
    "<br > ";
}

function displayScores() {
  let tableHtml =
    "<table><thead><tr><th>Name</th><th>Score</th></tr></thead><tbody>";
  for (let i = 0; i < names.length; i++) {
    tableHtml += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
  }
  tableHtml += "</tbody></table>";

  document.getElementById("scores").innerHTML =
    "<h2> Scores </h2><br />" + tableHtml;
}

function addScore() {

  const nameInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");
  if (names.includes(nameInput.value) || nameInput.value == "" || scoreInput.value=="" || scoreInput.value > 100 || scoreInput.value < 0) {
    alert("You must enter a name and a valid score !!");
    return ;

  }

  names.push(nameInput.value);
  scores.push(scoreInput.value);


  nameInput.value="";
  scoreInput.value="";
  nameInput.focus();
}
