const basket= {
    arr:[
      {
          name:'comp',
          price: 100,
          count: 1
      },
       {
           name:'mouse',
           price:20,
           count:2
       } ,
       {
           name:'flash_drive',
           price:10,
           count:3
       },
       {
           name:'printer',
           price:30,
           count:1
       }   
  ], 
  countBasketPrice(){
    return this.arr.reduce((totalPrice,cartItem) => totalPrice+ cartItem.price*cartItem.count,0);
  }
  };
    
  console.log(basket.countBasketPrice());
  
  