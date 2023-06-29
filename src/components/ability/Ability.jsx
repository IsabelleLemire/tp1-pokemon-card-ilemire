import React from "react";
import Text from "../text/Text";
import "./Ability.css";

const Ability = (props) => {
  const classnames = ["ability"];

  return (
    <div className={classnames.join(" ")}>
      <Text>{props.children}</Text>
    </div>
  );
};

export default Ability;