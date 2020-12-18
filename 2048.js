// Graphics are done - just add color change if you want // TODO:


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

// Functions

function myKeyDown (event) {
  keyCode = event.which;
  keyStr = event.key;
  console.log(event);
  console.log(keyCode);
  console.log(keyStr);
  move(keyStr);

}

function move(keyPressed) {
  if (keyPressed == "w") {
    board1.moveUp(); // check this logic is correct here
  } else if (keyPressed == "s"){
    board1.moveDown();
  } else if (keyPressed == "a") {
    board1.moveLeft();
  } else if (keyPressed == "d"){
    board1.moveRight();
  }

  board1.addNewSquare();  
  window.requestAnimationFrame(drawAll);
}

function drawAll() {
  //window.requestAnimationFrame(drawAll);
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FF0000";
  // ctx.fillRect(0, 0, 150, 75);
  ctx.textBaseline = "middle";
  ctx.font = "100px Arial";
  var gap = 10;
  var board = board1.getBoard();
  var numCells = board1.getBoard().length
  for (var y = 0; y < numCells; y++){
    for (var x = 0; x < numCells; x++){
      var cellValue = board[y][x].getValue()
      if (cellValue != 0){
        ctx.fillStyle = "#FF0000";
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
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(0, 0, 150, 75);

/******************************************************************************/
// Creating Board
var boardSize = 4;
var board1 = new Board(4);
board1.intializeBoard(4);
board1.moveDown();

document.addEventListener("keydown", myKeyDown);

// Fire up the animation engine
window.requestAnimationFrame(() => drawAll(window.innerWidth, window.innerHeight));
