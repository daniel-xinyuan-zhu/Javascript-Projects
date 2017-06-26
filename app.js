/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// DOM = Document Object Model; used to connect webpages to scripts

var scores, roundScore, activePlayer, dice;

scores = new Array(0, 0);
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random()*6)+1;
console.log(dice);

document.querySelector("#current-"+activePlayer).textContent = dice;
//document.querySelector("#current-"+activePlayer).innerHTML = "<em>" + dice + "</em>";

// can use query selector the other way
var x = document.querySelector("#score-0").textContent;
console.log(x);

document.querySelector(".dice").style.display = "none";
// display is css property, none is css value