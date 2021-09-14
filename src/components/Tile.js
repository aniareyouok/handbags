import React from "react";

// This works as a component with props for the footer but not yet as a function
function Tile([title, textOne, textTwo, imgtext, image]) {
    if (image) {
        return <>
            <img alt={imgtext} src={image}/>
        </>
    } else {
        return <>
            <h2>{title}</h2>
            <p>{textOne}</p>
            <p>{textTwo}</p>
        </>
    }

}

export default Tile;