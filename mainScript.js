// Inits
window.onload = function init() {
  var game = new GF();
  game.start();
};


// GAME FRAMEWORK STARTS HERE
var GF = function() {

    var player = {
      x: 10,
      y: 10,
      r: 10,
      v: 5,
      color: 'black',
      ammo:10,
      draw: function() {
        if(level!=0 && displayMenu!=1)
        {

          ctx.save();
          ctx.beginPath();
          ctx.translate(player.x-12, player.y-12)
          spriteDuck[14].renderMoving(0,0, 1);
          /*player.color = "black";
          player.r = 8
          ctx.arc(player.x, player.y, player.r, 0, 2 * Math.PI);
          ctx.fillStyle = player.color;
          ctx.fill();*/
          ctx.restore();
        }
        else
        {
          ctx.save();
          ctx.beginPath();
          ctx.translate(player.x-12, player.y-12)
          spriteDuck[14].renderMoving(0,0, 1);
          /*player.r = 5;
          player.color = "red";
          ctx.arc(player.x, player.y, player.r, 0, 2 * Math.PI);
          ctx.fillStyle = player.color;
          ctx.fill();*/
          ctx.restore();
        }
      }
    };

  /////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////// MAIN ///////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////


    var mainLoop = function(time) {
      //main function, called each frame 
      measureFPS(time);
      if(displaySound==1)
        music.unmute();
      else
      {
        music.mute();
      }
      // Clear the canvas
      clearCanvas();
      generateLvL(player);
      applyListeners(player);
      displayCurrentMenu();
      displayAmmosAndLevel(player);
      // draw the monster
      dessinerLesMonstres();
      mouseDown(player);
      player.draw();

      //menu de fin de niveau
      if (isLevelDone()&&level!=0) {

        if(displayMenu!=1)
        {
          //console.log("level done");
          start=false;
          if(level==10)
            displayMenu=3;
          else
            displayMenu=1;
          countDeads=0;
        }
      }

      //ctx.fillText("x : " + player.x+" y : "+player.y, 300, 300);

      console.log(cooldown);
      console.log("displaySound-main = "+displaySound);
      requestAnimationFrame(mainLoop);
    };


  var start = function() {
    // adds a div for displaying the fps value
    fpsContainer = document.createElement('div');
    document.body.appendChild(fpsContainer);
    spritesheet = new Image();
    //console.log("ok");
    //spritesheet.src="http://i.imgur.com/3VesWqx.png";
    spritesheet.onload = function() {
      //console.log("chargement de l'image");
      // info about spritesheet
      var SPRITE_WIDTH = 42;
      var SPRITE_HEIGHT = 42;
      var NB_DIRECTIONS = 1;
      var NB_FRAMES_PER_POSTURE = 3;
      initSpritesDuck(spritesheet, SPRITE_WIDTH, SPRITE_HEIGHT, 
       NB_DIRECTIONS, NB_FRAMES_PER_POSTURE);
      // Canvas, context etc.
      canvas = document.querySelector("#myCanvas");
      // often useful
      w = canvas.width;
      h = canvas.height;
      // important, we will draw with this object
      ctx = canvas.getContext('2d');

      addKeyListeners();
      // start the animation
      requestAnimationFrame(mainLoop);
      setInterval(setCooldown,400);
    }
    spritesheet.src="Duck_sprites2.png";
  };

  //our GameFramework returns a public API visible from outside its scope
  return {
    start: start
  };
};