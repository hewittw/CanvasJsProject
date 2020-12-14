// Notes

/*
- make sure to always use percent of the window width - NEVER HARDCODE
- focus on how you are going to get the animation to work and how to integrate this with game logic
- could go one step farther by saving high score


from dr. j:
cell_0_0 = document.getElementById(“cell_0_0”); 
<td id=“cell_0_0”></td>
*/

// Global Variables
var boardSize = 4;

var board1 = new Board(4);
console.log(board1.getBoard());
board1.intializeBoard(4);
console.log(board1);
board1.moveDown();
console.log(board1);
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
  } else if (keyPressed == "d"){
    board1.moveDown();
  } else if (keyPressed == "a") {
    board1.moveLeft();
  } else if (keyPressed == "d"){
    board1.moveRight();
  }
  board1.checkBoard(keyPressed); // could be error
  boardFull = board1.addNewSquare(); // have a separate draw method for this and do after drawing movements
}

function drawAll() {

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

// Main

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

/******************************************************************************/


document.addEventListener("keydown", myKeyDown);

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
