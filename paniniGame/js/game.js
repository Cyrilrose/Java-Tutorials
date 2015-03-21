$(function() {

  
    // game leveles
    var gemelevel = 1;

    // level1
    var question1 = "<p class='question'>please collect statements which will generate this output:</p><br/><p class='answer'>Hello World!</p</b>";
    // code order
    var answerOrder1 = "1234";

    // initialize
    $("#gameQuestionPanel").append(question1);

    // code carrying
    var word1 = new Image();
    word1.src = "./img/1.png";
    word1.value = "String str;\n";
    word1.order = '1';
    word1.speed =6;
    var word2 = new Image();
    word2.src = "./img/2.png";
    word2.value = "str = \"Hello World!\";\n";
    word2.order = '2';
    word2.speed = 5;
    var word3 = new Image();
    word3.src = "./img/3.png";
    word3.value = "System.out.print(str);\n";
    word3.order = '3';
    word3.speed = 4;
  var word4 = new Image();
  word4.src = "./img/4.png";
  word4.value = "";
  word4.order = '4';
  word4.speed = 7;

    var word5 = new Image();
    word5.src = "./img/2.png";
    word5.value = "System.out.print(3str);\n";
    word5.order = 'a';
    word5.speed = 5;
    var word6 = new Image();
    word6.src = "./img/3.png";
    word6.value = "Str = \"Hello Kitty!\";\n";
    word6.order = 'a';
    word6.speed = 6;
  
   var word7 = new Image();
   word7.src = "./img/1.png";
   word7.value = "String 3str;\n";
   word7.order = 'a';
   word7.speed = 7;

    var heroImg = new Image();
    heroImg.src = "./img/hero.png";

    var bg = new Image();
    bg.src = "./img/bg.png";

    $("#startgame").bind("click", function() {
        App.gameStart("canvas", 6);

        // var $content = $("#pausegame");
        // if($content.is(":visible")){
        // $content.hide();
        // $("#startgame").show();
        // }else{
        // $content.show();
        // $("#startgame").hide();
        // }
    });

    function Money(x, y, speed, img) {
  
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.width = img.width;
        this.height = img.height;
        this.img = img;
        this.value = img.value;
        this.order = img.order;
    }


    Money.prototype = {
        draw : function(ctx) {
            ctx.drawImage(this.img, this.x, this.y);
            ctx.textAlign = "center";
            ctx.fillStyle = "black";
            ctx.font = 'bold 13px courier';
            ctx.fillText(this.value, this.x + 50, this.y);
        },
        move : function() {
            this.y += this.speed;
        }
    }

    //panini
    function Hero(x, y, img) {
        this.grade = 0;
        this.life = 3;
        this.x = x;
        this.y = y;
        this.img = img;
        this.width = img.width;
        this.height = img.height;
        this.orders = '';
    }


    Hero.prototype = {
        draw : function(ctx) {
            ctx.drawImage(this.img, this.x, this.y);
        },
        touch : function(other) {
            if(this.x + this.width > other.x && this.x < other.x + other.width && this.y + this.height > other.y && this.y < other.y + other.height) {
                this.orders += ('' + other.order);
                this.grade += other.value;
                return true;
            }
            return false;
        },
  
        drawFood : function(ctx, foodList) {
            // ctx.drawImage(this.img, this.x, this.y);
            for(var i = 0; i < foodList.length; i++) {
                var food = foodList[i];
                ctx.drawImage(food.img, this.x + 15, this.y - (i * 20));

                ctx.textAlign = "center";
                ctx.fillStyle = "black";
                ctx.font = 'bold 15px courier';
                ctx.fillText(food.value, this.x + 30, this.y - (i * 30));
            };
        }
    }


    var audioBg = document.createElement('audio');

    function PlayAudioBg() {
        audioBg.setAttribute('src', './sound/play.ogg');
        audioBg.load();
        audioBg.loop = true;
        audioBg.play();
    }

    function PauseAudioBg() {
        audioBg.pause();
    }

    var audioClick = document.createElement('audio');

    function PlayAudioClickRight() {
        audioClick.setAttribute('src', './sound/ClickRight.wav');
        audioClick.load();
        audioClick.play();
    }

    function PlayAudioClickWrong() {
        audioClick.setAttribute('src', './sound/ClickWrong.wav');
        audioClick.load();
        audioClick.play();
    }

    function PlayAudioWin() {
        audioClick.setAttribute('src', './sound/win.wav');
        audioClick.load();
        audioClick.play();
    }

    function PlayAudioLose() {
        audioClick.setAttribute('src', './sound/lose.wav');
        audioClick.load();
        audioClick.play();
    }

  
    function orderCheck(orders) {

        if(orders.trim().length == 0 || orders.trim() == '') {
            return true;
        } else if(orders.trim().length == 1) {
            if(orders.substring(0, 1) == "1") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 2) {
            if(orders.substring(0, 2) == "12") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 3) {
            if(orders.substring(0, 3) == "123") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 4) {
            if(orders.substring(0, 4) == "1234") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 5) {
            if(orders.substring(0, 5) == "12345") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 6) {
            if(orders.substring(0, 6) == "123456") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 7) {
            if(orders.substring(0, 7) == "1234567") {
                return true;
            } else {
                return false;
            }
        } else if(orders.trim().length == 8) {
            if(orders.substring(0, 8) == "12345678") {
                return true;
            } else {
                return false;
            }
        }
    }


    function lifePadUpdate(lifes) {
        if(lifes == 0) {
            $("#lifePanel").empty();
            $("#lifePanel").append("<img src='./img/heart_black.png' id='lifeheart1' />");
            $("#lifePanel").append("<img src='./img/heart_black.png' id='lifeheart1' />");
            $("#lifePanel").append("<img src='./img/heart_black.png' id='lifeheart1' />");
        } else if(lifes == 1) {
            $("#lifePanel").empty();
            $("#lifePanel").append("<img src='./img/heart_red.png' id='lifeheart1' />");
            $("#lifePanel").append("<img src='./img/heart_black.png' id='lifeheart1' />");
            $("#lifePanel").append("<img src='./img/heart_black.png' id='lifeheart1' />");
        } else if(lifes == 2) {
            $("#lifePanel").empty();
            $("#lifePanel").append("<img src='./img/heart_red.png' id='lifeheart1' />");
            $("#lifePanel").append("<img src='./img/heart_red.png' id='lifeheart2' />");
            $("#lifePanel").append("<img src='./img/heart_black.png' id='lifeheart1' />");
        } else if(lifes == 3) {
            $("#lifePanel").empty();
            $("#lifePanel").append("<img src='./img/heart_red.png' id='lifeheart1' />");
            $("#lifePanel").append("<img src='./img/heart_red.png' id='lifeheart2' />");
            $("#lifePanel").append("<img src='./img/heart_red.png' id='lifeheart3' />");
        }
    }

    var App = {
  
        elements : [],
        elements_food : [],
        backImg : bg,
        imgs : [word1, word2, word3, word4, word5, word6,word7],
        hero : null,

        canvas : null,
  
        context : null,

        timer : null,
  
        speed : 0,
        pause : false,
  
        draw : function() {
  
            this.context.clearRect(0, 0, this.canvas.width, canvas.height);

            this.context.drawImage(this.backImg, 0, 0);
  
            this.hero.draw(this.context);
 
            for(var i = 0; i < this.elements.length; i++) {
                var o = this.elements[i];

                if(o.x > this.canvas.width || o.x < 0 || o.y > this.canvas.height || o.y < 0) {
                    this.elements.splice(i, 1);
                } else if(this.hero.touch(o)) {

  
                    this.elements_food.push(o);

  
                    this.elements.splice(i, 1);
                    PlayAudioClickRight();

                    if(!orderCheck(this.hero.orders)) {
                        PlayAudioClickWrong();
                        this.hero.life--;
                        this.hero.orders = '';
                        this.hero.grade = '';

                        this.elements_food = [];

                        //resetTimer();

                        lifePadUpdate(this.hero.life);
                    } else if(orderCheck(this.hero.orders) && this.hero.orders.trim() == answerOrder1) {
  

                        finishTimer();

                        App.gameWin();
                        PauseAudioBg();
                        PlayAudioWin();
                    }

                } else {
                    o.draw(this.context);
                }
            }

            this.hero.drawFood(this.context, this.elements_food);

  
             this.context.textAlign = "left";
             this.context.font = 'normal 15px times new roman';
             this.context.fillStyle = "#f00";

            

            for(var ee=0; ee< this.elements_food.length; ee++){
            	this.context.fillText("" + this.elements_food[ee].value, 5,  15 + ee*20);
            }
            
        },
  
        loop : function() {
            var me = App;
            if(me.pause) {
                return;
            }
            for(var i = 0; i < me.elements.length; i++) {
                me.elements[i].move();
            }
            var chance = Math.random() * 200;
            // posibility    ==>  1/40
            if(chance < 5) {
                var img = me.imgs[parseInt(chance % me.imgs.length)];
                var x = Math.random() * (me.canvas.width - me.imgs[parseInt(chance % me.imgs.length)].width);
                var y = 0;
                var speed = img.speed;
                var money = new Money(x, y, speed, img);
                me.addElement(money);
            }
            me.draw();



            if(me.hero.life == 0 || $("#timeoutflag").attr("value") == "true") {

                finishTimer();

                me.gameOver();
                PauseAudioBg();
                PlayAudioLose();
            }
        },

        gameStart : function(id, speed) {
            var me = this;            
            this.elements_food = [];
            me.canvas = document.getElementById(id);
            me.context = me.canvas.getContext("2d");
            me.speed = speed;
            me.hero = new Hero((me.canvas.width - heroImg.width) / 2, me.canvas.height - heroImg.height, heroImg);
            me.hero.elements_food = [];
            me.hero.life = 3;
            lifePadUpdate(this.hero.life);
            if(this.timer != null)
                me.gameOver();
            me.canvas.onmousemove = function(e) {
                e = window.event || e;
 
                var x = e.clientX - 250 - me.canvas.offsetLeft - me.hero.width / 2;

                if(x > 0 && x < me.canvas.width - me.hero.width) {
                    me.hero.x = x;
                }
            }
            me.timer = setInterval(me.loop, me.speed * 10);

            resetTimer();
            PlayAudioBg();
        },
 
  gamePause : function() {
            this.pause = true;
            this.context.textAlign = "center";
            this.context.fillStyle = "red";
            this.context.font = 'bold 50px courier';
            this.context.fillText("PAUSE", this.canvas.width / 2, this.canvas.height / 2);
            this.context.font = 'bold 30px courier';
            this.context.fillText("Press space to continue", this.canvas.width / 2, this.canvas.height / 2 + 40);

            stopTimer();
            PauseAudioBg();
        },
  
        gameOver : function() {
            clearInterval(this.timer);
            this.elements = [];
            this.elements_food = [];
            this.pause = false;
            this.timer = null;
            this.context.textAlign = "center";
            this.context.fillStyle = "red";
            this.context.font = 'bold 40px time new roman';
            this.context.fillText("Game Over!", this.canvas.width / 2, this.canvas.height / 2);

            finishTimer();
        },
  
        addElement : function(o) {
            this.elements.push(o);
        },
  
        gameWin : function() {
            clearInterval(this.timer);
            this.elements = [];
  
            this.pause = false;
            this.timer = null;
            this.context.textAlign = "center";
            this.context.fillStyle = "red";
            this.context.font = 'bold 40px times new roman';
            this.context.fillText("Congratulations!You Win!", this.canvas.width / 2, this.canvas.height / 2);	    
		},
  
        addElement : function(o) {
            this.elements.push(o);
        }
    }

    window.onload = function() {


        var can = document.getElementById("canvas");
        var ctx = document.getElementById("canvas").getContext("2d");


        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(heroImg, (can.width - heroImg.width) / 2, can.height - heroImg.height);
        ctx.textAlign = "center";
        ctx.fillStyle = "red";
        ctx.font = 'bold 30px times new roman';
        ctx.fillText("Press 'New Game' to start", can.width / 2, can.height / 2);
        document.onkeyup = function(e) {
            if(e.keyCode != 32) {
                return;
            }
            if(App.timer == null) {
                App.gameStart("canvas", 6);
                resetTimer();
            } else if(App.pause) {
                App.pause = false;

                runTimer();
                PlayAudioBg();
            } else {
                App.gamePause("canvas", 6);

                stopTimer();
            }
        }
    }


})