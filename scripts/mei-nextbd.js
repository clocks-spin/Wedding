// JavaScript Document
function nextMeiBirth() {

// 現在の日付を取得
var now = new Date();

// 今年の5月29日7時14分の日付オブジェクトを作成
var targetDateThisYear = new Date(now.getFullYear(), 4, 29, 7, 14, 0);

// 現在の日付が5月29日7時14分以降の場合、次の年の5月29日7時14分の日付オブジェクトを作成
if (now > targetDateThisYear) {
    targetDateThisYear.setFullYear(targetDateThisYear.getFullYear() + 1);
}

// 両方の日付の間のミリ秒の差を計算し、それを秒に変換
var remainingMilliseconds = targetDateThisYear - now;
var remainingSeconds = Math.floor(remainingMilliseconds / 1000);


document.getElementById("NextMeiBirthday").innerHTML = (remainingSeconds);
	
}
setInterval(nextMeiBirth,500);