//秒表倒计时控制
var normalelapse = 100;
var nextelapse = normalelapse;
var counter;
var startTime;
// 开始游戏时系统时间
// var start1 = clock.innerText;
var start1 = "00:30:00";
// 倒计时起始时间
var finish = "00:00:00";
// 倒计时结束时间
var timer = null;
// 计时器

var flagTimeout = false; 

/**
 * 开始计时
 */
function runTimer() {
    counter = 0;
    // 初始化开始时间
    startTime = new Date().valueOf();

    // nextelapse是定时时间, 初始时为100毫秒
    // 注意setInterval函数: 时间逝去nextelapse(毫秒)后, onTimer才开始执行
    timer = window.setInterval("onTimer()", nextelapse);
}

/**
 * 停止计时
 */
function stopTimer() {
    window.clearTimeout(timer);
}

window.onload = function() {
    runTimer();
}
/**
 * 倒计时函数
 */
function onTimer() {
    if(start1 == finish) {
        window.clearInterval(timer);
        flagTimeout = true;
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
    start1 = sm + ":" + ss + ":" + ms;

    clock.innerText = start1;

    // 清除上一次的定时器
    window.clearInterval(timer);
    // 自校验系统时间得到时间差, 并由此得到下次所启动的新定时器的时间nextelapse
    counter++;
    var counterSecs = counter * 100;
    var elapseSecs = new Date().valueOf() - startTime;
    var diffSecs = counterSecs - elapseSecs;
    nextelapse = normalelapse + diffSecs;
    //diff.value = counterSecs + "-" + elapseSecs + "=" + diffSecs;
    // next.value = "nextelapse = " + nextelapse;
    if(nextelapse < 0)
        nextelapse = 0;
    // 启动新的定时器
    timer = window.setInterval("onTimer()", nextelapse);
}

/**
 * 重置计时
 */
function resetTimer() {
    flagTimeout = false;

    // window.clearTimeout(timer);
    window.clearInterval(timer);
    start1 = "00:30:00";
    runTimer();
}

/**
 * 结束计时
 */
function finishTimer() {
    flagTimeout = false;

    window.clearInterval(timer);
    return;
}