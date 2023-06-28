import React, { useState } from 'react';

import Card from '../card/Card';
import Image from '../image/Image';
import Title from '../title/Title';
import Ability from '../ability/Ability';

import "./PokemonCard.css";

const PokemonCard = (props) => {
    const [showAbilities, setShowAbilities] = useState(false);

    const onMouseEnter = () => {
        setShowAbilities(true);
    };

    const onMouseLeave = () => {
        setShowAbilities(false);
    };
    
    const imageProps = props.image;

    return (
        <Card
            className="pokemon-card"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Image 
                src={imageProps.src}
                alt={imageProps.alt}
                width={imageProps.width}
                height={imageProps.height}
            />
            <Title as="h2">{props.title}</Title>
            {showAbilities && <Ability>{props.ability}</Ability>}
        </Card>
    );
};

export default PokemonCard;