import data from './data.js';

const fav = document.querySelectorAll('.wish-icon');
fav.forEach( wishI => wishI.addEventListener('click', (event) => {
    let currentElement = event.target;
    while(!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    let id = currentElement.dataset.productId;
    console.log(id)
}));
