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
  /*
    Parameters: event object, which contains information about the event
      that triggered the event listener.
    Returns: None, but modifies global variables which track response to event.
    Purpose: Make the animation respond to keys being pressed.
  */
  // One of the attributes of the event object is 'which,' contains the key
  //   that was pressed to trigger the event listener.
  keyCode = event.which;
  keyStr = event.key;
  console.log(event);
  console.log(keyCode);
  console.log(keyStr);
  move(keyStr);

}

function move(keyPressed) {
  if (keyPressed == "w") {
    newBoard = board1.moveUp(); // check this logic is correct here
    this.board = newBoard;
    console.log(newBoard);
  } else if (keyPressed == "d"){
    board1.moveDown();
  } else if (keyPressed == "a") {
    newBoard = board1.moveLeft();
  } else if (keyPressed == "d"){
    newBoard = board1.moveRight();
  }

}

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{

//  context.clearRect(0, 0, canvas.width, canvas.height);
  //for (tile of tileList) {
//    tile.move();
    //tile.draw();
//  }

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

// Main

// Setting up Canvas and what not
canvas = document.getElementById("mainCanvas");
// Set up the canvas and context objects
context = canvas.getContext("2d");

//document.addEventListener("keydown", myKeyDown); // FIX THIS LATER

/******************************************************************************/

// Actual Code with classes / real main starts here
// Create instance of Tile object
//tile1 = new Tile(0, 0);
//tileList = [tile1];

document.addEventListener("keydown", myKeyDown);

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
