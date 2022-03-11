import { CoffeeCard } from '../resuables/CoffeeCard';

import { popularCoffee } from '../../json/popularCoffee';

import { PopularCoffeeContainer } from './styles';

export function PopularCoffee() {
  return (
    <PopularCoffeeContainer>
      <h2>Our most popular coffee</h2>

      <div>
        {popularCoffee.slice(0, 8).map((item, key) => (
          <CoffeeCard
            key={key}
            id={item.id}
            image={item.image}
            ml={item.ml}
            news={item.news}
            price={item.price}
            stars={item.stars}
            title={item.title}
          />
        ))}
      </div>
    </PopularCoffeeContainer>
  )
}