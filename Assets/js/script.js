const gameBoard = (()=>{
  
  const board = ["","","","","","","","","",""];
  
  return {
    board
  };
   
  
})();

const createPlayer = (name, symbol) => {
  return{
    name,
    symbol
};
  
}

const gamePlay = (() => {
  
  //setup our players - this will be controlled by the DOM 
  let player1 = createPlayer("Player 1", "X");
  let player2 = createPlayer("Player 2", "O");
    
  //set player counter and turn manager
  let player1Turn = true;
  
  const playerToggle = () =>{
    player1Turn = !player1Turn;
  }
  
  const checkWinner = () =>{
    let currentBoard = gameBoard.board;
    let winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8], 
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for (let combo of winConditions){
      const [a,b,c] = combo;
      if (currentBoard[a]!="" && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
        return true;
      } else if (currentBoard.every(item => item!="")){
        return true;
      } else{
        return false;
      }
    }
   
}
  
  const play = (symbol) =>{
    //check player turn
    let index = prompt ("Where would you like to place your symbol?");
    console.log(gameBoard.board);
    if (gameBoard.board[index]==""){
      gameBoard.board[index] = symbol;
      playerToggle();
      alert(gameBoard.board)
      takeTurn();      
    } 
    alert("There is already a symbol here");
  }
  const takeTurn = () => {
    console.log(checkWinner());
     
    if (checkWinner()){
      console.log("End of Game");
    } else{
      if (player1Turn){
      let player = player1;
        play(player.symbol);
    } else {
      let player = player2;
      play(player.symbol);
    }
    };        
  }
  takeTurn();
})();