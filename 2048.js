// Graphics are done - just add color change if you want // TODO:

// ask dr. j about end of game and then also graphics colors
// also ask him if how I re draw the board is ok??????
// ask if my code is efficient / not to repetitive ????
// ask if I should make a loop????
// can you see all my work on git hub ???
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

// Functions

function colorChoser(value){
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
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");

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

function myKeyDown (event) {
  keyCode = event.which;
  keyStr = event.key;
  //console.log(event);
  //console.log(keyCode);
  console.log(keyStr);
  if (KEEP_PLAYING == false && keyStr == "Enter"){
    board1.intializeBoard(4);
    KEEP_PLAYING = true;
  }
  if (KEEP_PLAYING == true){
    move(keyStr);
  }

}

function move(keyPressed) {
  if (keyPressed == "w") {
    KEEP_PLAYING = board1.moveUp(); // check this logic is correct here
  } else if (keyPressed == "s"){
    KEEP_PLAYING = board1.moveDown();
  } else if (keyPressed == "a") {
    KEEP_PLAYING = board1.moveLeft();
  } else if (keyPressed == "d"){
    KEEP_PLAYING = board1.moveRight();
  }

  BOARD_FULL = board1.addNewSquare();
  if (KEEP_PLAYING == true || BOARD_FULL == false){
    window.requestAnimationFrame(drawAll);
  } else {
    gameOver(); // work on this line of code stopping the loop here!!!!
  }

}

function drawAll() {
  //window.requestAnimationFrame(drawAll);
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");

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
  // Loop the animation to the next frame.
  //window.requestAnimationFrame(drawAll);
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

// Main
var canvas = document.getElementById("mainCanvas");
canvas.style.border = "5px solid #483D8B";
var ctx = canvas.getContext("2d");
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(0, 0, 150, 75);

/******************************************************************************/
// Creating Board
var boardSize = 4;
var board1 = new Board(4);
board1.intializeBoard(4);
board1.moveDown();
KEEP_PLAYING = true;

document.addEventListener("keydown", myKeyDown);

// Fire up the animation engine
window.requestAnimationFrame(() => drawAll());
