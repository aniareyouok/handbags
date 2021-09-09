import React from "react";

// This works as a component with props for the footer but not yet as a function
function Tile(props) {
    if(props.textOne != null) {
        return <>
            <h2>{props.title}</h2>
            <p>{props.textOne}</p>
            <p>{props.textTwo}</p>
        </>
    } else {
        return <>
            <img alt={props.imgtext} src={props.image}/>
        </>
    }

}

export default Tile;