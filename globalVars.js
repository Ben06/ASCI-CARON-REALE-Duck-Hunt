var level=0;
var displayMenu=1;
// Vars relative to the canvas
var canvas, ctx, w, h;
var tabMonstres = [];
// etats des touches
var inputStates = {};
var spriteDuck = [];

// vars for counting frames/s, used by the measureFPS function
var frameCount = 0;
var lastTime;
var fpsContainer;
var fps;
var cooldown=true;
var countDeads=0;
var lost=false;
var displaySound=1;
//var audio = new Audio('music.mp3');
var music = new Howl({
	urls: ['music.mp3'],
	loop: true,
  	volume: 0.2
}).play();


 