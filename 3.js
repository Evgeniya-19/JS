var a = prompt('Введите число a');
a =+a;
var b = prompt('Введите число b');
b =+b;

//let a = 5;
//let b =-3;

if ((a >= 0) & (b >= 0))
   alert(a - b);
else if ((a <= 0) & (b <= 0))  
     alert(a*b);
else if ((a*b)<0)
    alert(a-b);
