//Functions

function getRandomInt(max) {
  /*
  Purpose: To return a random number between zero and the number given (non-inclusive)
  Parameters: The max number to set the range of random numbers.
  Returns: The random number.
  */
  return Math.floor(Math.random() * Math.floor(max));
}

//Classes

// Board class
class Board {
  /*
  This class serves as the 2048 board. It contains a 2D array of Square objects
  that represents squares on the board. It contains class methods to update the
  board as moves are performed, to add new squares to be added to the board, etc.
  */

  // Constructor - instantiate board array
  constructor(boardSize) {
    this.board = new Array(boardSize);
  }

  // Create the 2D board array and assign all Square objects there beginning values
  intializeBoard(boardSize) {
    for (var i = 0; i < boardSize; i++) {
      this.board[i] = new Array(boardSize);
    }

    for (var y = 0; y < boardSize; y++){
      for (var x = 0; x < boardSize; x++) {
        this.board[y][x] = new Square();
      }
    }
  }

  getBoard() {
    return this.board;
  }

  moveUp() {
    /*
    Purpose: Shift and combine all parts of the board up. Also, check to see if
             the board changes and report if it does / doesn't. This plays a part
             in determing if the game will continue.
    Parameters: None
    Returns: A boolean value representing whether or not the board changed.
    */
    var BOARD_CHANGED = false;
		for (var x = 0; x < (this.board.length); x++) {
			for (var y = this.board.length - 1; y > 0; y--) {
        if (this.board[y-1][x].getValue() == 0) {
					this.board[y-1][x].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
          BOARD_CHANGED = true;
				} else if (this.board[y][x].getValue() == this.board[y-1][x].getValue()) {
					this.board[y-1][x].combineSquare();
					this.board[y][x].clearSquare();
          BOARD_CHANGED = true;
				}
			}
		}
    for (var i = 0; i < 2; i++){
      for (var x = 0; x < (this.board.length); x++) {
  			for (var y = this.board.length - 1; y > 0; y--) {
          if (this.board[y-1][x].getValue() == 0) {
            BOARD_CHANGED = true;
  					this.board[y-1][x].setValue(this.board[y][x].getValue());
  					this.board[y][x].clearSquare();
  				}
  			}
  		}
    }
    return BOARD_CHANGED;
  }

  moveDown() {
    /*
    Purpose: Shift and combine all parts of the board down. Also, check to see if
             the board changes and report if it does / doesn't. This plays a part
             in determing if the game will continue.
    Parameters: None
    Returns: A boolean value representing whether or not the board changed.
    */
    var BOARD_CHANGED = false;
		for (var x = 0; x < (this.board.length); x++) {
			for (var y = 0; y < (this.board.length - 1); y++) {
        if (this.board[y+1][x].getValue() == 0) {
					BOARD_CHANGED = true;
          this.board[y+1][x].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
        } else if (this.board[y][x].getValue() == this.board[y+1][x].getValue()) {
					BOARD_CHANGED = true;
          this.board[y+1][x].combineSquare();
					this.board[y][x].clearSquare();
				}
			}
		}
    for (var i = 0; i < 2; i++){
      for (var x = 0; x < (this.board.length); x++) {
        for (var y = 0; y < (this.board.length - 1); y++) {
          if (this.board[y+1][x].getValue() == 0) {
            BOARD_CHANGED = true;
            this.board[y+1][x].setValue(this.board[y][x].getValue());
            this.board[y][x].clearSquare();
          }
        }
      }
    }
    return BOARD_CHANGED;
	}

  moveLeft() {
    /*
    Purpose: Shift and combine all parts of the board left. Also, check to see it
             the board changes and report if it does / doesn't. This plays a part
             in determing if the game will continue.
    Parameters: None
    Returns: A boolean value representing whether or not the board changed.
    */
    var BOARD_CHANGED = false;
		for (var y = 0; y < (this.board.length); y++) {
			for (var x = this.board.length -1; x > 0; x--) {
			  if (this.board[y][x-1].getValue() == 0) {
          BOARD_CHANGED = true;
					this.board[y][x-1].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
				} else if (this.board[y][x].getValue() == this.board[y][x-1].getValue()) {
          BOARD_CHANGED = true;
					this.board[y][x-1].combineSquare();
					this.board[y][x].clearSquare();
        }
			}
		}
    for (var i = 0; i < 2; i++){
      for (var y = 0; y < (this.board.length); y++) {
        for (var x = this.board.length -1; x > 0; x--) {
          if (this.board[y][x-1].getValue() == 0) {
            BOARD_CHANGED = true;
            this.board[y][x-1].setValue(this.board[y][x].getValue());
            this.board[y][x].clearSquare();
          }
        }
      }
    }
    return BOARD_CHANGED;
	}

  moveRight() {
    /*
    Purpose: Shift and combine all parts of the board right. Also, check to see it
             the board changes and report if it does / doesn't. This plays a part
             in determing if the game will continue.
    Parameters: None
    Returns: A boolean value representing whether or not the board changed.
    */
    var BOARD_CHANGED = false;
		for (var y = 0; y < (this.board.length); y++) {
			for (var x = 0; x < (this.board.length - 1); x++) {
			  if (this.board[y][x+1].getValue() == 0) {
          BOARD_CHANGED = true;
					this.board[y][x+1].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
				} else if (this.board[y][x].getValue() == this.board[y][x+1].getValue()) {
          BOARD_CHANGED = true;
          this.board[y][x+1].combineSquare();
					this.board[y][x].clearSquare();
				}
			}
		}
    for (var i = 0; i < 2; i++){
      for (var y = 0; y < (this.board.length); y++) {
  			for (var x = 0; x < (this.board.length - 1); x++) {
  			  if (this.board[y][x+1].getValue() == 0) {
            BOARD_CHANGED = true;
  					this.board[y][x+1].setValue(this.board[y][x].getValue());
  					this.board[y][x].clearSquare();
  				}
  			}
  		}
    }
    return BOARD_CHANGED;
	}

  addNewSquare(){
    /*
    Purpose: Add new Square objects with random values to the board if there is
             any empty spots on the board. Record whether or not the board is full.
             This plays a part in determing if the game is over or not.
    Parameters: None
    Returns: A boolean value representing whether or not the board is full.
    */
    var BOARD_FULL = true;
    var emptySquares = new Array();
    for (var y = 0; y < this.board.length; y++){
      for (var x = 0; x < this.board.length; x++){
        if (this.board[y][x].getValue() == 0){
          emptySquares.push(this.board[y][x]);
          BOARD_FULL = false;
        }
      }
    }
    if (emptySquares.length != 0){
      emptySquares[getRandomInt(emptySquares.length)].setRandVal();
    }
    return BOARD_FULL;
  }
}

// Square class
class Square {
  /*
  The Square class allows objects to be created that represent Squares on the
  board. Orginally, the Square class was more useful when I was going to have animations.
  Nevertheless, the Square class contains lots of class methods that helps the board
  class update the board etc.
  */

  constructor () {
    this.values = [0,2,4];
    this.value = this.values[getRandomInt(3)];
  }

  // Determine the random value of a Square object when it is created
  setRandVal(){
    this.values = [0,2,4];
    this.value = this.values[getRandomInt(3)];
  }

  // Getter
  getValue() {
    return this.value;
  }

  // Setter
  setValue(value2){
    this.value = value2;
  }

  /*
  These 2 mothods below are all used to change the value of a Square when it
  is moved on the board
  */
  combineSquare(){
    this.value = this.value * 2;
  }

  clearSquare (){
    this.value = 0;
  }

}
