import React from "react";

function Product({sticker, image, title, price}) {
    return <>
        <article>
            <span>{sticker}</span>
            <img src={image}>product image</img>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>

    </>

}

export default Product;