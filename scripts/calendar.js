// JavaScript Document

function showCalendar() {
	var nowTime = new Date();
	var nowYear = ( nowTime.getFullYear() );
	var nowMonth  = ( nowTime.getMonth()+1 );
	var nowDate  = ( nowTime.getDate() );
	var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
	var nowWeek = weekDay[nowTime.getDay()];
	var Calendar = "今日は、" + nowYear + "年" + nowMonth + "月" + nowDate + "日（" + nowWeek + "）です。";
	document.getElementById("RealtimeCalendarArea").innerHTML = Calendar;
}
// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(showCalendar, 500);