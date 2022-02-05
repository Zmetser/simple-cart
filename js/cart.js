import { cart } from './app.js';

class Cart {
    constructor(qty) {
        this.products = [];
    }
    addToCart(id) {
        const cartItem = {
            id,
            qty: 1,
        }
        const prod = this.products.find(prod => prod.id === cartItem.id)
        if (!prod) {
            this.products.push(cartItem)
        } else {
            prod.qty++
        }
    }
    getCart() {
        return this.products;
    }
}

export { Cart }