import { getProductId } from "./auxilliary.js";
import { toggleFavorite, getProductById } from "./products.js";
import { Cart } from "./cart.js";

const fav = document.querySelectorAll(".wish-icon");

fav.forEach((wishI) =>
    wishI.addEventListener("click", (event) => {
        const id = getProductId(event.target);
        const isFavProduct = toggleFavorite(id);

        event.target.classList.toggle("fa-heart", isFavProduct);
        event.target.classList.toggle("fa-heart-o", !isFavProduct);
    })
);

const cartElement = document.querySelector(".cart-element");
const btns = document.querySelectorAll(".btn");
const cart = new Cart();
btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const id = getProductId(e.target);
        let product = getProductById(id);
        cart.addToCart(id);

        console.log(cart);
        console.log(product);
        console.log(cartElement);

        cartElement.innerHTML += `
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="./images/${product.image}"></div>
                                <div class="col">
                                    <div class="row">${product.name}</div>
                                </div>
                                <div class="col"><input type="number" value=""></div>
                            <div class="col">$${product.price} <a href="" class="close">&#10005;</a></div>
                        </div>
                        `;
    });
});
