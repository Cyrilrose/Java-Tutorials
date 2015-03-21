

    var normalelapse = 100;
    var nextelapse = normalelapse;
    var counter;
    var startTime;
    // var start1 = clock.innerText;
    var start1 = "03:00:00";
    var finish = "00:00:00";
    var timer = null;
    
    /**
     * start timing
     */
    function runTimer() {
        counter = 0;
        // initialize time
        startTime = new Date().valueOf();
        //alert(startTime);

        timer = window.setInterval("onTimer()", nextelapse);
    }

    /**
     * stop timing
     */ 
    function stopTimer() {
        window.clearTimeout(timer);
    }


    window.onload = function() {
        runTimer();
    }
    
    /**
     * countdown
     */ 
    function onTimer() {
        if(start1 == finish) {
            window.clearInterval(timer);
            $("#timeoutflag").val('true');
            return;
        }
        var hms = new String(start1).split(":");
        var ms = new Number(hms[2]);
        var s = new Number(hms[1]);
        var m = new Number(hms[0]);
        // var h = new Number(hms[0]);
        ms -= 10;
        if(ms < 0) {
            ms = 90;
            s -= 1;
            if(s < 0) {
                s = 59;
                m -= 1;
            }
            if(m < 0) {
                m = 59;
                // h -= 1;
            }
        }
        var ms = ms < 10 ? ("0" + ms) : ms;
        var ss = s < 10 ? ("0" + s) : s;
        var sm = m < 10 ? ("0" + m) : m;
        // var sh = h < 10 ? ("0" + h) : h;
        // start1 = sh + ":" + sm + ":" + ss + ":" + ms;
        start1 =  sm + ":" + ss + ":" + ms;
        clock.innerText = start1;
        //clear last timing
        window.clearInterval(timer);

        counter++;
        var counterSecs = counter * 100;
        var elapseSecs = new Date().valueOf() - startTime;
        var diffSecs = counterSecs - elapseSecs;
        nextelapse = normalelapse + diffSecs;
        //diff.value = counterSecs + "-" + elapseSecs + "=" + diffSecs;
        // next.value = "nextelapse = " + nextelapse;
        if(nextelapse < 0)
            nextelapse = 0;
        // new timer
        timer = window.setInterval("onTimer()", nextelapse);
    }
    
    /**
     * reset timer
     */
    function resetTimer(){
        
        $("#timeoutflag").val('false');
        
        // window.clearTimeout(timer);
        window.clearInterval(timer);
        start1 = "03:00:00";
        runTimer();
    } 

    /**
     * finish timing
     */
    function finishTimer(){
        $("#timeoutflag").val('false');
        window.clearInterval(timer);
        return;
    }
