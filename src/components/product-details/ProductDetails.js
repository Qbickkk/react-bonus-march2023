import React from 'react';

const ProductDetails = ({details:{description,price,title,category,thumbnail,images}}) => {
    return (
        <div>
            <hr/>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>{price}</div>
                <div>{category}</div>
                <img src={thumbnail} alt={title}/>
                {images.map(image=>(
                    <>
                        <img src={image} alt={title}/>
                        <br/>
                    </>
                    ))
                }
            <hr/>
        </div>
    );
};

export {ProductDetails};