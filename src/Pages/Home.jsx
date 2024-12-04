import React from 'react'
import Header from '../Components/Header/Header'
import '../Components/HomePage/Home.css'
import HeroGlobal from '../Components/HeroGlobal'
import HeroHome from '../Components/HomePage/HeroHome'
import TabMenu from '../Components/HomePage/TabMenu'
import GameBlock from '../Components/HomePage/GameBlock'
import TabComty from '../Components/HomePage/TabComty'
import FeaturesHome from '../Components/HomePage/FeaturesHome'
import PopularHome from '../Components/HomePage/PopularHome'
import Footer from '../Components/Footer/Footer'
function Home() {
  return (
    <div className='container'>
        <Header />
        <HeroHome />
        <TabMenu />
        <GameBlock />
        <TabComty />
        <FeaturesHome />
        <PopularHome />
        <Footer />
    </div>
  )
}

export default Home