let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#00FF00";
tg.MainButton.color = "#000000";

let item = "";
let frash_and_floral = document.getElementById("frash_and_floral");
let light_and_refreshing = document.getElementById("light_and_refreshing");
let oriental_and_exotic = document.getElementById("oriental_and_exotic");
let confident_and_stylish = document.getElementById("confident_and_stylish");

function printForm(e){
     
    // получаем значение поля key
    const keyBox = document.search.key;
    const val = keyBox.value;
    // получаем элемент printBlock
    const printBlock = document.getElementById("printBlock");
    // создаем новый параграф
    const pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = val;
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);
}
 
const printButton = document.search.print;
printButton.addEventListener("click", printForm);

frash_and_floral.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Показать!");
		item = "frash_and_floral";
		tg.MainButton.show();
	}
});
light_and_refreshing.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Показать!");
		item = "light_and_refreshing";
		tg.MainButton.show();
	}
});
oriental_and_exotic.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Показать!");
		item = "oriental_and_exotic";
		tg.MainButton.show();
	}
});
confident_and_stylish.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Показать!");
		item = "confident_and_stylish";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
	tg.sendData(item);
});
