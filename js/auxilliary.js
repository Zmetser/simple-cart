import data from './data.js';
import {cart} from './app.js'

function getProductId(element) {
    let currentElement = element;
    while (!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    const id = currentElement.dataset.productId;
    return id;
}



function insertToCart(id) {
    cart.products.forEach(qtyprod => {
        if(){

        }
        
    })
    const item = data.find(product => product.id === id)
    const prod = document.createElement("div");
    const targetdiv = document.querySelector(".col-md-8.cart")
    prod.classList.add("row", "border-top", "border-bottom")
    prod.innerHTML = "szöveg"
    prod.innerHTML = `<div class="row main align-items-center">
    <div class="col-2"><img class="img-fluid" src="./images/${item.image}"></div>
    <div class="col">
        <div class="row">${item.name}</div>
    </div>
    <div class="col"><input type="number" value="${cart.products[0].qty}"></div>
    <div class="col">$${item.price} <a href="" class="close">&#10005;</a></div>
    </div>`
    console.log(`ezaz ${prod}`)
    targetdiv.append(prod)
}



export { getProductId, insertToCart }