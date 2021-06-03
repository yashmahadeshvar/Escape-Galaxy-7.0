class Game{
        constructor(){

        }
      
      start(){
        bg = createSprite(200,300,400,800);
        bg.addImage(backgroundIMG);
        bg.scale = 0.45;
        
        startButton = createSprite(200,200,50,10);
        startButton.addImage(startButtonIMG);
        startButton.scale = 0.3;

        title = createSprite(200,100,10,10);
        title.addImage(titleIMG);
        title.scale = 0.7;

        info = createSprite(81,572,10,10);
        info.addImage(infoIMG);
        info.scale = 0.08;        

       

      }

      setLevel1(){
        bg2 = createSprite(200,300,400,625);
        bg2.addImage(backgroundIMG2);
        bg2.scale = 0.9;
        bg2.visible = false;
       // bg2.velocityY = 2;

        astroJet = createSprite(200,580,10,10);
        astroJet.addImage(astroJetIMG);
        astroJet.visible=false;
        astroJet.scale = 0.4;

        helth1 = createSprite(310,25,10,10);
        helth1.addImage(helth1IMG);
        helth1.scale = 0.3;
        helth1.visible = false ;

        helth2 = createSprite(310,25,10,10);
        helth2.addImage(helth2IMG);
        helth2.scale = 0.4;
        helth2.visible = false ;

      }

      playLevel1(){

        textSize(18);
        text("level 1",170,25); 
        textSize(15);   
        text("Target = 1500",260,60);   
        
        bg2.visible = true;
        astroJet.visible = true;
        helth1.visible = true;
        helth2.visible = false;
        title.visible = false;

        if (frameCount % 90=== 0) {
          var alien = createSprite(100,70,50,50);
          alien.x = Math.round(random(50,350));
          alien.addImage(alienIMG);
          alien.scale = 0.25;
          alien.velocityY = 10;
          alien.lifetime = 200;
          alienGroup.add(alien);
       }


      if(keyDown("space")){
       var fireBall= createSprite(200,500,20, 20);
       fireBall.addImage(fireBallIMG);
       fireBall.x=astroJet.x;
       fireBall.velocityY = -8 ;
       fireBall.lifetime = 800;
       fireBall.scale = 0.1;
       fireBallGroup.add(fireBall);

  }
       if(fireBallGroup.isTouching(alienGroup)){
         alienGroup.destroyEach();
         fireBallGroup.destroyEach();
         score = score + 100
       }
       if(astroJet.isTouching(xpGroup)){
        xpGroup.destroyEach();
        xp1 = xp1 + 10
      }
      if(astroJet.isTouching(meteorGroup)){
        helth1.visible = false ;
        helth2.visible = true
      }

      if(score === 500){
        gameState = 2;
      }
      
       if(xp1 === 200){
        if(keyDown("space")){
          var laser2= createSprite(200,500,20, 20);
          laser2.addImage(laser2IMG);
          laser2.x=astroJet.x;
          laser2.velocityY = -8 ;
          laser2.scale = 0.1;
          laser2Group.add(laser2);
      }
       }
     

    
       
       //if (the fireball touches the alien){ it gets destroyed and score increases by 100}
      

       //create boost after every 200 frames
       
       //if (astrojet touches boost){ get bigger missile}

       //create meteors after every 150 frames

       //if (astrojet touches meteor or alien){ then lives reduce by 1}

       //if (score is 1000){ then gameState changes to 2}

       //if (lives is 0){ then go back to gameState 0}

      }


    playLevel2(){
      textSize(18);
      text("level 2",200,25); 
      textSize(15);   
      text("Target = 3000",260,60);  
        if (frameCount % 100=== 0) {
          var ufo = createSprite(100,70,50,50);
          ufo.x = Math.round(random(50,350));
          ufo.addImage(ufoIMG);
          ufo.scale = 0.50;
          ufo.velocityY = 9;
          ufo.lifetime = 800;
          ufoGroup.add(ufo);
       }
       if (frameCount % 40=== 0) {
        var laser1 = createSprite(100,70,50,50);
          laser1.x = Math.round(random(50,350));
          laser1.addImage(laser1IMG);
          laser1.scale = 0.1;
          laser1.velocityY = 20;
          laser1.lifetime = 800;
          laser1Group.add(laser1)
     }
       if(keyDown("space")){
        var missile= createSprite(200,500,20, 20);
        missile.addImage(missileIMG);
        missile.x=astroJet.x;
        missile.velocityY = -8 ;
        missile.lifetime = 800;
        missile.scale = 0.3;
        missileGroup.add(missile);
    }
      if(astroJet.isTouching(meteorGroup)){
        helth1.visible = false ;
        helth2.visible = true
      }

      if(missileGroup.isTouching(ufoGroup)){
        ufoGroup.destroyEach();
        missileGroup.destroyEach();
        score = score + 100
      }
      if(score === 1000){
        gameState = 3;
      }
    }

  playLevel3(){

    textSize(15);
    text("END LEVEL",200,25);   
    textSize(15);   
    text("Target = 5000",260,60);

    boss = createSprite(200,160,10,10);
    boss.addImage(bossIMG);
    boss.scale = 0.9;

    if (frameCount % 10 === 0) {
      var laser3 = createSprite(100,150,50,50);
        laser3.x = Math.round(random(50,350));
        laser3.addImage(laser3IMG);
        laser3.scale = 0.1;
        laser3.velocityY = 20;
        laser3.lifetime = 800;
        laser3Group.add(laser3)
   }
 if (frameCount % 5 === 0) {
   var laser4 = createSprite(100,70,50,50);
     laser4.x = Math.round(random(10,50));
     laser4.addImage(laser4IMG);
     laser4.scale = 0.1;
     laser4.velocityY = 20;
     laser4.lifetime = 800;
     laser4Group.add(laser4)
 }
 if (frameCount % 5 === 0) {
  var laser5 = createSprite(100,70,50,50);
    laser5.x = Math.round(random(350,390));
    laser5.addImage(laser5IMG);
    laser5.scale = 0.1;
    laser5.velocityY = 20;
    laser5.lifetime = 800;
    laser5Group.add(laser5)
 }
 if(keyDown("space")){
  var trident= createSprite(200,500,20, 20);
  trident.addImage(tridentIMG);
  trident.x=astroJet.x;
  trident.velocityY = -10;
  trident.lifetime = 800;
  trident.scale = 0.3;
  tridentGroup.add(trident);
 }
  if(score === 5000){
  }
 }

}