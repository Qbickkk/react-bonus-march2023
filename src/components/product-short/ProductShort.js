import React from 'react';

const ProductShort = ({onChooseProduct, product: {id,title,description}}) => {


    const onAllProductDetailsClick = () => {
        onChooseProduct(id);
    }


    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
            <button onClick={onAllProductDetailsClick}>all product details</button>
            <hr/>
        </div>
    );
};

export {ProductShort};