// JavaScript Document

function set2fig(num) {
// 桁数が1桁だったら先頭に0を加えて2桁に調整する
	var ret;
	if( num < 10 ) { ret = "0" + num; }
	else { ret = num; }
	return ret;
}

function showClock() {
	var nowTime = new Date();
	var nowHour = set2fig( nowTime.getHours() );
	var nowMin  = set2fig( nowTime.getMinutes() );
	var nowSec  = set2fig( nowTime.getSeconds() );
	var Clock = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
	document.getElementById("RealtimeClockArea").innerHTML = Clock;
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(showClock, 500);