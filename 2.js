var basket = [
    ["computer", 100,1],
    ["mouse", 20,2],
    ["flash drive",10,3],
    ["printer",30,1]
];


function countBasketPrice(){
    var sum =0;
    for (var i=0; i<basket.length; i++){
        sum = sum + basket[i][1] * basket[i][2];       
    }
    return(sum);
}

alert(countBasketPrice(basket));