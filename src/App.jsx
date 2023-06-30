import Container from "./components/container/Container";
import PokemonCard from "./components/pokemon-card/PokemonCard";
import Image from "./components/image/Image";

import "./components/ability/Ability.css";
import "./components/card/Card.css";

import Logo from "./assets/Pokemon-Logo.png"
import Bulbasaur from "./assets/bulbasaur.png"
import Squirtle from "./assets/squirtle.png"
import Charmander from "./assets/charmander.png"
import Butterfree from "./assets/butterfree.png"
import Rattata from "./assets/rattata.png"
import Pikachu from "./assets/pikachu.png"
import Nidoran from "./assets/nidoran.png"
import Clefairy from "./assets/clefairy.png"
import Ninetales from "./assets/ninetales.png"
import Jigglypuff from "./assets/jigglypuff.png"



function App() {

  return (
    <>
      <div className="margeApp">
        <Container className="logo-entete">
          <Image src={Logo} alt="Pokemon Logo" width="100%" />
        </Container>

        <Container grid>
          <PokemonCard 
          image={{
            src:Bulbasaur,
            alt:"Bulbasaur",
            width:"100%"
          }}
          title="Bulbasaur"
          ability="Overgrow, Chlorophyll"
          />
          <PokemonCard 
            image={{
            src:Charmander,
            alt:"Charmander",
            width:"100%"
          }}
          title="Charmander"
          ability="Blaze, Solar Power"
          />
          <PokemonCard 
            image={{
            src:Squirtle,
            alt:"Squirtle",
            width:"100%"
          }}
          title="Squirtle"
          ability="Torrent, Rain Dish"
          /> 
          <PokemonCard 
            image={{
            src:Butterfree,
            alt:"Butterfree",
            width:"100%"
          }}
          title="Butterfree"
          ability="Compound Eyes, Tinted Lens"
          />
          <PokemonCard 
            image={{
            src:Rattata,
            alt:"Rattata",
            width:"100%"
          }}
          title="Rattata"
          ability="Run Away, Guts, Hustle"
          /> 
          <PokemonCard 
            image={{
            src:Pikachu,
            alt:"Pikachu",
            width:"100%"
          }}
          title="Pikachu"
          ability="Static, Lightning Rod"
          />
          <PokemonCard 
            image={{
            src:Nidoran,
            alt:"Nidoran",
            width:"100%"
          }}
          title="Nidoran"
          ability="Poison Point, Rivalry, Hustle"
          /> 
          <PokemonCard 
            image={{
            src:Clefairy,
            alt:"Clefairy",
            width:"100%"
          }}
          title="Clefairy"
          ability="Cute Charm, Magic Guard, Friend Guard"
          /> 
          <PokemonCard 
            image={{
            src:Ninetales,
            alt:"Ninetales",
            width:"100%"
          }}
          title="Ninetales"
          ability="Flash Fire, Drought"
          /> 
          <PokemonCard 
            image={{
            src:Jigglypuff,
            alt:"Jigglypuff",
            width:"100%"
          }}
          title="Jigglypuff"
          ability="Cute Charm, Competitive, Friend Guard "
          />         
        </Container>
      </div>
    </>
  );
};

export default App;
