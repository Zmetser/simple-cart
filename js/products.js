import data from './data.js';
import { getProductId, getDivById, getDivByName } from './auxilliary.js';

function toggleFavorite(id) {
    const product = data.find(element => element.id === id);
    // product.isFavourite = product.isFavourite? false:true;
    product.isFavourite = !product.isFavourite;
    return product.isFavourite;
}

function getProductById(id) {
    const product = data.find(product => product.id == id)
    return product
}
function addToDomCart (element, cart, clickevent){
    const product = cart.getItemById(element)
    const cartDiv = document.querySelector('.cart');
    const cartDivs = document.querySelectorAll('.cart div');
    /* const productDivs = getDivById(clickevent);
    console.log(productDivs) */
    const cartItem = Array.from(cartDivs).find(elem => elem.innerHTML === element.name);
    if(cartItem){
        const itemValue = getDivByName(cartItem).querySelector('input')
        console.log(getDivByName(cartItem))
        itemValue.value = product.qty //ez nem működik jól
        console.log(itemValue)
    }else {
        cartDiv.innerHTML += `
            <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src=./images/${element.image}></div>
                    <div class="col">
                        <div class="row">${element.name}</div>
                    </div>
                    <div class="col"><input type="number" value="${product.qty}"></div>
                    <div class="col">$${element.price} <a href="" class="close">&#10005;</a></div>
                </div>
            </div>
            `;
    }
    
    return 
}
export { toggleFavorite, getProductById, addToDomCart }