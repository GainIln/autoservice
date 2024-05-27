let tg = window.Telegram.WebApp;

tg.expand();


let item = "";
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  item = "1";
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});
