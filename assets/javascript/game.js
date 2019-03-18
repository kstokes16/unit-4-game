// assign random numbers to each crystal at beginning of game, between 1 and 12

var blueCrystalNumber = Math.floor(Math.random()*12+1);
console.log(blueCrystalNumber);
var greenCrystalNumber = Math.floor(Math.random()*12+1);
console.log(greenCrystalNumber);
var purpleCrystalNumber = Math.floor(Math.random()*12+1);
console.log(purpleCrystalNumber);
var pinkCrystalNumber = Math.floor(Math.random()*12+1);
console.log(pinkCrystalNumber); 
var wins = $("#wins");
var losses = $("#losses");

// assign random numbers for user to guess between 19 and 120

var randomNumber = 20 + Math.floor(Math.random() * 100);
console.log(randomNumber);

$(".random-number-display").text(randomNumber);

// track wins, losses and total

var totalScore = 0;
wins = 0;
losses = 0;

// create functions for reset, wins, and losses

// reset function

function reset () {
    randomNumber = 20 + Math.floor(Math.random() * 100);
    blueCrystalNumber = Mathfloor(Math.random()*12+1);
    greenCrystalNumber = Mathfloor(Math.random()*12+1);
    purpleCrystalNumber = Mathfloor(Math.random()*12+1);
    pinkCrystalNumber = Mathfloor(Math.random()*12+1);
    totalScore = 0;
    $(".random-number-display").text(randomNumber);
    $(".total-score-number").text(totalScore);
}

// win function

// function win() {
   // wins++;
    //$(".wins").text(wins);
    //reset();
//}

// loss function

// function losses() {
//     alert("Sorry, you didn't win.");
//     losses++;
//     $(".losses").text(losses);
//     reset();
// }

// assign on click functions to each crystal so that user score changes as different buttons are clicked

$(".blue").on("click", function() {
totalScore = totalScore + blueCrystalNumber;
$(".total-score-number").text(totalScore);
if (totalScore === randomNumber) {
    alert("Yay, you won!");
    $(".wins").text(wins);
    wins++;
}
else if (totalScore > randomNumber) {
     alert("Sorry, you lost");
     $(".losses").text(losses);
     losses++;
}
// console.log(blueCrystalNumber);
});

$(".green").on("click", function() {
    totalScore = totalScore + greenCrystalNumber;
    $(".total-score-number").text(totalScore);
    if (totalScore === randomNumber) {
        alert("Congrats, you win!!!");
    }
    else if (totalScore > randomNumber) {
        alert("Sorry, you lost.");
    }
   // console.log(greenCrystalNumber);
});

$(".purple").on("click", function() {
    totalScore = totalScore + purpleCrystalNumber;
    $(".total-score-number").text(totalScore);
    if (totalScore === randomNumber) {
        alert("Congrats, you win!!!");
    }
    else if (totalScore > randomNumber) {
        alert("Sorry, you lost.");
    }
   // console.log(purpleCrystalNumber);
});

$(".pink").on("click", function() {
    totalScore = totalScore + pinkCrystalNumber;
    $(".total-score-number").text(totalScore);
    if (totalScore === randomNumber) {
        alert("Congrats, you win!!!");
    }
    else if (totalScore > randomNumber) {
        alert("Sorry, you lost.");
    }
   // console.log(pinkCrystalNumber);
});

// update total as user clicks on each crystal

//if (totalScore === randomNumber) {
  //  alert("Congrats, you win!!!");
//}
//else if (totalScore > randomNumber) {
  //  alert("Sorry, you lost.");
// }

// update wins, losses and player total

$(".wins").text(wins);
$(".losses").text(losses);

// reset the game and update 'wins' and 'losses' at the end of each game