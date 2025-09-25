import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero';
import Catalog from '../../components/Catalog/Catalog';
import Transparent from '../../components/Transparent/Transparent';
import Whyus from '../../components/WhyUs/Whyus';
import Contactus from '../../components/Contactus/Contactus';
import Footer from '../../components/Footer/Footer';
import CartPage from '../CartPage/CartPage';
import CartCard from '../CartPage/CartCard/CartCard';

function Home  () {
  return (
    <>
        
        {/* <CartPage/> */}
        <Hero/>
        <Catalog/>
        <Transparent/>
        <Whyus/>
        <section id='contactus'>
          <Contactus/>
        </section>
    </>
  )
}

export default Home;
