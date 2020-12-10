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


  moveUp() {
		for (var x = 0; x < (this.board.length); x++) {
			for (var y = this.board.length - 1; y > 0; y--) {
        if (this.board[y-1][x].getValue() == 0) {
          console.log("move up");
					this.board[y-1][x].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
				} else if (this.board[y][x].getValue() == this.board[y-1][x].getValue()) {
          console.log("combine");
					this.board[y-1][x].combineSquare();
					this.board[y][x].clearSquare();
				}
			}
		}
  }

  moveDown() {
		for (var x = 0; x < (this.board.length); x++) {
			for (var y = 0; y < (this.board.length - 1); y++) {
        if (this.board[y+1][x].getValue() == 0) {
					console.log("combine");
          this.board[y+1][x].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
        } else if (this.board[y][x].getValue() == this.board[y+1][x].getValue()) {
					console.log("move down");
          this.board[y+1][x].combineSquare();
					this.board[y][x].clearSquare();
				}
			}
		}
	}

  moveLeft() {
		for (var y = 0; y < (this.board.length); y++) {
			for (var x = this.board.length -1; x > 0; x--) {
			  if (this.board[y][x-1].getValue() == 0) {
          console.log("move left");
					this.board[y][x-1].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
				} else if (this.board[y][x].getValue() == this.board[y][x-1].getValue()) {
          console.log("combine");
					this.board[y][x-1].combineSquare();
					this.board[y][x].clearSquare();
        }
			}
		}
	}

  moveRight() {
		for (var y = 0; y < (this.board.length); y++) {
			for (var x = 0; x < (this.board.length - 1); x++) {
			  if (this.board[y][x+1].getValue() == 0) {
          console.log("move right");
					this.board[y][x+1].setValue(this.board[y][x].getValue());
					this.board[y][x].clearSquare();
				} else if (this.board[y][x].getValue() == this.board[y][x+1].getValue()) {
          console.log("combine");
          this.board[y][x+1].combineSquare();
					this.board[y][x].clearSquare();
				}
			}
		}
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
    var val = 0;
    return val;// use random function here to make the random new squares you need
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

// Tile Class
class Tile {

  constructor() {

  }

}
