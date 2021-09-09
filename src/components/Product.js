import React from "react";

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