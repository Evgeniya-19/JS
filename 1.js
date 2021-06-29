var x = prompt("Введите число от 0 до 999: ");
x =+ x;
var obj= {
    units: 0,
    tens: 0,
    hundreds: 0
};

function fun(){
  if (x >=0 & x<999){
      obj.units = x%10;
      a= Math.floor(x/10);
      obj.tens= a%10;
      obj.hundreds = Math.floor(a/10);
      console.log(obj);
    }
   else console.log('Надо число от 0 до 999!');
}

fun(x);
 