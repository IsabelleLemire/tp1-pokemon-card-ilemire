import Card from '../card/Card';
import Image from '../image/Image';
import Title from '../title/Title';
import Ability from '../ability/Ability';

import './PokemonCard.css';

const PokemonCard = (props) => {

    return (
        <Card>
            <Image
                src={props.image.src}
                alt={props.image.alt}
                width={props.image.width}
                height={props.image.height}
            />
            <Title as="h2">{props.title}</Title>
            <Ability>{props.ability}</Ability>
        </Card>
    );
};

export default PokemonCard;
