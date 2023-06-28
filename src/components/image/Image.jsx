import React from 'react';
import "./Image.css";

const Image = (props) => {
    const className = ["image"];
    let loading = "lazy";
    
    if (props.className) {
        className.push(props.className);
    }

    if (props.loading) loading = props.loading;

    return (
        <img 
            className={className.join(" ")}
            src={props.src}
            alt={props.alt}
            loading={loading}
            width={props.width}
            height={props.height} 
        />
     );
};

export default Image;