import { getProductId } from './auxilliary.js';
import { toggleFavorite, getProductById } from './products.js';
import { Cart } from './cart.js';


const fav = document.querySelectorAll('.wish-icon');

fav.forEach(wishI => wishI.addEventListener('click', (event) => {
    const id = getProductId(event.target);
    const isFavProduct = toggleFavorite(id);

    event.target.classList.toggle("fa-heart", isFavProduct)
    event.target.classList.toggle("fa-heart-o", !isFavProduct)

}));
const cartItem = document.querySelector(".cart")
const btns = document.querySelectorAll('.btn');
const cart = new Cart();
btns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(e.target);
        const id = getProductId(e.target);
        cart.addToCart(id)
        console.log(cart)
        console.log(getProductById(id))
        console.log(getProductById(id).image);
        cartItem.innerHTML+=`
        <div class="row border-top border-bottom">
                  <div class="row main align-items-center">
                      <div class="col-2"><img class="img-fluid" src="./images/${getProductById(id).image}"></div>
                      <div class="col">
                          <div class="row">${getProductById(id).name}</div>
                      </div>
                      <div class="col"><input type="number" value="1"></div>
                      <div class="col">$${getProductById(id).price} <a href="" class="close">&#10005;</a></div>
                  </div>`
    })
})