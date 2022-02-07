import { toggleFavorite, getProductById, getProductId } from './products.js';
import { Cart } from './cart.js';


const fav = document.querySelectorAll('.wish-icon');

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
        renderCart();
        updatePrice();
        updateNumber();

    })
})

function renderCart() {
    const mycart = document.querySelector("#mycart");
    mycart.innerHTML = "";
    cart.products.forEach(prod => {
        let myprod = getProductById(prod.id)
        mycart.innerHTML += `
            <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src="./images/${myprod.image}"></div>
                    <div class="col">
                        <div class="row">${myprod.name}</div>
                    </div>
                    <div class="col"><input type="number" value="${prod.qty}" class="nrInput"></div>
                    <div class="col">${myprod.price} <a href="" class="close">&#10005;</a></div>
                </div>
            </div>`
    })
    deleteItem()
    updatePrice();
    updateNumber();
    updateItemNrInCart()
}
let shippingPrice = 0;
function updatePrice() {
    const totalPriceElement = document.querySelector('.js_total-price')
    const priceElements = document.querySelectorAll('.js_price');
    const totalPrice = cart.getPrice();
    priceElements.forEach(priceElements => {
        priceElements.innerHTML = `$${totalPrice}`
    });
    totalPriceElement.innerHTML = `$${totalPrice + shippingPrice}`;

    const shippingMethod = document.querySelector('select');
    shippingMethod.addEventListener('change', (event) => {
        shippingPrice = Number(event.target.value);
        totalPriceElement.innerHTML = `$${totalPrice + shippingPrice}`;
    })
}
function updateNumber() {
    const itemsSumm = document.querySelectorAll('.js_itemsSummary');
    let itemNrs = cart.getCartQty();
    itemsSumm.forEach(itemElements => { itemElements.innerHTML = `${itemNrs} items` })
}

function updateItemNrInCart() {
    const nrInputs = document.querySelectorAll('.nrInput');
    for (let i = 0; i < nrInputs.length; i++) {
        nrInputs[i].addEventListener('change', (e) => {
            if (e.target.value < 1) {
                e.target.value = 1;
            }
            cart.products[i].qty = Number(e.target.value);

            renderCart()
        })
    }
}

function deleteItem() {
    const deleteBtns = document.querySelectorAll('.close');
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', (event) => {
            event.preventDefault()
            cart.deleteCartItem(i);
            renderCart()
        })
    }
}