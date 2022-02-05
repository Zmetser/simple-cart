

class Cart {
    constructor() {
        this.products = [];

    }


    addToCart(id) {
        const cartItem = {
            id,
            qty: 1,
        }

        const prod = this.products.find(product => product.id === cartItem.id)

        if (!prod) {
            this.products.push(cartItem)
        } else {
            prod.qty++
        }
    }

    //nullish
    /*     addToCart2(id) {
            const cartItem = this.products.find(prod => prod.id === id) ?? {id, qty: 0};
            if(cartItem.qty === 0) {
                this.products.push(cartItem)
            }
            cartItem.qty;
        } */
}

export { Cart }