import data from './data.js';

function toggleFavorite(id) {
    const product = data.find(element => element.id === id);
    // product.isFavourite = product.isFavourite? false:true;
    product.isFavourite = !product.isFavourite;
    return product.isFavourite;
}

function getProductById(id) {
    
    const product = data.find(product => product.id == id)
    return product
}

function getProduct(id){
    for(let i=0;i<data.length;++i){
        if(id===data[i].id){
            console.log(data[i])
            return data[i]
        }
    }
}

export { toggleFavorite, getProductById,getProduct }