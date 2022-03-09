import { CardAbout } from '../resuables/CardAbout';

import { CgCoffee } from 'react-icons/cg';

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
            icon={<CgCoffee />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='right'
            order={2}
          />

          <CardAbout
            icon={<CgCoffee />}
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
            icon={<CgCoffee />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='left'
            order={1}
          />

          <CardAbout
            icon={<CgCoffee />}
            title='The Perfect Coffee'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, magni!'
            align='left'
            order={1}
          />

          <CardAbout
            icon={<CgCoffee />}
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