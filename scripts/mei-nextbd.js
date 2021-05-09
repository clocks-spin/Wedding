// JavaScript Document
function nextMeiBirth() {

/*==== 日付オブジェクト =====*/
//現在時刻
	var now = new Date();

//次の誕生日
var birthday = new Date();
  birthday.setMonth(5-1);
  birthday.setDate(29);

//残り日数
var ms = birthday.getTime() - now.getTime();
  if (ms <= 0){
    var by = birthday.getFullYear();
    birthday.setFullYear(by+1);
   ms = birthday.getTime() - now.getTime();
  }
var days = ms / (24 * 60 * 60 * 1000);
days = Math.ceil(days);

//>今日の経過秒数
var now0 = new Date(new Date().setHours(7, 14, 0, 0));
var nowV = (now0 - (now - now.getMilliseconds())) / 1000;

/*==== 時間 ====*/
var hh = Math.floor(nowV / 60 / 60);
var HH = Math.floor(nowV / 60 / 60);
	if(HH<0){
		days--;
		HH += 24;
		}

/*==== 分 ====*/
var mm = hh * 60;
var MM = Math.floor(nowV / 60) - mm;

/*==== 表示 ====*/
var time = days + "日と";
if(HH){ time += HH+"時間";}
if(MM){ time += MM+"分";}


document.getElementById("NextMeiBirthday").innerHTML = ("次の誕生日まであと"+time+"です。");
	
}
setInterval(nextMeiBirth,500);