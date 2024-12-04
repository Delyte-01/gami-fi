import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroGlobal'
import NewsContent from '../Components/News/NewsContent'
import Footer from '../Components/Footer/Footer'

function News() {
  return (
    <div>
        <Header />
        <HeroGlobal 
        title={"news"}/>
        <NewsContent />
        <Footer/>
    </div>
  )
}

export default News