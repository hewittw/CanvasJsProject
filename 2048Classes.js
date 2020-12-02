// Board class
class Board {
  constructor(boardSize) {
    var this.board = new Array(4);
  }

  intializeBoard() {
    for (var i = 0; i < boardSize; i++) {
      board[i] = new Array(boardSize);
    }

    for (var y = 0; y < boardSize; y++){
      for (var x = 0; x < boardSize; x++) {
        board[y][x] = new Square(x, y);
      }
    }

    move(keyPressed) {
      if (keyPressed == "up") {
        moveUp();
      } else if (keyPressed == "down"){
        moveDown();
      } else if (keyPressed == "left") {
        moveLeft();
      } else {
        moveRight();
      }

    }

    moveUp() {

    }

    moveDown() {

    }

    moveLeft() {

    }

    moveRight() {

    }

  }
}

// Square class

class Square {

  constructor (yPos, xPos) {
    var this.x_ = xPos;
    var this.y_ = yPos;
    var value = 0;
  }

}

// Tile Class
class Tile {

  constructor() {

  }
  
}
