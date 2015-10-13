///////////////////////////////////////////////////////////////////////////////////
////////////////////////// MESURING FPS & UTILS ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

  var measureFPS = function(newTime) {

    // test for the very first invocation
    if (lastTime === undefined) {
      lastTime = newTime;
      return;
    }

    //calculate the difference between last & current frame
    var diffTime = newTime - lastTime;

    if (diffTime >= 1000) {
      fps = frameCount;
      frameCount = 0;
      lastTime = newTime;
    }

    //and display it in an element we appended to the 
    // document in the start() function
    fpsContainer.innerHTML = 'FPS: ' + fps;
    frameCount++;
  };

  // clears the canvas content
  function clearCanvas() {
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    //ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    //ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  // Functions for drawing the monster and maybe other objects
  function setCooldown(){
    cooldown=true;
  }

///////////////////////////////////////////////////////////////////////////////////
////////////////////////////// COLLISIONS /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

  function testeCollisionJoueurMonstres(player1) {
    //console.log(player1);
    for (var i = 0; i < tabMonstres.length; i++) {
      if (circRectsOverlap(tabMonstres[i].x1, tabMonstres[i].y1,80,60, player1.x, player1.y, player1.r)) {
        return true;
      }
    }
    return false;
  }

  function circleCollide(x1, y1, r1, x2, y2, r2) {
      var dx = x1 - x2;
      var dy = y1 - y2;
      return ((dx * dx + dy * dy) < (r1 + r2) * (r1 + r2));
    }
    // Collisions between rectangle
  function rectsOverlap(x0, y0, w0, h0, x2, y2, w2, h2) {
    if ((x0 > (x2 + w2)) || ((x0 + w0) < x2))
      return false;

    if ((y0 > (y2 + h2)) || ((y0 + h0) < y2))
      return false;
    return true;
  }

  // Collisions between rectangle and circle
  function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
    var testX = cx;
    var testY = cy;

    if (testX < x0) testX = x0;
    if (testX > (x0 + w0)) testX = (x0 + w0);
    if (testY < y0) testY = y0;
    if (testY > (y0 + h0)) testY = (y0 + h0);

    return (((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY)) < r * r);
  }

///////////////////////////////////////////////////////////////////////////////////
///////////////////////// GAMES UTILS  ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

  function quelMonstreMort(player1) {
    for (var i = 0; i < tabMonstres.length; i++) {
      if (circRectsOverlap(tabMonstres[i].x, tabMonstres[i].y, 100, 100, player1.x, player1.y, player1.r)) {
        return i;
      }
    }
    return false;
  }

  function dessinerLesMonstres() {
    for (var i = 0; i < tabMonstres.length; i++) {
      tabMonstres[i].draw(ctx);
    }
  }

  function deplacerLesMonstres() {
    for (var i = 0; i < tabMonstres.length; i++) {
      tabMonstres[i].move();
    }
  }

  function tuerMonstre(i) {
    tabMonstres[i].isDead = true;
    tabMonstres[i].bodyColor = 'red';
  }


  function isLevelDone() {
    var nbMonstres = 0;
    countDeads=0;
    if(displayMenu==0)
    {
      for (var i = 0; i < tabMonstres.length; i++) {
        if (tabMonstres[i].isDead == true) {
          countDeads++;
        }
        nbMonstres++;
      }
    //  console.log("countDeads : "+countDeads);
      if (countDeads == nbMonstres && level !=0) {
        if(countDeads==0)
          return false;
        else
          return true;
      }
      return false;
    }
    else
    {
      countDeads=0;
      return false;
    }
  }  