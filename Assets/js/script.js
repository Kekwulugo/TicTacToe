const gameBoard = (() => {
 const board = ["","","","","","","","",""]


 //render board + create a square with an index

 // you need to return so that it can be accessed by other modules
 return {
  board
 }

})();



//factory function that creates player object
const createPlayer = (name, symbol, moves)=> {

 return {
  name,
  symbol,
  moves
 }
};

const gamePlay = (() =>{

 //prompt for player 1 name
 let player1 = prompt("Player 1?")
 let player2 = prompt("Player 2?")
 alert(player1 +" goes first and will be X")

 

 //create players
 const players = [createPlayer(player1, "X"),createPlayer(player2, "O")];

 //track current player index - player X always goes first
 const currentPlayerIndex = 0;


 return {
  players,
  currentPlayerIndex
 }

})();










  







