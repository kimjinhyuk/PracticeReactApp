import React from 'react'
import '../../style.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Herosection from '../HeroSection';

function Home() {
  return (
    <>
      <Herosection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
