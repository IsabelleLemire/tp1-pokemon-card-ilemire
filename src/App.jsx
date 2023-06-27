import Ability from './components/ability/Ability';
import Card from './components/card/Card';
import Container from './components/container/Container';
import Image from './components/image/Image';
import Text from './components/text/Text';
import Title from './components/title/Title';


function App() {

  return (
    <>
      <section className="app-container">
        <Card>
          <Image></Image>
          <Text></Text>
          <Ability></Ability>
          <Title></Title>
        </Card>

        <Card>
          <Image></Image>
          <Text></Text>
          <Ability></Ability>
          <Title></Title>
        </Card>

        <Card>
          <Image></Image>
          <Text></Text>
          <Ability></Ability>
          <Title></Title>
        </Card>
        
        <Card>
          <Image></Image>
          <Text></Text>
          <Ability></Ability>
          <Title></Title>
        </Card>
      </section>
    </>
  );
};

export default App;
