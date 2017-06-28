/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// DOM = Document Object Model; used to connect webpages to scripts

var scores, roundScore, activePlayer, dice, winner, gamePlaying;
gamePlaying = true;
init();

//document.querySelector("#current-"+activePlayer).textContent = dice;
//document.querySelector("#current-"+activePlayer).innerHTML = "<em>" + dice + "</em>";

// can use query selector the other way
//var x = document.querySelector("#score-0").textContent;
//console.log(x);

function roll ()
{
  if (gamePlaying)
  {
    // 1. Generate a random number
    dice = Math.floor(Math.random()*6)+1;
    document.querySelector(".dice").textContent = dice;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-"+dice+".png";
    document.querySelector("#current-"+activePlayer).textContent = dice;

    // 3. Update the round score only if the player does not roll a 1.
    if (dice != 1)
    {
      roundScore += dice;
      document.querySelector("#current-"+activePlayer).textContent = roundScore;
    }
    else
    {
      switchPlayer();
    }
  }
}

function updateScore()
{
  if (gamePlaying)
  {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
    var finalScore = document.querySelector(".final-score").value;
    var winningScore;
    if (finalScore)
    {
      winningScore = finalScore;
    }
    else
    {
      winningScore = 50;
    }
    if (scores[activePlayer] > winningScore || scores[activePlayer] == winningScore)
    {
      document.querySelector("#name-"+activePlayer).textContent = "Winner!";
      document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
      winner = activePlayer;
      document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
      document.querySelector(".dice").style.display = "none";
      gamePlaying = false;
    }
    else
    {
      switchPlayer();
    }
  }
}

function switchPlayer()
{
  roundScore = 0;
  document.querySelector("#current-"+activePlayer).textContent = roundScore;
  if(activePlayer == 0)
  {
    activePlayer = 1;
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
  }
  else
  {
    activePlayer = 0;
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
  }
  document.querySelector("#current-"+activePlayer).textContent = roundScore;
  document.querySelector(".dice").style.display = "none";
}

function newGame()
{
  init();
  gamePlaying = true;
}

function init()
{
  scores = new Array(0, 0);
  roundScore = 0;
  activePlayer = 0;
  winner = -1;
  document.querySelector(".dice").style.display = "none";
  // display is css property, none is css value
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}

// Event Handlers:
document.querySelector(".btn-roll").addEventListener("click", roll);
document.querySelector(".btn-hold").addEventListener("click", updateScore);
document.querySelector(".btn-new").addEventListener("click", newGame);
// btn is called the callback function, called by another function that we passed in function as an argument
// anonymous function is one that doesn't have a name, written where ftn is
//document.querySelector(".btn-roll").addEventListener("click", function ()
/*{
  // Do something here
}
*/
