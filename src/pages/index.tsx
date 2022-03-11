import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { PopularCoffee } from '../components/PopularCoffee';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CoffeBuck | Home</title>
      </Head>

      <main>
        <HomeHero />
        <About />
        <PopularCoffee />
      </main>
    </>
  )
}

export default Home
