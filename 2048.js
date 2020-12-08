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
board1.intializeBoard();
console.log(board1);
board1.moveDown();
console.log(board1);
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

// Functions

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



// Fire up the animation engine
window.requestAnimationFrame(drawAll);
