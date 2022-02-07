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

function getProductId(element) {
    let currentElement = element;
    while (!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    const id = currentElement.dataset.productId;
    return id;
}

export { toggleFavorite, getProductById, getProductId }