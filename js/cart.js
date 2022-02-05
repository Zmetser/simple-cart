import data from './data.js'

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

let basket = document.querySelector('#cart');

function clearCart(){
    let rows = document.querySelectorAll('.cartItem')
    rows.forEach((cartItems)=>{
        cartItems.remove()
    })
    
}

function renderCart(cart){
    clearCart()
   
    cart.products.forEach((items)=>{
        const productfind = data.find(dbId => dbId.id === items.id)
        const newRow = document.createElement('div')
        newRow.classList.add('row', 'border-top', 'border-bottom', 'cartItem')
        

        const mainRow = document.createElement('div')
        mainRow.classList.add('row', 'main', 'align-items-center')
        newRow.append(mainRow)
        //img append
        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-2')
        
        const itemIMG = document.createElement('img')
        itemIMG.classList.add('img-fluid')
        itemIMG.src = `./images/${productfind.image}`
        imgDiv.append(itemIMG)
        //description append
        const dContainer = document.createElement('div')
        dContainer.classList.add('col')
        const descriptionOfProduct = document.createElement('div')
        descriptionOfProduct.classList.add('row')
        descriptionOfProduct.innerText = productfind.name
        dContainer.append(descriptionOfProduct)
        //qty input
        const dContainer2 = document.createElement('div')
        dContainer2.classList.add('col')
        const qtyInput = document.createElement('input')
        qtyInput.type = "number";
        qtyInput.value = items.qty;
        dContainer2.append(qtyInput)
        //close cross
        const dContainer3 = document.createElement('div');
        dContainer3.classList.add('col')
        dContainer3.innerText = `$${productfind.price}`
        const close = document.createElement('a')
        close.classList.add('close')
        close.innerHTML = '&#10005;'
        dContainer3.append(close)


        mainRow.append(imgDiv, dContainer,dContainer2,dContainer3)
        basket.append(newRow)
    })
    
   
}



export { Cart, renderCart}

