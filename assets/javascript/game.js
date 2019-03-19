// assign random numbers to each crystal at beginning of game, between 1 and 12

let blueCrystalNumber = Math.floor(Math.random()*12+1);
console.log(blueCrystalNumber);
let greenCrystalNumber = Math.floor(Math.random()*12+1);
console.log(greenCrystalNumber);
let purpleCrystalNumber = Math.floor(Math.random()*12+1);
console.log(purpleCrystalNumber);
let pinkCrystalNumber = Math.floor(Math.random()*12+1);
console.log(pinkCrystalNumber); 

// assign random numbers for user to guess between 19 and 120

let randomNumber = Math.floor(Math.random()*100 +20);
console.log(randomNumber);

$(".random-number-display").text(randomNumber);

// track wins, losses and total

var totalScore = 0;
var wins = 0;
var losses = 0;

// reset function

function reset() {
    randomNumber = Math.floor(Math.random()*100+20);
    blueCrystalNumber = Math.floor(Math.random()*12+1);
    greenCrystalNumber = Math.floor(Math.random()*12+1);
    purpleCrystalNumber = Math.floor(Math.random()*12+1);
    pinkCrystalNumber = Math.floor(Math.random()*12+1);
    totalScore = 0;
    $(".random-number-display").text(randomNumber);
    $(".total-score-number").text(totalScore);
    console.log(randomNumber);
    console.log(totalScore);
   // console.log("fsgs");
}

// win function

function winGame() { 
    alert("Congrats, you win!");
    wins++;
   $(".wins").text(wins);
}

// loss function

function loseGame() {
alert("Sorry, you didn't win.");
losses++;
$(".losses").text(losses);
}

// assign on click functions to each crystal so that user score changes as different buttons are clicked

$(".blue").on("click", function() {
totalScore = totalScore + blueCrystalNumber;
$(".total-score-number").text(totalScore);
if (totalScore === randomNumber) {
    winGame();
    reset();
}
else if (totalScore > randomNumber) {
    loseGame();
    // alert("Sorry, you lost");
     reset();
   //  $(".losses").text(losses);
    // losses++;
    // reset();
}
// console.log(blueCrystalNumber);
});

$(".green").on("click", function() {
    totalScore = totalScore + greenCrystalNumber;
    $(".total-score-number").text(totalScore);
    if (totalScore === randomNumber) {
        winGame();
        reset();
    }
    else if (totalScore > randomNumber) {
        loseGame();
        reset();
    }
   // console.log(greenCrystalNumber);
});

$(".purple").on("click", function() {
    totalScore = totalScore + purpleCrystalNumber;
    $(".total-score-number").text(totalScore);
    if (totalScore === randomNumber) {
        winGame();
        reset();
    }
    else if (totalScore > randomNumber) {
        loseGame();
        reset();
   }
   // console.log(purpleCrystalNumber);
});

$(".pink").on("click", function() {
    totalScore = totalScore + pinkCrystalNumber;
    $(".total-score-number").text(totalScore);
    if (totalScore === randomNumber) {
        winGame();
        reset();
    }
    else if (totalScore > randomNumber) {
        loseGame();
        reset();
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

// $(".wins").text(wins);
// $(".losses").text(losses);

// reset the game and update 'wins' and 'losses' at the end of each game