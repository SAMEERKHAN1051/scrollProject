import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CryptoNeeds from '../components/CryptoNeeds'
import MoreContent from '../components/MoreContent'
import ThingsTodo from '../components/ThingsTodo'
import SomeContent from '../components/SomeContent'
import Customers from '../components/Customers'
import Products from '../components/Products'
import HappyClients from '../components/HappyClients'
import ReduceRisk from '../components/ReduceRisk'
import Download from '../components/Download'
import Footer from '../components/Footer'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero />
        <CryptoNeeds />
        <Stats />
        <MoreContent />
        <ThingsTodo />
        <SomeContent />
        <Customers />
        <Products />
        <HappyClients />
        <ReduceRisk />
        <Download />
        <Footer />
    </>
  )
}

export default Home