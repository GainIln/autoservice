let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let listAsStr = "";
let btn1 = document.getElementById("btn1");

function calculateResult() {   
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
        listAsStr='Вероятно, у вас проблемы с компьютером, обратитесь в сервис!';
		document.getElementById("list").innerHTML = listAsStr;
    } else {
        listAsStr='Похоже, большинство функций вашего компьютера работают нормально.';
		document.getElementById("list").innerHTML = listAsStr;
    }
}

btn1.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию по овену");
tg.MainButton.show();
}
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(listAsStr);
});
