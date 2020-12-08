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

  move(keyPressed) {
    if (keyPressed == "up") {
      newBoard = moveUp(); // check this logic is correct here
      this.board = newBoard;
    } else if (keyPressed == "down"){
      moveDown();
    } else if (keyPressed == "left") {
      moveLeft();
    } else {
      moveRight();
    }

  }

    moveUp() {
  		newBoard = board; // how make a copy of an array in javascript as I can in java??????????????????
  		for (var x = 0; x < (newBoard.length); x++) {
  			for (var y = newBoard.length - 1; y > 0; y--) {
  				if (newBoard[y][x].getValue() == newBoard[y-1][x].getValue()) {
  					newBoard[y-1][x].combineSquare();
  					newBoard[y][x].clearSquare();
  				} else if (newBoard[y-1][x].getValue() == 0) {
  					newBoard[y-1][x].setValue(newBoard[y][x].getValue());
  					newBoard[y][x].clearSquare();
  				}
  			}
  		}
    		return newBoard;
    	}

    moveDown() {

    }

    moveLeft() {

    }

    moveRight() {

    }

}

// Square class

class Square {

  constructor (yPos, xPos) {
    this.x_ = xPos;
    this.y_ = yPos;
    this.value = getRandVal();
  }

  getRandVal(){
    // use random function here to make the random new squares you need
  }

  getValue() {
    return this.value;
  }

}

// Tile Class
class Tile {

  constructor() {

  }

}
