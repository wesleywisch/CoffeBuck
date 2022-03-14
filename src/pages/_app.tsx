import { useState } from 'react';
import type { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar';

import { GlobalStyle } from '../styles/globals'
import { colors } from '../styles/colors';

import { CartProvider } from '../hooks/useCart';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <CartProvider>
        <GlobalStyle />
        <Header toggle={toggle} />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
