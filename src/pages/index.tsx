import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { PopularCoffee } from '../components/PopularCoffee';
import { FollowInstagram } from '../components/FollowIntagram';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

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
        <FollowInstagram />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default Home
