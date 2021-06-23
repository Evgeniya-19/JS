function sum(a,b){
    return(a+b);
}
    
function difference(a,b){
    return(a-b);
}

function composition(a,b){
    return (a*b);
}

function division(a,b){
    if (b!==0) {
        return (a/b);
    }
    else {
        return ("делить на ноль нельзя!");
    }
}

alert(sum(1,5));
alert(difference(9,2));
alert(composition(5,5));
alert(division(10,2));
alert(division(5,0));


function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "+": alert(sum(arg1,arg2));break;
        case "-": alert(difference(arg1,arg2));break;
        case "*": alert(composition(arg1,arg2));break;
        case "/": alert(division(arg1,arg2));break;
    }
    
}


mathOperation(5,0,"/");
