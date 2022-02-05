function getProductId(element) {
    let currentElement = element;
    while (!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    const id = currentElement.dataset.productId;
    return id;
}
function getDivById(element){
    let currentElement = element;
    while (!currentElement.dataset.productId) {
        currentElement = currentElement.parentElement;
    };
    const divElement = currentElement
    return divElement
}
function getDivByName(element){
    let currentElement = element;
    while (currentElement.getAttribute('class') !== "row border-top border-bottom") { //ÁÁÁÁ
        currentElement = currentElement.parentElement;
    };
    const divElement = currentElement
    return divElement
}





export { getProductId, getDivById, getDivByName }