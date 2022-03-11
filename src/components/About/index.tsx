import { CardAbout } from '../resuables/CardAbout';

import { CgCoffee } from 'react-icons/cg';
import { GiCoffeePot, GiCoffeeBeans } from 'react-icons/gi';
import { MdCoffeeMaker } from 'react-icons/md';
import { SiCoffeescript } from 'react-icons/si';
import { BiCoffeeTogo } from 'react-icons/bi';

import { AboutContainer, Title, Container } from './styles';

export function About() {
  return (
    <AboutContainer>
      <Title>Coffe To Build Your Day!</Title>

      <Container>
        <div className='CardRight'>
          <CardAbout
            icon={<CgCoffee />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='right'
            order={2}
          />

          <CardAbout
            icon={<GiCoffeePot />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='right'
            order={2}
          />

          <CardAbout
            icon={<MdCoffeeMaker />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='right'
            order={2}
          />
        </div>

        <div className='img'>
          <img src="/coffee-bag.png" alt="Saco de café" />
        </div>

        <div className='CardLeft'>
          <CardAbout
            icon={<GiCoffeeBeans />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='left'
            order={1}
          />

          <CardAbout
            icon={<SiCoffeescript />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='left'
            order={1}
          />

          <CardAbout
            icon={<BiCoffeeTogo />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='left'
            order={1}
          />
        </div>
      </Container>
    </AboutContainer>
  )
}