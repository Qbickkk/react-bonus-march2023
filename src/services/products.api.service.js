export const getProducts = () => {
   return  fetch('https://dummyjson.com/products')
        .then(value=>value.json())
}

export const getProductById = (id) => {
    return  fetch(`https://dummyjson.com/products/${id}`)
        .then(value=>value.json())
}

