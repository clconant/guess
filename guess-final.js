# guess-final.js

var answer = 100;
var guess = 0;
var turns = 0;
var correctAnswer = false;
var averageTurns = 0;
var totalTurns = 0;
var games = 0;
var again = "y";
var playAgain = true;




while (playAgain == true){
  answer = Math.floor(Math.random()*100+1);
  console.log(answer);
  turns = 0;
  correctAnswer = false;
  while (correctAnswer == false){
   guess = prompt("What is your guess for a number between 1-100?");
    turns++;
    if (guess==answer){
      alert("Correct!")
      correctAnswer=true;
    }
    if (guess > answer){
    alert("Go lower");
    }
    if (guess < answer){
    alert("Go higher");
    }

  }
    games++;
    console.log(games);
    totalTurns+=turns;
    console.log(totalTurns);
    averageTurns = totalTurns/games;
    alert("Your average is "+averageTurns+" over "+games+" games.");
    again = prompt("Press y to play again!");
    if (again != "y"){
      playAgain = false;
    }
}
alert("Thank you for playing.")
