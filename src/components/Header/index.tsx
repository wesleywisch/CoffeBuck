import Link from 'next/link';

import { FaBars } from 'react-icons/fa';
import { BiSearch, BiUpArrow } from 'react-icons/bi';
import { IoMdLogIn } from 'react-icons/io';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from 'react-icons/md';

import { NavLink } from './NavLink';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import { HeaderContainer, HeaderLogo, MobileIcon, HeaderNav, HeaderIcons, Container, NavLinkContainer, ProductTable, Total } from './styles';

type HeaderProps = {
  toggle: () => void;
}

type Product = {
  id: number;
  news: boolean;
  title: string;
  image: string;
  ml: number;
  stars: number;
  price: number;
  amount: number;
}

export function Header({ toggle }: HeaderProps) {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))

  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <HeaderContainer>
      <HeaderLogo>
        <h1>
          <Link href='/'>
            CoffeeBuck
          </Link>
        </h1>
      </HeaderLogo>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <HeaderNav>
        <ul>
          <NavLink title='Home' path='/' />
          <NavLink title='About' path='About' />
          <NavLink title='Coffees' path='/coffees' />
          <NavLink title='Services' path='Coffees' />
          <NavLink title='Contact' path='Contact' />
        </ul>
      </HeaderNav>

      <HeaderIcons>
        <div className="divBusca">
          <input type="text" placeholder="Buscar..." />
          <BiSearch className='searchButton' />
        </div>
        <IoMdLogIn />
        <div className='box'>
          <Link href='/cart'>
            <BsFillBagCheckFill />
          </Link>

          <div className="boxCart">
            <BiUpArrow className='arrowTop' />
            <Container>
              <ProductTable>
                <thead>
                  <tr>
                    <th aria-label="product image" />
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th aria-label="delete icon" />
                  </tr>
                </thead>
                <tbody>
                  {cartFormatted.map(product => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} alt={product.title} />
                      </td>
                      <td>
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                      </td>
                      <td>
                        <div>
                          <button
                            type="button"
                            data-testid="decrement-product"
                            disabled={product.amount <= 1}
                            onClick={() => handleProductDecrement(product)}
                          >
                            <MdRemoveCircleOutline size={20} />
                          </button>
                          <input
                            type="text"
                            data-testid="product-amount"
                            readOnly
                            value={product.amount}
                          />
                          <button
                            type="button"
                            data-testid="increment-product"
                            onClick={() => handleProductIncrement(product)}
                          >
                            <MdAddCircleOutline size={20} />
                          </button>
                        </div>
                      </td>
                      <td>
                        <strong>{product.subTotal}</strong>
                      </td>
                      <td>
                        <button
                          type="button"
                          data-testid="remove-product"
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          <MdDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ProductTable>

              <div className='Finalizar'>
                <Link href='/cart'>Visualizar carrinho</Link>

                <Total>
                  <span>TOTAL</span>
                  <strong>{total}</strong>
                </Total>
              </div>
            </Container>
          </div>
        </div>
      </HeaderIcons>
    </HeaderContainer>
  )
}