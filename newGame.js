// these are like the global variables defined at top

// The first two coordinates are one end, the second two are the other end.
var line = [0, 0, 0, 0];
var lineChange = [1, 2, 3, 4];

// First two coordinates are x,y of center, last is radius
var circlePos = [300, 300, 25];
var circleVel = [3, -3, 0];

// Count frames, track time so we can compute fps rate
var frames = 0;
var start = new Date();
var now = new Date();
console.log(start);

// functions start here

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

  if (keyStr == 'w') {
    // Move circle up
    circleVel[1] -= 10;
  }
  if (keyStr == 'a') {
    // Move circle left
    circleVel[0] -= 10;
  }
  if (keyStr == 's') {
    // Move circle down
    circleVel[1] += 10;
  }
  if (keyStr == 'd') {
    // Move circle right
    circleVel[0] += 10;
  }
}

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
  frames += 1;
  if (frames % 200 == 0) {
    now = new Date();
    msecs = now.getTime() - start.getTime();
    console.log(now.getTime());
    console.log("fps:", (frames / msecs) * 1000);
  }

  // Change the line endpoints some.
  line[0] += lineChange[0];
  line[1] += lineChange[1];
  line[2] += lineChange[2];
  line[3] += lineChange[3];

  circlePos[0] += circleVel[0];
  circlePos[1] += circleVel[1];

  // If the line hits the end of the canvas, bounce
  // Add/subtract a little speed
  if ((line[0] > canvas.width) || (line[0] < 0)) {
    lineChange[0] *= -1;
    lineChange[0] += Math.random() - 0.5;
    // console.log(lineChange);
  }
  if ((line[1] > canvas.height) || (line[1] < 0)) {
    lineChange[1] *= -1;
    lineChange[1] += Math.random() - 0.5;
    // console.log(lineChange);
  }
  if ((line[2] > canvas.width) || (line[2] < 0)) {
    lineChange[2] *= -1;
    lineChange[2] += Math.random() - 0.5;
    // console.log(lineChange);
  }
  if ((line[3] > canvas.height) || (line[3] < 0)) {
    lineChange[3] *= -1;
    lineChange[3] += Math.random() - 0.5;
    // console.log(lineChange);
  }

   //stopping circle from moving too fast
   if (circleVel[1] > 50) {
     circleVel[1] = 1
   }
   if (circleVel[0] > 50) {
     circleVel[0] = 1
   }

  // circle change if statements
  if ((circlePos[0] > canvas.width) || (circlePos[0] < 0)) {
    circleVel[0] *= -1;
    //circleVel[0] += Math.random() - 0.5;
    console.log(circleVel);
  }
  if ((circlePos[1] > canvas.height) || (circlePos[1] < 0)) {
    circleVel[1] *= -1;
    //circleVel[1] += Math.random() - 0.5;
    console.log(circleVel);
  }

  // Draw the line
  context.clearRect(0, 0, canvas.width, canvas.height);
//  context.lineWidth = 3;
//  context.lineCap = 'round';
//  context.beginPath();
//  context.moveTo(line[0], line[1]);
//  context.lineTo(line[2], line[3]);
  context.fillStyle = "#00ff00";
  context.fillRect(line[0], line[1], line[2] - line[0], line[3] - line[1]);
  context.stroke();

  //hopefully make circle move
  context.beginPath();
  context.arc(circlePos[0], circlePos[1], circlePos[2], 0, Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();


  /*
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke(); */



  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}

// main starts here

// Get width/height of the browser window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log("Window is %d by %d", windowWidth, windowHeight);

// Get the canvas, set the width and height from the window
canvas = document.getElementById("mainCanvas");
// I found that - 20 worked well for me, YMMV
canvas.width = windowWidth - 20;
canvas.height = windowHeight - 20;
canvas.style.border = "1px solid black";

// Set up the context for the animation
context = canvas.getContext("2d");

// draw circle
context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();

// set up listner and stuff for key events
document.addEventListener("keydown", myKeyDown);

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
