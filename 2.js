const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.count}</div>
                </div>`;
    }
}


const basket= {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    arr:[
      {
          name: 'Ноутбук',
          price: 100,
          count: 1,
      },
       {
           name: 'mouse',
           price: 20,
           count: 2,
       } ,
       {
           name: 'flash_drive',
           price: 10,
           count: 3,
       },
       {
           name: 'printer',
           price: 30,
           count: 1,
       },  
  ], 

  init() {
    this.cartListBlock = document.querySelector('.cart-list');
    this.cartButton = document.querySelector('.cart-btn');
    // this.cartButton.addEventListener('click', () => this.clearCart());
    this.cartButton.addEventListener('click', this.clearCart.bind(this));

    this.render();
  },
  render() {
    if (this.arr.length) {
        this.arr.forEach(good => {
            this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
        });
        this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.arr.length} позиций(я) стоимостью ${this.countBasketPrice()}`);
    } else {
        this.cartListBlock.textContent = 'Корзина пуста';
    }
  },
  countBasketPrice(){
    return this.arr.reduce(function (price, good) {
        return price + good.price * good.count;
    }, 0);
  },
  clearCart() {
    this.arr = [];
    this.render();
  },
};

basket.init();

