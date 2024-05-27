let tg = window.Telegram.WebApp;

tg.expand();


let item = "";
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
  tg.MainButton.hide();
  }
else {
  tg.MainButton.setText("Получить результат");
  item = "777";
  tg.MainButton.show();
  }
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});
