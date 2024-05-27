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
  tg.MainButton.setText("Получить результат");
  
  var totalScore = 0;
  for (var i = 1; i <= 5; i++) {
        var radios = document.getElementsByName('question' + i);
        for (var j = 0, length = radios.length; j < length; j++) {
            if (radios[j].checked) {
                totalScore += Number(radios[j].value);
                break;
            }
        }
    }
    if (totalScore >= 3) {
       item = "Вероятно, у вас проблемы с компьютером, обратитесь в сервис!";
    } else {
       item = "Похоже, большинство функций вашего компьютера работают нормально.";
    }
  }
  tg.MainButton.show();
  }
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});
