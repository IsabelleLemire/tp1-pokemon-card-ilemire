import React, { useState } from 'react';

import "./Card.css";

const Card = (props) => {
  const [isAbilityVisible, setAbilityVisible] = useState(false);

  const handleMouseEnter = () => {
    setAbilityVisible(true);
  };

  const handleMouseLeave = () => {
    setAbilityVisible(false);
  };

  return (
    <div
      className={`card ${isAbilityVisible ? "ability-visible" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
      {isAbilityVisible && (
        <div className="ability-container">
          <div className="ability">{props.ability}</div>
        </div>
      )}
    </div>
  );
};

export default Card;