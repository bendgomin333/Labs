function js_from_file()
{
	alert('Я - JavaScript из файла');
}

function admin_name()
{
	var name;
	name = 'Василий';
	admin = name;
	alert(admin);
}

function eu_vars()
{
	earth = 'Земля';
	user = 'Петя';
	alert('Объявленные переменные: '+earth+' + '+user)
}

function jsname()
{
	val = document.getElementById("jsname_txt").value.toLowerCase();
	if ( val == "ecmascript") {
		alert('Верно');
	} else {
		alert('Не знаете? "ECMAScript"');
	}
}

function check_number()
{	
	var c_number=prompt('Введите число');
	if (c_number > 0) {
		alert('1 (Число больше нуля)');
	} else if (c_number < 0) {
		alert('-1 (Число меньше нуля)');
	} else if (c_number = 0) {
		alert('0 (Число равно нулю)');
	} else {
		alert('Это не число, попробуйте еще раз');
	}
}

function check_login()
{
	var login=prompt("Введите логин", 'Админ');
	if (login == 'Админ') {
		var password=prompt("Введите пароль", 'Черный Властелин');
		if (password == 'Черный Властелин') {
			alert('Добро пожаловать');
		} else if (password == null) {
			alert('Отмена входа');
		} else {
			alert('Пароль неверен');
		}
	} else if (login == null) {
		alert('Отмена входа');
	} else {
		alert ('Я вас не знаю');
	}
}

function ab_num()
{
	var a = document.getElementById("a_num").value;
	var b = document.getElementById("b_num").value;
	var result = (parseInt(a) + parseInt(b)) < 4 ? 'Мало' : 'Много';
	alert(result);
}

function IfElse()
{
	var login = document.getElementById('IfElse').value;
	var result = (login) == 'Вася' ? 'Привет' :
	login == 'Директор' ? 'Здравствуйте' :
	login == '' ? 'Нет логина' : '';
	alert(result);
}

function AgeCheck()
{
	var age = parseInt(document.getElementById('Age').value);
	if (age >= 14 && age <= 90) {
		alert('Да');
	} else {
		alert('Нет');
	}
}

function AgeCheck1()
{
	var age = parseInt(document.getElementById('Age1').value);
	if (age < 14 || age > 90) {
		alert('Да');
	} else {
		alert('Нет');
	}
}

function AgeCheck2()
{
	var age = parseInt(document.getElementById('Age1').value);
	if (!(age >= 14 && age <= 90)) {
		alert('Да');
	} else {
		alert('Нет');
	}
}

function ForWhile()
{
	var i = 0;
	while (i<3){
		i++;
		alert('Номер'+i+'!');
	}
}

function Repeat()
{	
	var Num = prompt('Введите число больше 100');
	if (Num == null) {
	} else if (Num <= 100) {
		Repeat();
	}
}

function SimpleNums()
{
	var i = 2;
	var res = '';
	var ost;
	var k;
	var n = parseInt(document.getElementById('CountSN').value);
	cicle:
		for (i;i<=n;i++){
			for (k=2;k<i;k++){
				if (i % k == 0){ 
					continue cicle;
				}
			}
			if (i == 2) {
				res = 2;
			} else {
				res = res + ', ' + i;
			}
		}
	alert(res);
}

function Browsers()
{ 
	var browser = document.getElementById('Browser').value;
	if (browser == 'IE') {
		alert('О, да у вас IE');
	} else if (browser == 'Chrome' || browser == 'Firefox' || browser =='Opera' || browser == 'Safari') {
		alert('Да, и эти браузеры мы поддерживаем');
	} else {
		alert('Мы надеемся, что и в вашем браузере все ок');
	}
}

function Switch()
{
	var a = +prompt('a?','');
	switch (a) {
		case 0:
			alert(0);
			break;
		case 1:
			alert(1);
			break;
		case 2:
		case 3:
			alert('2,3');
			break;
	}
}
