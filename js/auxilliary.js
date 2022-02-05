function getProductId(element) {
    let currentElement = element;
    while (!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    const id = currentElement.dataset.productId;
    return id;
}



export { getProductId }