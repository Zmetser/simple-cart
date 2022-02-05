import { getProductId } from './auxilliary.js';
import { toggleFavorite } from './products.js';
import { Cart, renderCart } from './cart.js';

const fav = document.querySelectorAll('.wish-icon');

fav.forEach(wishI => wishI.addEventListener('click', (event) => {
    const id = getProductId(event.target);
    const isFavProduct = toggleFavorite(id);

    event.target.classList.toggle("fa-heart", isFavProduct)
    event.target.classList.toggle("fa-heart-o", !isFavProduct)

}));

const btns = document.querySelectorAll('.btn');
const cart = new Cart();
btns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const id = getProductId(e.target);
        cart.addToCart(id)
        renderCart(cart)
    })
})