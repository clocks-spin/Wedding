// JavaScript Document
function showAnniversary() {

/*==== 日付オブジェクト =====*/
//現在時刻
	var now = new Date();
//誕生時刻
	var begin = new Date("2019/08/11 13:50:00");

/*==== 年数 ====*/
//経過年数を計算
	var Y = now.getFullYear() - begin.getFullYear();
	var nowY = now.getFullYear();

/*==== 月数 ====*/
//経過月数を計算
	var M = now.getMonth() - begin.getMonth();
	var nowM = now.getMonth();

//> 月数がマイナスの場合
	if(M<0){
//年を1年減らし
		Y--;
//月を12増やす
		M += 12;
	}

/*==== 日数 ====*/
//経過日数を計算
	var D = now.getDate() - begin.getDate();


//> 日数がマイナスの場合
	if(D<0)
{
//月を1減らす
		M--;
//> 月数がマイナスの場合
	if(M<0){
//年を1減らし
		Y--;
//月を12増やす
		M += 12;}
//今月を1減らす
		nowM--;
//> 今月がマイナスの場合
		if(nowM<0){
//今年を1減らし
		nowY--;
//今月を12増やす
		nowM += 12;
		}

//> 各月の日数をリスト化
	var days =
		[31,28,31,30,31,30,31,31,30,31,30,31];
//> うるう年判定
	var uruu =
		( nowY%400==0 ) ? true :
		( nowY%100==0 ) ? false :
		( nowY%4==0 ) ? true : false;
//うるう年なら2月は29日間
	if(uruu){ days[1] = 29; }
//> 日数修正
	D += days[nowM];
}

//>今日の経過秒数
var now0 = new Date(new Date().setHours(13, 50, 0, 0));
var nowV = (now - now.getMilliseconds() - now0) / 1000;

/*==== 時間 ====*/
var hh = Math.floor(nowV / 60 / 60);
var HH = Math.floor(nowV / 60 / 60);
	if(HH<0){
		D--;
		HH += 24;
		}

/*==== 分 ====*/
var mm = hh * 60;
var MM = Math.floor(nowV / 60) - mm;

/*==== 秒 ====*/
var ss = (hh * 60 * 60) + (MM * 60);
var SS = nowV - ss;

/*==== 表示 ====*/
var time = Y+"年";
if(M){ time += M+"ヶ月";}
if(D){ time += D+"日";}
if(HH){ time += HH+"時間";}
if(MM){ time += MM+"分";}
if(SS){ time += SS+"秒";}


document.getElementById("Anniversary").innerHTML = ("結婚してから"+time+"経ちました。");
}

setInterval('showAnniversary()',500);