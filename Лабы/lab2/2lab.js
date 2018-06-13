function checkAge1(age)
{
	age = parseInt(document.getElementById("chk_age").value);
	return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2()
{
	age = parseInt(document.getElementById("chk_age").value);
	return (age > 18) || confirm('Родители разрешили?');
}


function min1()
{
	var a = parseInt(document.getElementById("value_a").value);
	var b = parseInt(document.getElementById("value_b").value);
	var min = a;
	if (a>b) {
		min = b;
	}
	alert('min('+a+', '+b+') == '+min);
}

function pow1()
{
	var x = parseInt(document.getElementById("value_x").value);
	var n = parseInt(document.getElementById("value_n").value);
	var res = x;
	var i = 1;
	while (i<n){
		res = res*x;
		i++;
	}
	if (n==0) res=1;
	alert('pow(x,n) = '+res);
}

function SumTo1()
{
	var n = parseInt(document.getElementById("value_n1").value);
	var res = 0;
	for (var i=1;i<=n;i++){
		res = res+i;
	}
	alert('SumTo(n) = '+res);
}

function SumTo2(n)
{	
	if (n == 1) return 1;
	return n + SumTo2(n-1);
}

function SumTo3(n)
{
	var res = 0;
	var n = parseInt(document.getElementById("value_n3").value);
	res = ((1 + n)/2)*n;
	alert('SumTo(n) = '+res);
}

function factorial(n)
{
	if (n == 1) return 1;
	return n * factorial(n-1);
}

function Fib()
{
	var n = parseInt(document.getElementById("value_n5").value);
	var prev = 1;
	var next = 1;
	var res = prev + next;
	for (var i=3;i<=n;i++){
		res = prev + next;
		prev = next;
		next = res;
	}
	alert(res);
}