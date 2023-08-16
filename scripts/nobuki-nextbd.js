// JavaScript Document
function nextNobukiBirth() {

// 現在の日付を取得
var now = new Date();

// 今年の7月25日7時59分の日付オブジェクトを作成
var targetDateThisYear = new Date(now.getFullYear(), 6, 25, 7, 59, 0);  // 月は0から始まるため、7月は6です。

// 現在の日付が7月25日7時59分以降の場合、次の年の7月25日7時59分の日付オブジェクトを作成
if (now > targetDateThisYear) {
    targetDateThisYear.setFullYear(targetDateThisYear.getFullYear() + 1);
}

// 両方の日付の間のミリ秒の差を計算し、それを秒に変換
var remainingMilliseconds = targetDateThisYear - now;
var remainingSeconds = Math.floor(remainingMilliseconds / 1000);


document.getElementById("NextNobukiBirthday").innerHTML = (remainingSeconds);
	
}
setInterval(nextNobukiBirth,500);