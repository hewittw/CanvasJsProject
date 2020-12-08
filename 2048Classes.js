// To do's
// fix the intializeBoard function
// get the random function in square working
// get the movements of the squares working - will have to get the keys reconized in 2048.js
// figure out how making copies of objects works and what not and same thing with arrays

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
        console.log("here");
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

  move(keyPressed) {
    if (keyPressed == "w") {
      newBoard = moveUp(); // check this logic is correct here
      this.board = newBoard;
      console.log(newBoard);
    } else if (keyPressed == "d"){
      moveDown();
    } else if (keyPressed == "a") {
      moveLeft();
    } else if (keyPressed == "d"){
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
    this.value = 2; //getRandVal(); fix this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  getRandVal(){
    var val = 2;
    return val;// use random function here to make the random new squares you need
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
