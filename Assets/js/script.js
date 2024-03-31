const gameBoard = (() => {
 const board = ["","","","","","","","",""]


 //render board + create a square with an index

 // you need to return so that it can be accessed by other modules
 return {
  board
 }

})();



//factory function that creates player object



const createPlayer = (name, symbol)=> {

 return {
  name,
  symbol
 }
};

const gamePlay = (() =>{

 //array of players
 

 //track current player


 // start game function
const gameStart = () => {

 //prompt for player 1 name
 let player1 = prompt("Player 1?")
 let player2 = prompt("Player 2?")
 alert("Player 1 goes first and will be X")

 //create players
 const players = [createPlayer(player1, "X"),createPlayer(player2, "O")];

 //track current player index - player X always goes first
 const currentPlayerIndex = 0;

 

 return {
  players,
  currentPlayerIndex
 }

}



  

// handle game click ( what happens when player chooses a cell?)
 // switch between player one symbol and player two symbol
 // check if cell is already occupied otherwise add symbol in cell

//return so that it can used
return {
 gameStart,

}



})();

gamePlay.gameStart();








  







