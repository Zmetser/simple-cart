import { getProductId } from "./auxilliary.js";
import { toggleFavorite, getProductById } from "./products.js";
import { Cart } from "./cart.js";

const fav = document.querySelectorAll(".wish-icon");

fav.forEach((wishI) =>
    wishI.addEventListener("click", (event) => {
        const id = getProductId(event.target);
        const isFavProduct = toggleFavorite(id);

fav.forEach(wishI => wishI.addEventListener('click', (event) => {
    const id = getProductId(event.target);
    const isFavProduct = toggleFavorite(id);

    event.target.classList.toggle("fa-heart", isFavProduct)
    event.target.classList.toggle("fa-heart-o", !isFavProduct)

}));

const btns = document.querySelectorAll('.btn');
const cart = new Cart();
btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const id = getProductId(e.target);
        cart.addToCart(id)
        console.log(cart)
        console.log(getProductById(id))
        renderCart(id);
    })
})


function renderCart(id) {
    const mycart = document.querySelector("#mycart");
    mycart.innerHTML = "";
    cart.products.forEach(prod => {
        const myprod = getProductById(prod.id)
        console.log(prod)
        const newProduct = document.createElement("div");
        const cartDiv = document.querySelector(".col-md-8.cart");
        const template = `
    <div class="row border-top border-bottom">
                  <div class="row main align-items-center">
                      <div class="col-2"><img class="img-fluid" src="./images/${myprod.image}"></div>
                      <div class="col">
                          <div class="row">${myprod.name}</div>
                      </div>
                      <div class="col"><input type="number" value="${prod.qty}"></div>
                      <div class="col">${myprod.price} <a href="" class="close">&#10005;</a></div>
                  </div>
              </div>`
        newProduct.innerHTML = template;
        mycart.append(newProduct);
    })
}
