//creates DOM object to update UI
const DOM = (() => {
  let startBtn = document.querySelector("button");
  let gridContainer = document.querySelector(".board-container");
  

  return {
    startBtn,
    gridContainer,

  };
})();

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  
  const renderBoard = ()=>{

    DOM.gridContainer.innerHTML = "";
    
    for (let i = 0; i<board.length;i++){
      let gridItem = document.createElement('div');
      gridItem.classList.add("grid-item");
      gridItem.innerText = board[i];
      gridItem.dataset.index = i;
      DOM.gridContainer.append(gridItem);
      }
  }

  return {
    board,
    renderBoard
  };
})();





const createPlayer = (name, symbol) => {
  return {
    name,
    symbol
  };
};

const gameController = (() => {
  //setup our players - this will be controlled by the DOM
  let player1 = createPlayer("Player 1", "X");
  let player2 = createPlayer("Player 2", "O");

  //set player counter and turn manager
  let player1Turn = true;

  const playerToggle = () => {
    player1Turn = !player1Turn;
  };

  const checkWinner = () => {
    let currentBoard = gameBoard.board;
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combo of winConditions) {
      const [a, b, c] = combo;
      if (
        currentBoard[a] != "" &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return true;
      }
    }
    if (currentBoard.every((item) => item != "")) {
      return true;
    }

    return false;
  };

  const play = (symbol) => { 

    let gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item)=> item.addEventListener('click', function (event){
      let index = event.target.dataset.index;
        console.log(gameBoard.board[index]);

        if (gameBoard.board[index] === "") {

          gameBoard.board[index] = symbol;
          gameBoard.renderBoard();
          playerToggle();
          takeTurn();

        } else {
          alert("There is already a symbol here");
        } 


    }))
  };

  const takeTurn = () => {
    let gameEnd = checkWinner();
    console.log(gameEnd);
    
    let player;
    console.log(player1Turn);

    if (gameEnd) {
      console.log("End of Game");

    } else {

      if (player1Turn) {
        player = player1;
        console.log(player.symbol)
        play(player.symbol);

      } else {
        player = player2;
        console.log(player.symbol)
        play(player.symbol);
      }
    }
  };

  //Testing DOM Elements

  const startGame = () => {
    console.log("game to start");
    gameBoard.renderBoard();
    takeTurn();
  };

  DOM.startBtn.onclick = startGame;
})();