  function Monstre(x, y, vx, vy,type) {
    this.x = x;
    this.y = y;
    this.x1 = x;
    this.y1 = y+10;
    this.vx = vx;
    this.vy = vy;
    if(type)this.type=type;else type=0;
    this.hp = 1;
    if(type==1) {this.hp=2;}
    if(type==2) {this.hp=3;}
    this.movingTo=0;
    this.bodyColor = 'lightblue';
    this.eyeColor = 'red';
    this.isDead = false;

    this.draw = function(ctx) {
      ctx.save();
      if (this.isDead) {
        this.y += 10;
//        ctx.translate(this.x, this.y);
        ctx.lineWidth = 2;
        ctx.save();
        ctx.fillStyle= "rgba(0, 0, 0, 0)";
        ctx.fillRect(this.x1, this.y1, 100, 100);
        if(this.movingTo==0)
        {
          // pos RIGHT
          spriteDuck[2].renderMoving(this.x, this.y, 2);
          //console.log(this.hitbox.movingTo);
        }
        else
        {
          // pos LEFT*
          spriteDuck[2].renderMoving(this.x, this.y, 2);
          //console.log(this.hitbox.movingTo);
        }
        ctx.restore();
      } else {
        //ctx.translate(this.x, this.y);
        if(this.movingTo==0)
        {
          switch(this.hp)
          {
            case 3:
              spriteDuck[4].renderMoving(this.x, this.y, 2);
              break;
            case 2:
              spriteDuck[6].renderMoving(this.x, this.y, 2);
              break;
            case 1:
              spriteDuck[1].renderMoving(this.x, this.y, 2);
              break;

          }
          // pos RIGHT
          //spriteDuck[1].renderMoving(this.x, this.y, 2);
          //console.log(this.hitbox.movingTo);
        }
        else
        {
          switch(this.hp)
          {
            case 3:
              spriteDuck[3].renderMoving(this.x, this.y, 2);
              break;
            case 2:
              spriteDuck[5].renderMoving(this.x, this.y, 2);
              break;
            case 1:
              spriteDuck[0].renderMoving(this.x, this.y, 2);
              break;
          }
          // pos LEFT*
          //spriteDuck[0].renderMoving(this.x, this.y, 2);
          //console.log(this.hitbox.movingTo);
        }
        //console.log(this.x);
        ctx.lineWidth = 2;
        ctx.save();
        ctx.fillStyle= "rgba(0, 0, 0, 0)";
        ctx.fillRect(this.x1, this.y1, 90, 60);
        ctx.restore();
      }
      ctx.restore();
    };

    this.move = function() {
      this.x += this.vx;
      this.x1 += this.vx;
      //this.y += this.vy;
      if (((this.x + 100) > w) ||
        (this.x < 0)) {
        this.movingTo=1;
        this.x -= this.vx;
        this.x1 -= this.vx;
        this.vx = -this.vx;
      }
      if(this.x == 0)
        this.movingTo=0;
      /*if (((this.y + 100) > h) ||
        (this.y < 0)) {
        this.y -= this.vy;
        this.vy = -this.vy;
      }*/
    };
  }




function creerDesMonstres(n,type,ligne,speed) {
  for (var i = 0; i < n; i++) {
   // console.log("creation monstre type = "+type);
    if(speed)
      tabMonstres.push(new Monstre(0, ligne*80,speed, 0, type));
    else
      tabMonstres.push(new Monstre(0, ligne*80,2, 0, type));
  }
}

function drawMenu(){
  ctx.save();
  ctx.fillStyle= "rgba(255, 255, 255, 100)";
  ctx.fillRect(230, 290, 300, 185);
  ctx.restore();
  for (var i = 310; i<470; i++)
  {
    ctx.fillText("|",225, i);
  }

  for (var i = 310; i<470; i++)
  {
    ctx.fillText("|", 525, i);
  }

  for (var i = 240; i<511; i++)
  {
    ctx.fillText("-", i, 296);
  }

  for (var i = 240; i<511; i++)
  {
    ctx.fillText("-", i, 296);
  }

}

function generateLvL(player1){
  switch(level) {
    case 0:
      start=false;
      ctx.font="20px Verdana";
      // creation du menu
      drawMenu();

      var title = new Image();

      title.src = "Duck_hunt_logo.png";
      ctx.drawImage(title, 230, 80);
      //creation des boutons

      spriteDuck[13].renderMoving(335, 320, 1);
      //ctx.fillText("START",315,140);
      //spriteDuck[9].renderMoving(305, 205, 1);
      //ctx.fillText("SCORES",310,220);
      spriteDuck[12].renderMoving(335, 400, 1);
      //ctx.fillText("INFOS",315,300);
      //spriteDuck[10].renderMoving(305, 370, 1);
      //ctx.fillText("QUITTER",305,380);
      break;
    case 1:
    if(start==true)
    {
      start=false;
      player1.ammo = 11;
      creerDesMonstres(1,0,0);
      creerDesMonstres(1,0,1);
      creerDesMonstres(1,0,2);
      creerDesMonstres(1,0,3);
      creerDesMonstres(1,0,4);
    }
    break;
    case 2:
    if(start==true){
      start=false;
      creerDesMonstres(1,0,0,4);
      creerDesMonstres(1,0,1);
      creerDesMonstres(1,0,2);
      creerDesMonstres(1,0,2,4);
      creerDesMonstres(1,0,3);
      creerDesMonstres(1,0,4,8);
      player1.ammo+=11;
    }
    break;
    case 3:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,1,0);
      creerDesMonstres(1,0,1);
      creerDesMonstres(1,0,2);
      creerDesMonstres(1,0,2,4);
      creerDesMonstres(1,0,3);
      creerDesMonstres(1,0,4,10);
      player1.ammo+=11;
    }
    break;
    case 4:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,1,0);
      creerDesMonstres(1,1,1);
      creerDesMonstres(1,2,2);
      creerDesMonstres(1,0,2,4);
      creerDesMonstres(1,1,3);
      creerDesMonstres(1,0,4,10);
      player1.ammo+=16;
    }
    break;
    case 5:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,1,0);
      creerDesMonstres(1,1,1);
      creerDesMonstres(1,2,2);
      creerDesMonstres(1,0,2,10);
      creerDesMonstres(1,1,2,4);
      creerDesMonstres(1,1,3);
      creerDesMonstres(1,0,4,15);
      player1.ammo+=16;
    }
    break;
    case 6:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,1,0);
      creerDesMonstres(1,1,1);
      creerDesMonstres(1,2,2);
      creerDesMonstres(1,0,2,10);
      creerDesMonstres(1,1,2,4);
      creerDesMonstres(1,0,3,6);
      creerDesMonstres(1,0,3,8);
      creerDesMonstres(1,0,4,15);
      player1.ammo+=16;
    }
    break;
    case 7:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,2,0);
      creerDesMonstres(1,2,1);
      creerDesMonstres(1,0,1,6);
      creerDesMonstres(1,2,2);
      creerDesMonstres(1,0,2,10);
      creerDesMonstres(1,1,2,4);
      creerDesMonstres(1,0,3,6);
      creerDesMonstres(1,0,3,8);
      creerDesMonstres(1,0,4,15);
      player1.ammo+=16;
    }
    break;
    case 8:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,2,0);
      creerDesMonstres(1,2,1);
      creerDesMonstres(1,1,1,6);
      creerDesMonstres(1,1,1);
      creerDesMonstres(1,2,2);
      creerDesMonstres(1,0,2,10);
      creerDesMonstres(1,1,2,4);
      creerDesMonstres(1,1,3,6);
      creerDesMonstres(1,1,3,8);
      creerDesMonstres(1,0,4,15);
      player1.ammo+=16;
    }
    break;
    case 9:
    if(start==true){
      start=false;
      creerDesMonstres(1,1,0,4);
      creerDesMonstres(1,2,0);
      creerDesMonstres(1,2,1);
      creerDesMonstres(1,1,1,6);
      creerDesMonstres(1,2,2);
      creerDesMonstres(1,1,2,10);
      creerDesMonstres(1,1,2,4);
      creerDesMonstres(1,1,3,6);
      creerDesMonstres(1,1,3,8);
      creerDesMonstres(1,1,4,15);
      creerDesMonstres(1,1,4,6);
      player1.ammo+=21;
    }
    break;
    case 10:
    if(start==true){
      start=false;
      creerDesMonstres(1,0,0,10);
      creerDesMonstres(1,0,0,14);
      creerDesMonstres(1,0,1,18);
      creerDesMonstres(1,1,1,8);
      creerDesMonstres(1,0,2,16);
      creerDesMonstres(1,1,2,8);
      creerDesMonstres(1,0,2,13);
      creerDesMonstres(1,0,3,11);
      creerDesMonstres(1,0,3,17);
      creerDesMonstres(1,0,4,16);
      creerDesMonstres(1,0,4,20);
      player1.ammo+=1;
    }
    break;
  }
}

function displayCurrentMenu(){
  if(displayMenu==1&&level!=0)
  {
    drawMenu();
    //menu entre les niveaux
    if(lost==true)
    {
      spriteDuck[8].renderMoving(325, 320, 1);
      //ctx.fillText("RESTART",305,140);
    }
    else
    {
      spriteDuck[11].renderMoving(340, 320, 1);
      //ctx.fillText("NEXT",315,140);
    }
    //spriteDuck[9].renderMoving(305, 205, 1);
    //ctx.fillText("SCORES",310,220);
    spriteDuck[12].renderMoving(335, 400, 1);
    //ctx.fillText("INFOS",315,300);
    //spriteDuck[10].renderMoving(305, 370, 1);
    //ctx.fillText("QUITTER",305,380);
  }
  //menu d'infos
  if(displayMenu==2)
  {
    //console.log("affichage du menu infos");
    drawMenu();
    ctx.fillText("Tirez sur les canards et",260,315);
    ctx.fillText("tuez les tous !!",300,340);
    ctx.fillText("Plus de munitions",280,380);
    ctx.fillText("=> GAME OVER !",280,410);
    // Plus de minutions = GAME OVER !!
    spriteDuck[10].renderMoving(340, 440, 1);
  }
  //fin du jeu
  if(displayMenu==3)
  {
    drawMenu();
    ctx.fillText("GGWP!!",300,340);
    // Plus de minutions = GAME OVER !!
    //spriteDuck[10].renderMoving(340, 440, 1);
  }
  //menu de pause
  if(displayMenu==4)
  {
    drawMenu();
    ctx.fillText("PAUSE",340,340);
    spriteDuck[10].renderMoving(340, 440, 1);
    // Plus de minutions = GAME OVER !!
    //spriteDuck[10].renderMoving(340, 440, 1);
  }

}

function displayAmmosAndLevel(player1)
{
  //afficher le niveau actuel
  if(displayMenu==0)
  {
    spriteDuck[27].renderMoving(72, 520, 1);
    spriteDuck[29].renderMoving(80,482,1);
    if(displaySound==1)
    {
      spriteDuck[30].renderMoving(100,482,1);
    }
    else
    {
      spriteDuck[31].renderMoving(100,482,1);
    }
    switch (level.toString()) {
        case "0":
            spriteDuck[16].renderMoving(100, 535, 1);
            break;
        case "1":
            spriteDuck[17].renderMoving(100, 535, 1);
            break;
        case "2":
            spriteDuck[18].renderMoving(100, 535, 1);
            break;
        case "3":
            spriteDuck[19].renderMoving(100, 535, 1);
            break;
        case "4":
            spriteDuck[20].renderMoving(100, 535, 1);
            break;
        case "5":
            spriteDuck[21].renderMoving(100, 535, 1);
            break;
        case "6":
            spriteDuck[22].renderMoving(100, 535, 1);
            break;
        case "7":
            spriteDuck[23].renderMoving(100, 535, 1);
            break;
        case "8":
            spriteDuck[24].renderMoving(100, 535, 1);
            break;
        case "9":
            spriteDuck[25].renderMoving(100, 535, 1);
            break;
      }
    //ctx.fillText("Niveau "+level, 30, 550);
    for(var count=0;count<tabMonstres.length-countDeads;count++)
    {
      //console.log("for iconduck "+tabMonstres.length);
      spriteDuck[28].renderMoving(210+(count*30), 530, 2);
    }
  }
  // Deplacer le monstre
  deplacerLesMonstres();
  if(player1.ammo>0 && level !=0 && displayMenu>=0)
  {

    spriteDuck[15].renderMoving(620, 525, 1);
    spriteDuck[26].renderMoving(655, 530, 1);

    var number ={};
    var str = player1.ammo.toString();
    number = str.split("");
   // console.log(number);
    if(number.length == 1)
    {
      spriteDuck[16].renderMoving(685, 523, 1);
      switch (number[0]) {
          case "0":
              spriteDuck[16].renderMoving(704, 523, 1);
              break;
          case "1":
              spriteDuck[17].renderMoving(704, 523, 1);
              break;
          case "2":
              spriteDuck[18].renderMoving(704, 523, 1);
              break;
          case "3":
              spriteDuck[19].renderMoving(704, 523, 1);
              break;
          case "4":
              spriteDuck[20].renderMoving(704, 523, 1);
              break;
          case "5":
              spriteDuck[21].renderMoving(704, 523, 1);
              break;
          case "6":
              spriteDuck[22].renderMoving(704, 523, 1);
              break;
          case "7":
              spriteDuck[23].renderMoving(704, 523, 1);
              break;
          case "8":
              spriteDuck[24].renderMoving(704, 523, 1);
              break;
          case "9":
              spriteDuck[25].renderMoving(704, 523, 1);
              break;
      }
    }
    else
    {
      switch (number[1]) {
          case "0":
              spriteDuck[16].renderMoving(704, 523, 1);
              break;
          case "1":
              spriteDuck[17].renderMoving(704, 523, 1);
              break;
          case "2":
              spriteDuck[18].renderMoving(704, 523, 1);
              break;
          case "3":
              spriteDuck[19].renderMoving(704, 523, 1);
              break;
          case "4":
              spriteDuck[20].renderMoving(704, 523, 1);
              break;
          case "5":
              spriteDuck[21].renderMoving(704, 523, 1);
              break;
          case "6":
              spriteDuck[22].renderMoving(704, 523, 1);
              break;
          case "7":
              spriteDuck[23].renderMoving(704, 523, 1);
              break;
          case "8":
              spriteDuck[24].renderMoving(704, 523, 1);
              break;
          case "9":
              spriteDuck[25].renderMoving(704, 523, 1);
              break;
      }
      switch (number[0]) {
          case "0":
              spriteDuck[16].renderMoving(685, 523, 1);
              break;
          case "1":
              spriteDuck[17].renderMoving(685, 523, 1);
              break;
          case "2":
              spriteDuck[18].renderMoving(685, 523, 1);
              break;
          case "3":
              spriteDuck[19].renderMoving(685, 523, 1);
              break;
          case "4":
              spriteDuck[20].renderMoving(685, 523, 1);
              break;
          case "5":
              spriteDuck[21].renderMoving(685, 523, 1);
              break;
          case "6":
              spriteDuck[22].renderMoving(685, 523, 1);
              break;
          case "7":
              spriteDuck[23].renderMoving(685, 523, 1);
              break;
          case "8":
              spriteDuck[24].renderMoving(685, 523, 1);
              break;
          case "9":
              spriteDuck[25].renderMoving(685, 523, 1);
              break;
      }
      
    }
    //ctx.fillText(player.ammo+" munitions", 300, 550);
  }
  else
  {
    if(level !=0 && displayMenu != 1)
    {
      ctx.fillText("PLUS DE MUNITIONS!!", 280, 550);
      if(!isLevelDone())
      {
        displayMenu=1;
        lost = true;
      }
    }
  }
}


function mouseDown(player1){
  // collisions avec les enemis et le viseur.
  if (inputStates.mousedown) {
    //ctx.fillText("PAN!" + inputStates.mouseButton, player.x, player.y + 30);
    if(player1.ammo>0 && cooldown==true){
      if(displayMenu==0)
      {
        if(player1.x >=0 && player1.x <=801){
          if(player1.y>=0 && player1.y <=460){
            if(displaySound==1){
              var sound = new Howl({
                urls: ['shoot.mp3']
              }).play();
            }
            player1.ammo--;
            cooldown=false;
            if (testeCollisionJoueurMonstres(player1)) {
              //player.color = 'red';
              //retourner le monstre qui a été toucher 
              var i = quelMonstreMort(player1);
              if (typeof tabMonstres[i]!= 'undefined')
              {  
                if(tabMonstres[i].hp==0){
                  tabMonstres[i].isDead = true;
                  //console.log("touché, hp = "+tabMonstres[i].hp);
                  //tabMonstres[i].bodyColor = 'red';
                }
                else
                {
                  //console.log("hp = "+tabMonstres[i].hp+", type = "+tabMonstres[i].type);
                  tabMonstres[i].hp--;
                  //console.log("touché, hp = "+tabMonstres[i].hp);
                  if(tabMonstres[i].hp==0)
                    tabMonstres[i].isDead = true;
                }
              }
            }
          }
        }
      }
    }

    // listener du menu de départ
    if(displayMenu == 1)
    {
      //start or next button
      if(player1.x >= 320 && player1.x <= 430)
      {
        if(player1.y >= 320 && player1.y <=340)
        {
          //console.log("clique sur le bouton next / start");
          if(lost==true){
            level=1;
            lost=false;
          }
          else
            level++;
          start=true;
          displayMenu=0;
          countDeads=0;
          tabMonstres = [];
        }
        if(player1.y >=400 && player1.y <=415)
        {
          //console.log("clique sur le bouton infos");
          displayMenu=2;
          //console.log(displayMenu);
        }
      }
    }
    if(displayMenu==2)
    {
      if(player1.x >= 330 && player1.x <= 420)
      {
        if(player1.y >= 440 && player1.y <=460)
        {
          displayMenu=1;
        }
      }
    }
    if(displayMenu==4)
    {
      if(player1.x >= 330 && player1.x <= 420)
      {
        if(player1.y >= 440 && player1.y <=460)
        {
          displayMenu=0;
          player1.ammo++;
        }
      }
    }

    if(player1.x>=80 && player1.x<=145)
    {
      if(player1.y>=480 && player1.y<=500)
      {
        if(cooldown==true)
        {
          cooldown=false;
          if(displaySound==1)
          {
            displaySound=0;
          }
          else
          {
            displaySound=1;
          }
        }
      }
      
    }
  }
}
