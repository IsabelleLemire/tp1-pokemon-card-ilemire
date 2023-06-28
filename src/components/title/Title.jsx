import React from "react";
import Text from "../text/Text";

import "./Title.css";

const Title = (props) => {
  const Component = props.as || "h1";
  const classnames = ["title"];

  if (props.className) {
    classnames.push(props.className);
  }

  return (
    <Component className={classnames.join(" ")}>
      <Text>{props.children}</Text>
    </Component>
  );
};

export default Title;