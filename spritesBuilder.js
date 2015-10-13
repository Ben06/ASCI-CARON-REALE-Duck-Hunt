///////////////////////////////////////////////////////////////////////////////////
///////////////////////////GESTION DES SPRITES ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

   function initSpritesDuck(img, spriteWidth, spriteHeight, nbLinesOfSprites, 
    nbSpritesPerLine){

    //W
    
    spriteDuck[0] = new Sprite(img,244,125,spriteWidth, spriteHeight,nbSpritesPerLine,24);
    //E
    spriteDuck[1] = new Sprite(img,0,0,spriteWidth, spriteHeight,nbSpritesPerLine,24);
    
    //duck fall

    spriteDuck[2] = new Sprite(img,280,6,24, spriteHeight,4,24);

    //W
    
    spriteDuck[3] = new Sprite(img,246,168,spriteWidth, spriteHeight,nbSpritesPerLine,24);
    //E
    spriteDuck[4] = new Sprite(img,0,43,spriteWidth, spriteHeight,nbSpritesPerLine,24);

    //W
    
    spriteDuck[5] = new Sprite(img,247,210,spriteWidth, spriteHeight,nbSpritesPerLine,24);
    //E
    spriteDuck[6] = new Sprite(img,0,85,spriteWidth, spriteHeight,nbSpritesPerLine,24);



    /*
    //N
    spriteDuck[2] = new Sprite(img,130,0,34, spriteHeight,nbSpritesPerLine,3);
    //S
    spriteDuck[3] = new Sprite(img,0,250 ,40, spriteHeight,nbSpritesPerLine,3);
    //N-W
    spriteDuck[4] = new Sprite(img,140,129,34, spriteHeight,nbSpritesPerLine,3);
    //N-E
    spriteDuck[5] = new Sprite(img,130,0,34, spriteHeight,nbSpritesPerLine,3);
    //S-W
    spriteDuck[6] = new Sprite(img,120,250,40, spriteHeight,nbSpritesPerLine,3);
    //S-E*/


    spriteDuck[7] = new Sprite(img,0,250 ,40, spriteHeight,nbSpritesPerLine,3);
    //RESTART
    spriteDuck[8] = new Sprite(img,7,300 ,120, 20,1,100);
    //SCORES
    spriteDuck[9] = new Sprite(img,7,330 ,105, 20,1,100);
    //QUIT
    spriteDuck[10] = new Sprite(img,7,354,67,20,1,100);
    //NEXT
    spriteDuck[11] = new Sprite(img,8,375,68,20,1,100);
    //INFOS
    spriteDuck[12] = new Sprite(img,8,398,82,20,1,100);
    //START
    spriteDuck[13] = new Sprite(img,8,415,86,20,1,100);
    //target
    spriteDuck[14] = new Sprite(img,10,438,26,24,1,25);
    //munitions
    spriteDuck[15] = new Sprite(img,12,468,11,30,1,25);

    //CHIFFRE
    //0
    spriteDuck[16] = new Sprite(img,134,300,17,20,1,25);
    //1
    spriteDuck[17] = new Sprite(img,151,300,17,20,1,25);
    //2
    spriteDuck[18] = new Sprite(img,168,300,17,20,1,25);
    //3
    spriteDuck[19] = new Sprite(img,185,300,16,20,1,25);
    //4
    spriteDuck[20] = new Sprite(img,202,300,15,20,1,25);
    //5
    spriteDuck[21] = new Sprite(img,217,300,16,20,1,25);
    //6
    spriteDuck[22] = new Sprite(img,233,300,16,20,1,25);
    //7
    spriteDuck[23] = new Sprite(img,249,300,16,20,1,25);
    //8
    spriteDuck[24] = new Sprite(img,263,300,17,20,1,25);
    //9
    spriteDuck[25] = new Sprite(img,280,300,17,20,1,25);

    //x (times)
    spriteDuck[26] = new Sprite(img,136,333,15,12,1,100);

    //level 
    spriteDuck[27] = new Sprite(img,136,354,80,20,1,100);

    //icon duck
    spriteDuck[28] = new Sprite(img,136,375,15,20,1,100);

    //icon sound
    spriteDuck[29] = new Sprite(img,134,396,16,20,1,100);

    //YES
    spriteDuck[30] = new Sprite(img,134,416,40,20,1,100);
    //NO
    spriteDuck[31] = new Sprite(img,136,437,24,20,1,100);

}


  function Sprite(spritesheet, x, y, width, height, nbImages, nbFramesOfAnimationBetweenRedraws) {
   this.spriteImages = [];
   this.currentFrame = 0;
   this.nbFrames = nbImages;
   this.nbTicksBetweenRedraws = nbFramesOfAnimationBetweenRedraws;
   this.nbCurrentTicks=0;

       // on parcour la ligne de l'image où se trouve les imagettes
       // d'animation
       var currentColonne = 0;
       for(var i = 0; i < nbImages; i++) {
       //console.log(i);
       // we extract the subimage
       var xStartOfImgInSpriteSheet = x+currentColonne*width;
       if((xStartOfImgInSpriteSheet+width) > spritesheet.width) {
         // we reached end of line of the sprite sheet, let's go
         // to the next line
         y += height;
         currentColonne = 0;
         i--;
         //console.log("passage à la ligne");
       } else {
         currentColonne++;
         //console.log("j'extrait img en (" + xStartOfImgInSpriteSheet + ", " +y + ")");
         this.spriteImages[i] = new SpriteImage(spritesheet, xStartOfImgInSpriteSheet, y, width, height);
       }

     }

     this.renderMoving = function(x, y, scale) {
       // renders animated sprite, changed every nbTicksBetweenRedraws
       // the frame number
       
       // draw the sprite with the current image
       //this.spriteImages[this.currentFrame].render(x, y, scale);
       this.spriteImages[this.currentFrame].render(x, y, scale);


       // increment the number of ticks of animation 
       this.nbCurrentTicks++;

       if(this.nbCurrentTicks > this.nbTicksBetweenRedraws) {
         // enough time elapsed, let's go to the next image
         this.currentFrame++;
         if(this.currentFrame == this.nbFrames) {
           this.currentFrame=0;
         }
         this.nbCurrentTicks = 0;
       }
     };
     this.render = function(x, y, scale) {
       // draws always frame 0, static position
       this.spriteImages[0].render(x, y, scale);
     };
   }

  function SpriteImage(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
     
    // xPos et yPos = position où dessiner le sprite,
    // scale = s'il faut rescaler.
    this.render = function(xPos, yPos, scale) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height, xPos, yPos, this.width*scale, this.height*scale);
    };
  }