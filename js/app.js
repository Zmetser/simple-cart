import data from './data.js';

const fav = document.querySelectorAll('.wish-icon');
fav.forEach(wishI => wishI.addEventListener('click', (event) => {
    let currentElement = event.target;
    while (!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    const id = currentElement.dataset.productId;
    console.log(id);
    const product = data.find(element => element.id === id);

    // product.isFavourite = product.isFavourite? false:true;
    product.isFavourite = !product.isFavourite

    console.log(product)
}));
