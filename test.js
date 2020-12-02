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

/*
- 2D array of the board - type will be the square class
*/

// Class Definitions - probably in another file

/*
- square class - will know its position on the board, its value, will have methods
to move
*/

// Functions

/*
- this will call all the class methods and will mainly double check what methods
can be called and what can't be

quick function list:
- randomly add new things to board
- check move
  - Will make this faster by checking colum by column or row by row depending on if it is a left or right move or a up or down move
- call methods for squares to complete move
- do animation for move --> ask Dr. J what he thinks you should do for this - run both ways past hims
- keep score

*/

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{

  context.clearRect(0, 0, canvas.width, canvas.height);
  for (tile of tileList) {
    tile.move();
    tile.draw();
  }

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}

// Set up the canvas and context objects
context = setUpContext();

document.addEventListener("keydown", myKeyDown);

// Create instance of Tile object
tile1 = new Tile(0, 0);
tileList = [tile1];

// Fire up the animation engine
window.requestAnimationFrame(drawAll);

// Main
