import React from "react";

//This is the component for the product gallery with props for image, pricing, title and sticker.
function Product(props) {
    return <>
        <article>
            <span>{props.sticker}</span>
            <img alt={props.imgtext} src={props.image}/>
            <p>{props.title}</p>
            <h4>{props.price}</h4>
        </article>

    </>

}

export default Product;