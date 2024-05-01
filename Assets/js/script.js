//creates DOM object to update UI
const DOM = (() => {
  let startBtn = document.querySelector(".start");
  let gridContainer = document.querySelector(".board-container");
  let gameStatus = document.querySelector(".game-status");
  let wrapper = document.querySelector(".wrapper");


  return {
    startBtn,
    gridContainer,
    gameStatus,
    wrapper

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
  
  const getPlayers = ()=>{
    let player1name = prompt("Player 1, please enter your name");
    let player2name = prompt("Player 2, please enter your name here");

    let player1 = createPlayer(player1name, "X");
    let player2 = createPlayer(player2name, "O");

    alert("Click start game to continue!")

    return {
      player1,
      player2
    }
  }

  const {player1, player2} = getPlayers();

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
      return "Tie";
    }

    return false;
  };

  const resetGame = () =>{
    let resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset Game";
    resetBtn.addEventListener('click', ()=>{
      location.reload();
    });
    DOM.wrapper.append(resetBtn);



  }

  const play = (symbol) => { 

    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item)=> item.addEventListener('click', function (event){
    
    let index = event.target.dataset.index;

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

    DOM.startBtn.classList.add("hidden");
    let gameEnd = checkWinner();
    let player;

    if (gameEnd === "Tie") {
      DOM.gameStatus.innerHTML = `It is a tie!`;
      resetGame();
      

    } else if (gameEnd) {
      player1Turn? DOM.gameStatus.innerHTML = `${player2.name} Wins!` : DOM.gameStatus.innerHTML = `${player1.name} Wins!`;
      resetGame();
       

    } else {
      if (player1Turn) {
        player = player1;
        play(player.symbol);
        DOM.gameStatus.innerHTML = `${player.name}'s turn`;

      } else {
        player = player2;
        play(player.symbol);
        DOM.gameStatus.innerHTML = `${player.name}'s turn`;
      }
    }
  };

  //Testing DOM Elements
  const startGame = () => {
    gameBoard.renderBoard();
    takeTurn();
  };

  DOM.startBtn.onclick = startGame;
})();