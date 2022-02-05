function getProductId(element) {
    let currentEl = element;
    while (!currentEl.dataset.productId) {
        currentEl = currentEl.parentElement;
    };
    const id = currentEl.dataset.productId;
    return id;
}



export {getProductId}