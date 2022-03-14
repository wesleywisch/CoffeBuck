import { CoffeeCard } from '../../components/resuables/CoffeeCard';

import { popularCoffee } from '../../json/popularCoffee';

import { CoffeesContainer } from './styles';

export default function Coffees() {
  return (
    <CoffeesContainer>
      <div>
        {popularCoffee.map((item, key) => (
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
    </CoffeesContainer>
  );
}