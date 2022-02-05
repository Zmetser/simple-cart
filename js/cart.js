
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
}

const cart=document.querySelector(".cart")

function addToCartList(id){
    cart.innerHTML+=` <div class="row main align-items-center">
    <div class="col-2"><img class="img-fluid" src="./images/${id.image}"></div>
    <div class="col">
        <div class="row">${id.name}</div>
    </div>
    <div class="col"><input type="number" value="1"></div>
    <div class="col">${id.price}$ <a href="" class="close">&#10005;</a></div>
</div>`
}

export { Cart,addToCartList }