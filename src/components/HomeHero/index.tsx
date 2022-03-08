import { HomeHeroContainer, TextContainer, CardsContainer } from './styles';

import { CgCoffee } from 'react-icons/cg';
import { GiCoffeeBeans, GiCoffeePot } from 'react-icons/gi';

import { Card } from '../resuables/Card';

export function HomeHero() {
  return (
    <HomeHeroContainer>
      <img
        src='/coffeBackground.jpg'
        alt="Foto de café"
      />

      <TextContainer>
        <h2>É sempre hora <br />de um bom café</h2>
        <button>ver detalhes</button>
      </TextContainer>

      <CardsContainer>
        <Card
          icon={<CgCoffee />}
          title='Awesome Taste'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor esse tempora. Quam ut earum architecto.'
        />

        <Card
          icon={<GiCoffeePot />}
          title='Special Blend'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor esse tempora. Quam ut earum architecto.'
        />

        <Card
          icon={<GiCoffeeBeans />}
          title='Freshly Roasted'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor esse tempora. Quam ut earum architecto.'
        />
      </CardsContainer>
    </HomeHeroContainer>
  )
}