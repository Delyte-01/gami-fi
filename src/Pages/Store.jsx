import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroGlobal'
import MainStore from '../Components/Store/MainStore'
import Footer from '../Components/Footer/Footer'

function Store() {
  return (
    <div>
        <Header />
        <HeroGlobal title={"store"} />
        <MainStore />
        <Footer />
    </div>
  )
}

export default Store