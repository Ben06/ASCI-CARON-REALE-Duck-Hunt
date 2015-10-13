
function applyListeners(player1)
{
  if (inputStates.space) {
    displayMenu=4;
  }
  if (inputStates.mousePos) {
    player1.x = inputStates.mousePos.x;
    player1.y = inputStates.mousePos.y;
    //ctx.fillText("x = " + inputStates.mousePos.x + " y = " + inputStates.mousePos.y, 150, 380);
  }
}

function getMousePos(evt) {
  // necessary to take into account CSS boudaries
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function addKeyListeners() {
  //add the listener to the main, window object, and update the states  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) {
      inputStates.left = true;
    } else if (event.keyCode === 38) {
      inputStates.up = true;
    } else if (event.keyCode === 39) {
      inputStates.right = true;
    } else if (event.keyCode === 40) {
      inputStates.down = true;
    } else if (event.keyCode === 32) {
      inputStates.space = true;
    }
  }, false);

  //if the key will be released, change the states object   
  window.addEventListener('keyup', function(event) {
    if (event.keyCode === 37) {
      inputStates.left = false;
    } else if (event.keyCode === 38) {
      inputStates.up = false;
    } else if (event.keyCode === 39) {
      inputStates.right = false;
    } else if (event.keyCode === 40) {
      inputStates.down = false;
    } else if (event.keyCode === 32) {
      inputStates.space = false;
    }
  }, false);

  // Mouse event listeners
  canvas.addEventListener('mousemove', function(evt) {
    inputStates.mousePos = getMousePos(evt);
  }, false);

  canvas.addEventListener('mousedown', function(evt) {
    inputStates.mousedown = true;
    inputStates.mouseButton = evt.button;
  }, false);

  canvas.addEventListener('mouseup', function(evt) {
    inputStates.mousedown = false;
  }, false);
}

