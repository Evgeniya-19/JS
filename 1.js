function fun(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i===0)
            return false;
    }
    return true;
}

var arr = [];
var i=0;
while (i<100){
  if(fun(i)) arr.push(i);
  i++;  
}
alert(arr);