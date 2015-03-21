/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
         

      

      

      Symbol.bindElementAction(compId, symbolName, "${goback}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("../AlienAttack.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Alien'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var hp;
         var dead = false;
         var el = sym.getSymbolElement();
         var hpTxt = sym.$('hpTxt');
         var dataType = "int";
         
         el.hide();
         
         function init(points)
         {	
         	hp = points;
         	changeDataType(points);
         	hpTxt.html(dataType);
         	el.fadeIn();
         }
         function changeDataType(points)
         {
             switch (points)
             {
                 case 1: 
                     dataType = "123456";
         				hpTxt.css("left","-25px");
                     break;
         
                 case 2:
                     dataType = "1234.56";
         				hpTxt.css("left","-25px");
                     break;
         
                 case 3:
                     dataType = "\"123456\"";
         				hpTxt.css("left","-24px");
                     break;
         
                 default:
                     break;
             }
         }
         function damage(points){
         	if(dead){
         		return false;
         	}
         	//hp -= points;
         	if(hp == points){		
         		dead = true;
         		hpTxt.html('');
         		sym.play('explode');
         		return true;
         	}		
         	else{
         		//hpTxt.html(hp);
         		//if(hp <= 20){
         			hpTxt.css("color","red");
         		//}
         		return false;
         	}		
         }
         ////PUBLIC
         function isDead(){
         	return dead;
         }
         sym.setVariable('init',init);
         sym.setVariable('damage',damage);
         sym.setVariable('isDead',isDead);
         /////////////

      });
      //Edge binding end

   })("Alien");
   //Edge symbol end:'Alien'

   //=========================================================
   
   //Edge symbol: 'TitleState'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var game = sym.getComposition().getStage();
         
         function init(){
         	sym.getSymbolElement().bind('click touchstart',function(){
         		game.getVariable('changeState')("PlayState");
         	});
         }
         
         init();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("TitleState");
   //Edge symbol end:'TitleState'

   //=========================================================
   
   //Edge symbol: 'TitleState_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var game = sym.getComposition().getStage();
         var aliens = [];
         var alienStart = {x:80,y:190};
         var alienSpacing = {x:170,y:170};
         var power = 1;
         var maxHP = 300;
         var hp = 300;
         var potion = 3;
         var alienAttackCounter = 25;
         var attackReady = false;
         var counter = 0;
         var gameTimer;
         var dataType = "int";
         var count = 0;
         
         function init(){	
         	initPlayer();	
         	spawnAliens();
         	initAliens();
         	initPotions();
         	startTimer();	
         }
         function initPlayer(){
         	changeDataType(power);
         	sym.$('.power').html(dataType);
         
         	sym.$('.hp').html(hp);
         
         	dataType = changeDataType(potion);
         	sym.$('.potion').html("your date type to: " + dataType);
         }
         function spawnAliens(){
         	var alien;
         	var el;	
         	var i;
         	var xPos = alienStart.x;
         	var yPos = alienStart.y;
         	var col = 0;
         	for(i = 0;i < 3;i++){		
         		alien = sym.createChildSymbol("Alien", "Stage");
         		alien.play(Math.random() * 1000);
         		aliens.push(alien);
         		el = alien.getSymbolElement();
         		el.css({"position":"absolute", "top":yPos + "px", "left":xPos + "px"});				
         		xPos += alienSpacing.x;
         
         	}	
         }
         function initAliens(){
         	var el;
         	var killed;			
         	$.each(aliens, function( count, a )
         	{
         		a.getVariable('init')(count + 1);
         		el = a.getSymbolElement();
         		count++;
         		el.bind('touchstart click',function()
         		{			
         			if(!attackReady){
         				return;
         			}		
         			attackReady = false;				
         			killed = a.getVariable('damage')(power);
         			if(killed){				
         				power += 1;
         				if (power == 4)
         					power = 1;
         				dataType = changeDataType(power);			
         				sym.$('.power').html(dataType);				
         			}
         			sym.getSymbol('waitBar').play(0);
         		});
         	});
         }
         function changeDataType(points)
         {
         	switch (points)
         	{
         		case 1: 
         			return "int";
         			break;
         
         		case 2:
         			return "double";
         			break;
         
         		case 3:
         			return "string";
         			break;
         
         		default:
         			break;
         	}
         }
         function initPotions(){
         	sym.$('potion').bind('click touchstart',function(){
         		if(!attackReady){
         			return;
         		}
         		else{
         			attackReady = false;
         
         			dataType = changeDataType(potion);			
         			sym.$('.power').html(dataType);	
         			power = potion;
         
         			potion--;
         			if (potion == 0)
         				potion = 3;	
         
         			dataType = changeDataType(potion);
         			sym.$('.potion').html("your date type to: " + dataType);
         
         			//hp += 50;
         			//hp = hp > maxHP ? maxHP : hp;
         			//sym.$('.hp').html(hp);
         			var bar = sym.getSymbol('waitBar');	
         			bar.play(0);						
         			if(potion === 0){
         				sym.$('potion').unbind('click touchstart');
         			}
         		}
         	});
         }
         function startTimer(){
         	gameTimer = setInterval(run,300)
         }
         function run(){
         	counter++;
         	count++;
         	checkWaitBar();
         	checkForAlienAttack();
         	checkForAlienLife();
         	checkForLife();
         }
         function checkWaitBar(){	
         	var bar = sym.getSymbol('waitBar');		
         	if(!bar.isPlaying()){
         		attackReady = true;
         	}
         }
         function checkForAlienAttack(){
         	if(counter === alienAttackCounter){
         		hp -= (Math.floor(Math.random() * 5) + 30);	
         		hp = hp < 0 ? 0 : hp;
         		sym.$('.hp').html(hp);
         		sym.getSymbol('healthBar').stop(hp/3 * 20);
         		var attackFlash = sym.createChildSymbol("Flash","Stage");	
         		attackFlash.getSymbolElement().delay(1000).fadeOut('fast',function(){
         			attackFlash.deleteSymbol();
         			counter = 0;
         			alienAttackCounter--;
         		});
         	}
         }
         function checkForAlienLife(){
         	var alien;
         	if(count === 25)
         	{
         		aliens[0].play('explode');
         		sym.$('.power').html("double");
         	}
         	else if(count === 55)
         	{
         		sym.$('.power').html("string");
         	}
         	else if(count === 70)
         	{
         		aliens[2].play('explode');
         		sym.$('.power').html("double");
         	}
         	//sym.$('.power').html(pos);
         	/*if (pos == 7500)
         		aliens[i].play('explode');	
         
         	for(i = 0;i < aliens.length;i++){
         		alien = aliens[i];
         		if(!alien.getVariable('isDead')()){
         			return;
         		};		
         	}	*/
         	//gameWin();
         }
         function checkForLife(){
         	if(hp === 0){		
         		gameLose();
         	}
         }
         function gameWin(){
         	window.game.GLOBALS.win = true;
         	clearInterval(gameTimer);	
         	setTimeout(function(){
         		game.getVariable('changeState')("GameOverState");		
         	},1000);	
         }
         function gameLose(){
         	clearInterval(gameTimer);	
         	window.game.GLOBALS.win = false;
         	game.getVariable('changeState')("GameOverState");		
         }
         init();

      });
      //Edge binding end

   })("PlayState");
   //Edge symbol end:'PlayState'

   //=========================================================
   
   //Edge symbol: 'TitleState_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var game = sym.getComposition().getStage();
         
         function init(){
         	var msg = window.game.GLOBALS.win ? "YOU SAVED US ALL" : "YOU FAILED US ALL";
         	sym.$('messageTxt').html(msg);
         	sym.getSymbolElement().bind('click touchstart',function(){
         		game.getVariable('changeState')("PlayState");
         	});
         }
         
         init();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("GameOverState");
   //Edge symbol end:'GameOverState'

   //=========================================================
   
   //Edge symbol: 'playAgainBtn'
   (function(symbolName) {   
   
   })("playAgainBtn");
   //Edge symbol end:'playAgainBtn'

   //=========================================================
   
   //Edge symbol: 'playAgainBtn_1'
   (function(symbolName) {   
   
   })("playBtn");
   //Edge symbol end:'playBtn'

   //=========================================================
   
   //Edge symbol: 'flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Flash");
   //Edge symbol end:'Flash'

   //=========================================================
   
   //Edge symbol: 'waitBar'
   (function(symbolName) {   
   
   })("waitBar");
   //Edge symbol end:'waitBar'

   //=========================================================
   
   //Edge symbol: 'p'
   (function(symbolName) {   
   
   })("potion");
   //Edge symbol end:'potion'

   //=========================================================
   
   //Edge symbol: 'waitBar_1'
   (function(symbolName) {   
   
      })("healthBar");
   //Edge symbol end:'healthBar'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-228448376");