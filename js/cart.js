
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
            this.products.push(cartItem)
        } else {
            prod.qty ++
        } 
    }
    getItemById(product){
        const prod = this.products.find(element => element.id === product.id);
        return prod
    }
}

export { Cart }