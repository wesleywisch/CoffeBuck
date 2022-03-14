import { CoffeeCardContainer } from './styles';

import { BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // full e empty
import { ImStarHalf } from 'react-icons/im'; // star half

import { useCart } from '../../../hooks/useCart';

type CoffeeCardProps = {
  id: number;
  news: boolean;
  title: string;
  image: string;
  ml: number;
  stars: number;
  price: number;
}

export function CoffeeCard({ id, image, ml, news, price, stars, title }: CoffeeCardProps) {
  const { addProduct } = useCart();

  function handleAddCar(id: number) {
    addProduct(id);
  }

  // 0 é o valor para a estrela vazia, 1 é o valor para meia e 2 é para a estrela cheia.
  let numberOfStars = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    numberOfStars[i] = 2;
  }

  if (left > 0) {
    numberOfStars[i] = 1;
  }

  return (
    <CoffeeCardContainer>
      <div className='image'>
        {news && (
          <p>new</p>
        )}
        <img src={image} alt={title} />
      </div>

      <div className='description'>
        <h3>{title}</h3>
        <p className='ml'>{ml} ml</p>

        <div className="stars">
          {numberOfStars.map((star, key) => (
            <p key={key}>
              {star === 0 && <AiOutlineStar width="18" height="18" fill="#ff9200" />}
              {star === 1 && <ImStarHalf width="18" height="18" fill="#ff9200" />}
              {star === 2 && <AiFillStar width="18" height="18" fill="#ff9200" />}
            </p>
          ))}
          <p className='numberOfStars'>{stars}</p>
        </div>

        <p className='price'>${price}</p>
        <button className='bag' onClick={() => handleAddCar(id)}>
          <BsFillBagCheckFill />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}