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
  //console.log("random num");
  //console.log(Math.floor(Math.random() * Math.floor(max)))
  return Math.floor(Math.random() * Math.floor(max));
}

// Board class
class Board {
  constructor(boardSize) {
    this.board = new Array(boardSize);
    this.tiles = new Array(boardSize);
  }

  intializeBoard(boardSize) {
    for (var i = 0; i < boardSize; i++) {
      this.board[i] = new Array(boardSize);
      this.tiles[i] = new Array(boardSize);
    }

    for (var y = 0; y < boardSize; y++){
      for (var x = 0; x < boardSize; x++) {
        console.log("here");
        this.board[y][x] = new Square(x, y); // add random element to this later and add randomly adding numbers later too
        this.tiles[y][x] = new Tile(x, y); // 3rd parameter is Square object
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
    for (var i = 0; i < 2; i++){
      for (var x = 0; x < (this.board.length); x++) {
  			for (var y = this.board.length - 1; y > 0; y--) {
          if (this.board[y-1][x].getValue() == 0) {
            console.log("move up");
  					this.board[y-1][x].setValue(this.board[y][x].getValue());
  					this.board[y][x].clearSquare();
  				}
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
    for (var i = 0; i < 2; i++){
      for (var x = 0; x < (this.board.length); x++) {
        for (var y = 0; y < (this.board.length - 1); y++) {
          if (this.board[y+1][x].getValue() == 0) {
            console.log("combine");
            this.board[y+1][x].setValue(this.board[y][x].getValue());
            this.board[y][x].clearSquare();
          }
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
    for (var i = 0; i < 2; i++){
      for (var y = 0; y < (this.board.length); y++) {
        for (var x = this.board.length -1; x > 0; x--) {
          if (this.board[y][x-1].getValue() == 0) {
            console.log("move left");
            this.board[y][x-1].setValue(this.board[y][x].getValue());
            this.board[y][x].clearSquare();
          }
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
    for (var i = 0; i < 2; i++){
      for (var y = 0; y < (this.board.length); y++) {
  			for (var x = 0; x < (this.board.length - 1); x++) {
  			  if (this.board[y][x+1].getValue() == 0) {
            console.log("move right");
  					this.board[y][x+1].setValue(this.board[y][x].getValue());
  					this.board[y][x].clearSquare();
  				}
  			}
  		}
    }
	}

  addNewSquare(){
    var boardFull = true;
    var emptySquares = new Array();
    for (var y = 0; y < this.board.length; y++){
      for (var x = 0; x < this.board.length; x++){
        if (this.board[y][x].getValue() == 0){
          emptySquares.push(this.board[y][x]);
          boardFull = false;
          console.log("addNewSquare");
          console.log(this.board[y][x]);
        }
      }
    }
    if (emptySquares.length != 0){
      console.log(emptySquares[getRandomInt(emptySquares.length)]);
      emptySquares[getRandomInt(emptySquares.length)].setRandVal();
    }
    return boardFull;
  }

  // drawBoard(){
  //   squareWidth = window.widthInner / 10;
  //   squareHeight = windowHeight / 10;
  //   ctx.fillStyle = "#FF0000";
  //   // ctx.fillRect(0, 0, 150, 75);
  //   for (var y = 0; y < this.board.length; y++){
  //     for (var x = 0; x < this.board.length; x++){
  //       ctx.fillRect(0.5*windowWidth, 0, 150, 75);
  //     }
  //   }
  // }

  // do later
  checkBoard(moveType){
    if (moveType == "w"){

    }
  }

}

// Square class

class Square {

  constructor (yPos, xPos) {
    this.x_ = xPos;
    this.y_ = yPos;
    this.values = [0,2,4]; ///// fix this - FIND OUT HOW TO CALL ONE METHOD INSIDE ANOTHER
    this.value = this.values[getRandomInt(3)]; //getRandVal(); fix this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(this.value);
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

// Tile Class - would use if I was doing the animation
class Tile {
  // get Dr. J to help you make sure everything is depedent on the screen size
  constructor(x, y) { // do I have to pass the board
    //windowWidth = window.innerWidth;
    //windowHeight = window.innerHeight; // ask dr. j why this isn't working ??????
    //value = Square1.getValue();
    this.xPos = x;
    this.yPos = y;
    // use list and indexing list to store information to draw the tiles
    // will have to do an orginal draw board method - don't draw unitl all values are known as not drawing non zero squares
  }
  // at any given time, you will only be drawing, moving, or deleting
  drawTile(x, y){

  }

  moveTile(oldX, oldY, newX, newY){

  }

  deleteTile(){

  }

  drawValue(value){

  }

  endGame(GAME_OVER){

  }

}
