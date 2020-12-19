// Author: Hewitt Watkins
// Description: JavaScript code to 2048
// Date: 12/18/2020

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Functions

function colorChoser(value){
  /*
  Purpose: Choose the color of a square based on its value.
  Parameters: The value (int) of the square.
  Returns: The color chosen (string).
  */
  if (value == 2){
    var color = "#00FFFF";
  } else if (value == 4){
    var color = "#7FFFD4";
  } else if (value == 8){
    var color = "#0000FF";
  } else if (value == 16){
    var color = "#8A2BE2";
  } else if (value == 32){
    var color = "#5F9EA0";
  } else if (value == 64){
    var color = "#008B8B";
  } else if (value >= 128){
    var color = "#00008B";
  }

  return color;
}

function gameOver(){
  /*
  Purpose: Erase the entire canvas and draw text telling the user the game is
           over.
  Parameters: None
  Returns: None
  */
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  message = "GAME OVER";
  message2 = "Press Enter to Play Again";
  var mText = ctx.measureText(message); //
  ctx.textBaseline = "middle";

  var textX = 0 + (canvas.width / 2) - mText.width / 2;
  var textY = 0 + (canvas.height / 2);
  ctx.fillText(String(message), textX, textY);
  ctx.strokeText(String(message), textX, textY);

  ctx.font = "50px Arial";
  var mText2 = ctx.measureText(message2);
  var textX2 = 0 + (canvas.width / 2) - mText2.width / 2;  // get this to align
  var textY2 = textY + 100;
  var mText2 = ctx.measureText(message2);
  ctx.fillText(String(message2), textX2, textY2);
  ctx.strokeText(String(message2), textX2, textY2);
}

function drawAll() {
  /*
  Purpose: Draw the current board using the updated public board object. The
           canvas is completely erased and redrawn each time the board is changed.
           Call the colerChoser function to determine the color of each square.
  Parameters: None. But relies on public board object to work.
  Returns: None
  */
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textBaseline = "middle";
  ctx.font = "100px Arial";
  var gap = 10;
  var board = board1.getBoard();
  var numCells = board1.getBoard().length
  for (var y = 0; y < numCells; y++){
    for (var x = 0; x < numCells; x++){
      var cellValue = board[y][x].getValue();
      color = colorChoser(cellValue);
      ctx.fillStyle = color;
      if (cellValue != 0){
        var cellSize = (canvas.width - (numCells - 1) * gap) / numCells;

        var cellLeftEdge = x * (cellSize + gap);
        var cellTopEdge = y * (cellSize + gap);
        ctx.fillRect(cellLeftEdge, cellTopEdge, cellSize, cellSize);
        ctx.stroke();

        ctx.fillStyle = "black";
        var mText = ctx.measureText(String(cellValue)); //
        ctx.textBaseline = "middle";

        var textX = cellLeftEdge + (cellSize / 2) - mText.width / 2;
        var textY = cellTopEdge  + (cellSize / 2);
        ctx.fillText(String(cellValue), textX, textY);
        ctx.strokeText(String(cellValue), textX, textY);
      }
    }
  }
}

function move(keyPressed) {
  /*
  Purpose: Use the key the user pressed to change the board and/or change the
           state of the game. Will use internal board class methods to do this.
           Call the drallAll() function if the game is not finished to draw the
           updated board. Finally, call the gameOver function if the game is over.
  Parameters: The key (string) that the user pressed.
  Returns: None
  */
  if (keyPressed == "w") {
    KEEP_PLAYING = board1.moveUp();
  } else if (keyPressed == "s"){
    KEEP_PLAYING = board1.moveDown();
  } else if (keyPressed == "a") {
    KEEP_PLAYING = board1.moveLeft();
  } else if (keyPressed == "d"){
    KEEP_PLAYING = board1.moveRight();
  }

  /*
    The statements below determine the future state of the game. If the board is
    not full, the game will continue regardless of the value of KEEP_PLAYING. That
    is why KEEP_PLAYING is set equal to true after the if statement. If either
    KEEP_PLAYING is true or BOARD_FULL is false, the game can continue. Otherwise,
    the game is over and the gameOver() function is called.
  */
  BOARD_FULL = board1.addNewSquare();
  if (BOARD_FULL == false || KEEP_PLAYING == true){
    KEEP_PLAYING = true;
    window.requestAnimationFrame(drawAll);
  } else {
    gameOver();
  }

}

function myKeyDown (event) {
  /*
  Purpose: When a key is pressed, this is called, and stores the string of the
           key that was pressed in a variable. Based on the value of this string,
           the function either calls the move() function to see if the board
           can be updated or resets the board if the user had just lost.
  Parameters: The key / event that occured.
  Returns: None
  */
  keyCode = event.which;
  keyStr = event.key;
  if (KEEP_PLAYING == false && keyStr == "Enter"){
    board1.intializeBoard(boardSize);
    KEEP_PLAYING = true;
  }                             // FIX REPTITIVE LOGIC HERE!!!!!!!!!!!!!!
  if (KEEP_PLAYING == true){
    move(keyStr);
  }

}

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// Main

// Setting up Canvas
var canvas = document.getElementById("mainCanvas");
canvas.style.border = "5px solid #483D8B";
var ctx = canvas.getContext("2d");

// Creating Board
var boardSize = 4;
var board1 = new Board(boardSize);
board1.intializeBoard(boardSize);
board1.moveDown();

// Boolean Variable that determines if the game should continue or not - used throughout program
KEEP_PLAYING = true;

// Setup / Call Event Listner
document.addEventListener("keydown", myKeyDown);

// Setup / Call Animation Engine
window.requestAnimationFrame(() => drawAll());
