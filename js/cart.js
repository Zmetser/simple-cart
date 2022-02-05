import { getProductById } from './products.js';

class Cart{
    constructor(qty){
        this.products = [];
    }
    addToCart(id){
        const cartItem = {
            id,
            qty: 1
        }
        const prod = this.products.find( prod => prod.id === cartItem.id )
        if (!prod) {
            this.products.push(cartItem);

        } else {
            prod.qty ++;
        }
    }

    // getTotalPrice() {
    //   let totalPrice = 0;
    //   // { id: , qty: }
    //   this.products.forEach(({ id, qty }) => {
    //     const realProduct = getProductById(id);
    //     totalPrice += realProduct.price * qty
    //   });
    //   return totalPrice;
    // }

    getTotalPrice() {
      return this.products.reduce((totalPrice, { id, qty }) => {
        const realProduct = getProductById(id);
        return totalPrice + realProduct.price * qty;
      }, 0);
    }
}

export { Cart }