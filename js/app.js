import { getProductId } from './auxilliary.js';
import { toggleFavorite } from './products.js';

const fav = document.querySelectorAll('.wish-icon');

fav.forEach(wishI => wishI.addEventListener('click', (event) => {
    const id = getProductId(event.target);
    const isFavProduct = toggleFavorite(id);

    event.target.classList.toggle("fa-heart", isFavProduct)
    event.target.classList.toggle("fa-heart-o", !isFavProduct)

}));
