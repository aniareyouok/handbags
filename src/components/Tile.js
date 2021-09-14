import React from "react";

// This is a component with dynamic tiles and properties in four different sections,
// as wel as a function where if an image is given
// the "image" and "image alternative text" is given as properties
// otherwise a header for the "title" and two "paragraphs" will be given
function Tile({title, textOne, textTwo, imgtext, image}) {
    if (image) {
        return <section>
            <img alt={imgtext} src={image}/>
            </section>
    } else {
        return <section>
            <h2>{title}</h2>
            <p>{textOne}</p>
            <p>{textTwo}</p>
        </section>
    }

}

export default Tile;