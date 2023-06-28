import React from 'react';
import Card from '../card/Card';
import Image from '../image/Image';
import Title from '../title/Title';
import Ability from '../ability/Ability';

import "./PokemonCard.css";

const PokemonCard = (props) => {

    const imageProps = props.image;

    return (
        <Card>
            <Image 
                src={imageProps.src}
                alt={imageProps.alt}
                width={imageProps.width}
                height={imageProps.height}
            />
            <Title as="h2">{props.title}</Title>
            <Ability>{props.ability}</Ability>
        </Card>
    );
};

export default PokemonCard;