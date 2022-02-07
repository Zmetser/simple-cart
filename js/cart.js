import { getProductById } from './products.js';

class Cart {
    constructor(qty) {
        this.products = [];
    }
    addToCart(id) {
        const cartItem = {
            id,
            qty: 1
        }
        const prod = this.products.find(prod => prod.id === cartItem.id)
        if (!prod) {
            this.products.push(cartItem);

        } else {
            prod.qty++;
        }
    }
    deleteCartItem(i) {
        console.log(this.products, i, this.products[i])
        this.products.splice(i, 1);
    }

    getCart() {
        return this.products;
    }

    getCartQty() {
        let qtyCounter = 0;
        this.products.forEach(item => qtyCounter += item.qty);
        return qtyCounter;
    }

    setItemQty(value) {
        this.products
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

    getPrice() {
        return this.products.reduce((totalPrice, { id, qty }) => {
            const realProduct = getProductById(id);
            return totalPrice + realProduct.price * qty;
        }, 0);
    }
}

export { Cart }