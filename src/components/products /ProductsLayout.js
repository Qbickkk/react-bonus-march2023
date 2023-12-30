import React, {useEffect, useState} from 'react';
import {ProductShort} from "../product-short/ProductShort";
import {getProductById, getProducts} from "../../services/products.api.service";
import {ProductDetails} from "../product-details/ProductDetails";

const ProductsLayout = () => {

    const [products, setProducts] = useState([]);
    const [chosenProduct, setChosenProduct] = useState(null)
    const onChooseProduct = (prodId)=>{
        getProductById(prodId)
            .then(value => {
                setChosenProduct(value)
            })
    }

    useEffect(() => {

        getProducts()
        .then(({products})=>{
                setProducts(products)
        })

        return ()=>{
            console.log('use effect done');
        }
    }, []);

    return (
        <div>
            <h1>Products Main Layout</h1>
            {chosenProduct && <ProductDetails details={chosenProduct}/>}
            {
                products.map(value => <ProductShort key={value.id} product={value} onChooseProduct={onChooseProduct}/>)
            }

        </div>
    );
};

export {ProductsLayout};