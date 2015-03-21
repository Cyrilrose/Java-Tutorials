$(function() {
    var gridWrap = $("#gridWrap"), bgGrid = $("#gridBgWrap .grid"), //grid
    frontGrid = $("#gridFrontWrap .grid"), thumbnailsWrap = $("#thumbnailsWrap"), thumbnails = $(".thumbnails"), // blueberry
    curThumbnailsIndex = 0;
 


    var life = 3;
  
    var questionPre = "<br>Put blueberry at <br><br> <p class = 'answer'>waffle";

    var questionTitle = "";

    var questionAnswer = "";

    function initQuestion() {
        var i = parseInt(Math.random() * 5);
        var j = parseInt(Math.random() * 5);
        questionAnswer = "[" + i + "]" + "[" + j + "]";
        questionTitle = questionPre + questionAnswer;

        $("#questionTitle").val(questionTitle);
        $("#gameQuestionPanel").empty().append(questionTitle);
    }
    
    $("#startgame").bind("click", function() {
        App.gameStart();
    });
    
    

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


    thumbnails.draggable({
        helper : "original",
        revert : "invalid",
        cursor : "move",

        start : function(event, ui) {// move mouse to move blueberry

            $("#blueberryStatus").val("thumbnails start");
            
            // $(this).addClass("highlight");
        },
        drop : function(event, ui) {// movement

            $("#showselect").val(curThumbnailsIndex);
            $("#blueberryStatus").val("thumbnails drop");

            // frontGrid.eq(curThumbnailsIndex).addClass("opacity0");
         
            var curThumbnails = thumbnails.eq(curThumbnailsIndex).get(0);
          
            // curThumbnails.innerText = curThumbnails.dataset.sign;
    
                         
            // $(this).removeClass("highlight");
        },
        stop : function(event, ui) {
            $("#showselect").val(curThumbnailsIndex);
            $("#blueberryStatus").val("thumbnails drop");

            $(this).removeClass("highlight");
        }
    });

    // 果盘格子
    bgGrid.droppable({
        accept : thumbnails,


        over : function(event, ui) {            curThumbnailsIndex = bgGrid.index($(this));
            // current location of blue berry
            $("#showselect").val(curThumbnailsIndex);
            $("#op").val("bgGrid over");
            
            $(this).addClass("highlight");
        },
        out : function(event, ui) {
            //    $("#showselect").val(curThumbnailsIndex);
            $("#op").val("bgGrid out");

            $(this).removeClass("highlight");
        },
        drop : function(event, ui) {
            curThumbnailsIndex = bgGrid.index($(this));
                  // current location of blue berry

            $("#showselect").val(curThumbnailsIndex);
            $("#op").val("bgGrid drop");

            
            var curGrid = bgGrid.eq(curThumbnailsIndex).get(0);
            // get the position of the grid
            // curGrid.innerText = curGrid.dataset.sign;
            var selectedValue = curGrid.dataset.sign;
            $("#blueberryPosition").val(selectedValue.toString());

            if(selectedValue === questionAnswer) {
            
                finishTimer();
                App.gameWin();
                PauseAudioBg();
                PlayAudioWin();  
                
                $("#notes").empty().append("<p class='note'>You Win!</p>").fadeIn("fast").delay(5000).fadeOut("fast");
                
                // hide blueberry
                // thumbnails.animate({left :"0px" ,top:"0px"},1000 ,function(){
                    // thumbnails.hide("slow");
                // });
                
                thumbnails.delay(5000).hide("slow").animate({left :"0px" ,top:"0px"},1000 );
                
            }else{
                $("#notes").empty().append("<p class='note'>Oh no!</p>").fadeIn("fast").delay(2000).fadeOut("fast");
                
                life--;
                
                PlayAudioClickWrong();
                lifePadUpdate(life);
                
                thumbnails.animate({left :"0px" ,top:"0px"},1000);
            };
            
            $(this).removeClass("highlight");
        },
        activate : function(event, ui) {
            //   curThumbnailsIndex = bgGrid.index($(this));
            //   $("#showselect").val(curThumbnailsIndex);
            //   $("#op").val("bgGrid activate");
        },
        deactivate : function(event, ui) {
            //   curThumbnailsIndex = bgGrid.index($(this));
            //    $("#showselect").val(curThumbnailsIndex);
            //    $("#op").val("bgGrid deactivate");

            $(this).removeClass("highlight");
        },
    });
    
  
    var App = {
  
        timer : null,
        pause : false,
  
        loop : function() {
            var me = App;
            if(me.pause) {
                return;
            }
            
  
            if(life == 0 || flagTimeout == true) {
                finishTimer();

                me.gameOver();
                PauseAudioBg();
                PlayAudioLose();
                
                $("#notes").empty().append("<p class='note'>You Lost!</p>").fadeIn("fast").delay(3000).fadeOut("fast");
                            
  
                 thumbnails.animate({left :"0px" ,top:"0px"},1000 ,function(){
                    thumbnails.hide("slow");
                });
            }
        },
  
        gameStart : function() {
            var me = this;
            
            life = 3;
            lifePadUpdate(life);
            initQuestion();
            
            if(this.timer != null)
                me.gameOver();            
            me.timer = setInterval(me.loop, me.speed * 10);

            resetTimer();
            PlayAudioBg();
            
  
            thumbnails.show();
            thumbnails.animate({left :"0px" ,top:"0px"},1000);
        },

        gamePause : function() {
            this.pause = true;
            
            stopTimer();
            PauseAudioBg();
        },
  
        gameOver : function() {
            clearInterval(this.timer);
            
            this.pause = false;
            this.timer = null;
            
            finishTimer();
        },
  
        addElement : function(o) {
            this.elements.push(o);
        },
  
        gameWin : function() {
            clearInterval(this.timer);
           
            this.pause = false;
            this.timer = null;           
        },

        addElement : function(o) {
            this.elements.push(o);
        }
    }

    window.onload = function() {
        initQuestion();
        
        document.onkeyup = function(e) {
            if(e.keyCode != 32) {
                return;
            }
            if(App.timer == null) {
                App.gameStart();
                resetTimer();
            } else if(App.pause) {
                App.pause = false;

                runTimer();
                PlayAudioBg();
            } else {
                App.gamePause();

                stopTimer();
            }
        }
    };
});
