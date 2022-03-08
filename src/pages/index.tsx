import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeHero } from '../components/HomeHero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CoffeBuck | Home</title>
      </Head>

      <main>
        <HomeHero />
      </main>
    </>
  )
}

export default Home
