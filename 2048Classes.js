// To do's
// fix the intializeBoard function
// get the random function in square working
// get the movements of the squares working - will have to get the keys reconized in 2048.js
// figure out how making copies of objects works and what not and same thing with arrays
// check that you are not in two states at once

// recent to do's
// 1) fill in functions outlined to draw board and check board 2) add function comments

//Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Board class
class Board {
  constructor(boardSize) {
    this.board = new Array(boardSize);
  }

  intializeBoard(boardSize) {
    for (var i = 0; i < boardSize; i++) {
      this.board[i] = new Array(boardSize);
    }

    for (var y = 0; y < boardSize; y++){
      for (var x = 0; x < boardSize; x++) {
        this.board[y][x] = new Square(x, y); // add random element to this later and add randomly adding numbers later too
      }
    }
  }

  getBoard() {
    return this.board;
  }

  checkBoard(newBoard){
    if (newBoard == this.board){
      return true;
    } else {
      return false;
    }
  }

  // working here
  moveUp() {
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

  constructor (yPos, xPos) {
    this.x_ = xPos;
    this.y_ = yPos;
    this.values = [0,2,4]; ///// fix this - FIND OUT HOW TO CALL ONE METHOD INSIDE ANOTHER
    this.value = this.values[getRandomInt(3)]; //getRandVal(); fix this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  setRandVal(){
    this.values = [0,2,4]; ///// fix this - FIND OUT HOW TO CALL ONE METHOD INSIDE ANOTHER
    this.value = this.values[getRandomInt(3)];  /// FIND OUT HOW TO USE THIS CODE ABOVE!!!!!!!!!!!!!
  }

  getValue() {
    return this.value;
  }

  combineSquare(){
    this.value = this.value * 2;
  }

  clearSquare (){
    this.value = 0;
  }

  setValue(value2){
    this.value = value2;
  }

}
