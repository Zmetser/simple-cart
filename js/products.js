import data from './data.js';

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

function pushProduct(id) {
    const product = data.find(product => product.id === id);
    const cartEl = document.querySelector('.cart');
    //console.log(cartEl);
    cartEl.innerHTML += `<div class="row main align-items-center">
    <div class="col-2"><img class="img-fluid" src="./images/${product.image}"></div>
    <div class="col">
        <div class="row">${product.name}</div>
    </div>
    <div class="col"><input type="number" value="1"></div>
    <div class="col">$${product.price} <a href="" class="close">&#10005;</a></div>
</div>`
}

export { toggleFavorite, getProductById, pushProduct }