import Link from 'next/link';

import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <div className="containerFooter">
        <div>
          <h3>About Us</h3>
          <Link href="/">About frspp</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Eastures</Link>
        </div>

        <div>
          <h3>Resources</h3>
          <Link href="/">Help contact</Link>
          <Link href="/">Book a demo</Link>
          <Link href="/">Status</Link>
          <Link href="/">Blog</Link>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <Link href="/">Questions our feedback?</Link>
          <Link href="/">whold love to hear from</Link>
        </div>
      </div>

      <div className='border'></div>
    </FooterContainer>
  )
}