var calculator = {
	read: function() {
		this.a = parseInt(prompt('a', 0));
		this.b = parseInt(prompt('b', 0));
	},
	sum: function() {
		alert(this.a + this.b);
	},
	mul: function() {
		alert(this.a * this.b);
	}
}

var ladder = {
	step: 0,
	up: function() { // вверх по лестнице
		this.step++;
		return this;
	},
	down: function() { // вниз по лестнице
		this.step--;
		return this;
	},
	showStep: function() { // вывести текущую ступеньку
		alert( this.step );
	}
}

function sum(a) {
	var currentSum = a;
	function f(b) {
		currentSum += b;
		return f;
	}
	f.toString = function() {
		return currentSum;
	};
	return f;
}

function calculator1() {
	this.read = function() {
		this.a = +prompt('a', 0);
		this.b = +prompt('b', 0);
	};
	this.sum = function() {
		alert(this.a + this.b);
	};
	this.mul = function() {
		alert(this.a * this.b);
	};
}
var calc = new calculator1();

function calc2() {
	var str1 = document.getElementById("numms").value;
	var arr = str1.split(' ');
	if (arr[1]=='+') {
		alert(parseInt(arr[0])+parseInt(arr[2]));
	} else if (arr[1]=='-') {
		alert(parseInt(arr[0])-parseInt(arr[2]));
	} else if (arr[1]=='*') {
		alert(parseInt(arr[0])*parseInt(arr[2]));
	} else if(arr[1]=='/') {
		alert(parseInt(arr[0])/parseInt(arr[2]));
	} 
}

function Erat() {
	var arr = [];
	for (i=2; i<=100; i++) {
		arr[i]=i;
	}
	p = 2;
	do {
		for (var i = p*2; i<=100; i += p) {
			arr[i] = 0;
		}
		for (var i = p+1; i<=100; i++) {
			if (arr[i]>0) {
				break;
			}
		}
		p=i;
	} while (p * p < 100);
	var sum = 0;
	var nums = '';
	for (i = 0; i < arr.length; i++) {
		if (arr[i]) {
			sum += i;
			nums += arr[i]+'; ';
		}
	}
	alert(nums+' '+sum);
}
	