import { NewsletterContainer } from './styles';

export function Newsletter() {
  return (
    <NewsletterContainer>
      <div className='image'>
        <img src="https://img.elo7.com.br/product/zoom/2154237/painel-adesivo-decoracao-de-parede-cafeteria-cafe-saco-grao-cha.jpg" alt="" />
      </div>

      <div className='description'>
        <h2>Subscribe to our Newsletter</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, reiciendis? Id enim vero odio commodi blanditiis nisi, quo totam architecto ratione optio dolore possimus est?</p>
      </div>

      <div className='inputs'>
        <input type="email" placeholder='Enter Email' />
        <button>Subscribe</button>
      </div>
    </NewsletterContainer>
  )
}