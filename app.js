let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


let item = "";
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
  tg.MainButton.hide();
  }
else {
  tg.MainButton.setText("Получить1 результат");
  item = "2";
  tg.MainButton.show();
 
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});
