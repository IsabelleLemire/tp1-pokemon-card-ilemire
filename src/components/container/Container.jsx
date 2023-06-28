import React from "react";
import "./Container.css";

const Container = (props) => {
    const classnames = ["container"];
  
    if (props.fluid) {
      classnames.push("fluid")
    }

    if (props.noGutters) {
      classnames.push("no-gutters")
    }

    if (props.className) {
      classnames.push(props.className)
    }

    if (props.grid) {
      classnames.push("grid-container");
    }    
  
    return (
      <div className={classnames.join(" ")}>
        {props.children}
      </div>
    );
  };

export default Container;