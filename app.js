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
    if (totalScore <= 2) {
        listAsStr='Ваш компьютер работает нормально!';
		document.getElementById("list").innerHTML = listAsStr;
    } 
    if (totalScore >= 3) {
        listAsStr='У вас могут быть незначительные проблемы, которые, возможно, можно устранить самостоятельно или помощью технической поддержки.';
		document.getElementById("list").innerHTML = listAsStr;
    }
    if (totalScore >= 6) {
        listAsStr='Вероятно есть серьёзные проблемы со своим компьютером. Обратитесь к специалисту.';
		document.getElementById("list").innerHTML = listAsStr;
    }
    if (totalScore >= 9) {
        listAsStr='Ваш компьютер вероятно нуждается в серьезном обслуживании или ремонте. Мы советуем обратиться к профессионалу.';
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
